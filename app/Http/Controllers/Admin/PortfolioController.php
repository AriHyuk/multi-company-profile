<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
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

        if ($request->hasFile('thumbnail')) {
            $imageFile = $request->file('thumbnail');
            $filename = uniqid() . '_thumb_' . time() . '.webp';
            $path = 'portfolios/thumbnails/' . $filename;

            $processedImage = $manager->read($imageFile)->toWebp(80);
            Storage::disk('public')->put($path, $processedImage);

            $data['thumbnail'] = $path;
        }

        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $imageFile) {
                $filename = uniqid() . '_gallery_' . time() . '.webp';
                $path = 'portfolios/gallery/' . $filename;

                $processedImage = $manager->read($imageFile)->toWebp(80);
                Storage::disk('public')->put($path, $processedImage);

                $imagePaths[] = $path;
            }
        }
        $data['images'] = $imagePaths;

        Portfolio::create($data);

        return redirect()->route('admin.portfolios.index')->with('success', 'Project berhasil ditambahkan!');
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

        if ($request->hasFile('thumbnail')) {
            if ($portfolio->thumbnail) {
                Storage::disk('public')->delete($portfolio->thumbnail);
            }
            $imageFile = $request->file('thumbnail');
            $filename = uniqid() . '_thumb_' . time() . '.webp';
            $path = 'portfolios/thumbnails/' . $filename;

            $processedImage = $manager->read($imageFile)->toWebp(80);
            Storage::disk('public')->put($path, $processedImage);

            $data['thumbnail'] = $path;
        }

        if ($request->hasFile('images')) {
            // Untuk simplifikasi, kita timpa galeri lama. 
            // Di Phase 2 bisa buat manajemen remove per image.
            foreach ($portfolio->images ?? [] as $oldImage) {
                Storage::disk('public')->delete($oldImage);
            }
            
            $imagePaths = [];
            foreach ($request->file('images') as $imageFile) {
                $filename = uniqid() . '_gallery_' . time() . '.webp';
                $path = 'portfolios/gallery/' . $filename;

                $processedImage = $manager->read($imageFile)->toWebp(80);
                Storage::disk('public')->put($path, $processedImage);

                $imagePaths[] = $path;
            }
            $data['images'] = $imagePaths;
        }

        $portfolio->update($data);

        return redirect()->route('admin.portfolios.index')->with('success', 'Project berhasil diperbarui!');
    }

    public function destroy(Portfolio $portfolio)
    {
        if ($portfolio->thumbnail) {
            Storage::disk('public')->delete($portfolio->thumbnail);
        }
        foreach ($portfolio->images ?? [] as $image) {
            Storage::disk('public')->delete($image);
        }
        
        $portfolio->delete();

        return redirect()->back()->with('success', 'Project berhasil dihapus!');
    }
}
