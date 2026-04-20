<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class PortfolioController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Portfolio/Index', [
            'portfolios' => Portfolio::latest()->paginate(10)
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Portfolio/Form');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'client' => 'nullable|string',
            'year' => 'nullable|string',
            'status' => 'required|in:draft,published',
            'thumbnail' => 'required|image|max:2048',
            'images' => 'nullable|array',
            'images.*' => 'image|max:2048',
        ]);

        $data['slug'] = Str::slug($data['title']);
        
        $manager = new ImageManager(new Driver());
        $uploadedFiles = [];

        DB::beginTransaction();
        try {
            if ($request->hasFile('thumbnail')) {
                $imageFile = $request->file('thumbnail');
                $filename = uniqid() . '_thumb_' . time() . '.webp';
                $path = 'portfolios/thumbnails/' . $filename;

                $processedImage = $manager->read($imageFile)->toWebp(80);
                Storage::disk('public')->put($path, $processedImage);

                $data['thumbnail'] = $path;
                $uploadedFiles[] = $path;
            }

            $imagePaths = [];
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $imageFile) {
                    $filename = uniqid() . '_gallery_' . time() . '.webp';
                    $path = 'portfolios/gallery/' . $filename;

                    $processedImage = $manager->read($imageFile)->toWebp(80);
                    Storage::disk('public')->put($path, $processedImage);

                    $imagePaths[] = $path;
                    $uploadedFiles[] = $path;
                }
            }
            $data['images'] = $imagePaths;

            Portfolio::create($data);

            DB::commit();
            return redirect()->route('admin.portfolios.index')->with('success', 'Project berhasil ditambahkan!');
        } catch (\Exception $e) {
            DB::rollBack();
            foreach ($uploadedFiles as $file) {
                Storage::disk('public')->delete($file);
            }
            Log::error('Gagal simpan portfolio: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menambahkan project. Silakan coba lagi.');
        }
    }

    public function edit(Portfolio $portfolio)
    {
        return Inertia::render('Admin/Portfolio/Form', [
            'portfolio' => $portfolio
        ]);
    }

    public function update(Request $request, Portfolio $portfolio)
    {
        $rules = [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'client' => 'nullable|string',
            'year' => 'nullable|string',
            'status' => 'required|in:draft,published',
            'thumbnail' => 'nullable|image|max:2048',
            'images' => 'nullable|array',
            'images.*' => 'image|max:2048',
        ];

        $data = $request->validate($rules);
        $data['slug'] = Str::slug($data['title']);

        $manager = new ImageManager(new Driver());
        $uploadedFiles = [];
        $oldFilesToDelete = [];

        DB::beginTransaction();
        try {
            if ($request->hasFile('thumbnail')) {
                if ($portfolio->thumbnail) {
                    $oldFilesToDelete[] = $portfolio->thumbnail;
                }
                $imageFile = $request->file('thumbnail');
                $filename = uniqid() . '_thumb_' . time() . '.webp';
                $path = 'portfolios/thumbnails/' . $filename;

                $processedImage = $manager->read($imageFile)->toWebp(80);
                Storage::disk('public')->put($path, $processedImage);

                $data['thumbnail'] = $path;
                $uploadedFiles[] = $path;
            }

            if ($request->hasFile('images')) {
                foreach ($portfolio->images ?? [] as $oldImage) {
                    $oldFilesToDelete[] = $oldImage;
                }
                
                $imagePaths = [];
                foreach ($request->file('images') as $imageFile) {
                    $filename = uniqid() . '_gallery_' . time() . '.webp';
                    $path = 'portfolios/gallery/' . $filename;

                    $processedImage = $manager->read($imageFile)->toWebp(80);
                    Storage::disk('public')->put($path, $processedImage);

                    $imagePaths[] = $path;
                    $uploadedFiles[] = $path;
                }
                $data['images'] = $imagePaths;
            }

            $portfolio->update($data);

            foreach ($oldFilesToDelete as $file) {
                Storage::disk('public')->delete($file);
            }

            DB::commit();
            return redirect()->route('admin.portfolios.index')->with('success', 'Project berhasil diperbarui!');
        } catch (\Exception $e) {
            DB::rollBack();
            foreach ($uploadedFiles as $file) {
                Storage::disk('public')->delete($file);
            }
            Log::error('Gagal update portfolio: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal memperbarui project. Silakan coba lagi.');
        }
    }

    public function destroy(Portfolio $portfolio)
    {
        DB::beginTransaction();
        try {
            $thumbnail = $portfolio->thumbnail;
            $images = $portfolio->images ?? [];
            
            $portfolio->delete();

            if ($thumbnail) {
                Storage::disk('public')->delete($thumbnail);
            }
            foreach ($images as $image) {
                Storage::disk('public')->delete($image);
            }

            DB::commit();
            return redirect()->back()->with('success', 'Project berhasil dihapus!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal hapus portfolio: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menghapus project.');
        }
    }
}
