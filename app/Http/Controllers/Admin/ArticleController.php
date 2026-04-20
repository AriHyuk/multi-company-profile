<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Article/Index', [
            'articles' => Article::with('author:id,name')->latest()->paginate(10)
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Article/Form');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'excerpt' => 'nullable|string|max:500',
            'category' => 'required|string',
            'status' => 'required|in:draft,published',
            'thumbnail' => 'required|image|max:2048',
        ]);

        $data['slug'] = Str::slug($data['title']);
        $data['author_id'] = auth()->id();
        
        if ($data['status'] === 'published') {
            $data['published_at'] = now();
        }

        DB::beginTransaction();
        try {
            if ($request->hasFile('thumbnail')) {
                $manager = new ImageManager(new Driver());
                $imageFile = $request->file('thumbnail');
                $filename = uniqid() . '_' . time() . '.webp';
                $path = 'articles/thumbnails/' . $filename;

                $processedImage = $manager->read($imageFile)->toWebp(80);
                Storage::disk('public')->put($path, $processedImage);

                $data['thumbnail'] = $path;
            }

            Article::create($data);

            DB::commit();
            return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil diterbitkan!');
        } catch (\Exception $e) {
            DB::rollBack();
            if (isset($path)) {
                Storage::disk('public')->delete($path);
            }
            Log::error('Gagal simpan artikel: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menerbitkan artikel. Silakan coba lagi.');
        }
    }

    public function edit(Article $article)
    {
        return Inertia::render('Admin/Article/Form', [
            'article' => $article
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'excerpt' => 'nullable|string|max:500',
            'category' => 'required|string',
            'status' => 'required|in:draft,published',
            'thumbnail' => 'nullable|image|max:2048',
        ]);

        $data['slug'] = Str::slug($data['title']);

        if ($article->status === 'draft' && $data['status'] === 'published') {
            $data['published_at'] = now();
        }

        DB::beginTransaction();
        try {
            if ($request->hasFile('thumbnail')) {
                $oldThumbnail = $article->thumbnail;
                
                $manager = new ImageManager(new Driver());
                $imageFile = $request->file('thumbnail');
                $filename = uniqid() . '_' . time() . '.webp';
                $path = 'articles/thumbnails/' . $filename;

                $processedImage = $manager->read($imageFile)->toWebp(80);
                Storage::disk('public')->put($path, $processedImage);

                $data['thumbnail'] = $path;
            }

            $article->update($data);

            if (isset($oldThumbnail) && $oldThumbnail) {
                Storage::disk('public')->delete($oldThumbnail);
            }

            DB::commit();
            return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil diperbarui!');
        } catch (\Exception $e) {
            DB::rollBack();
            if (isset($path)) {
                Storage::disk('public')->delete($path);
            }
            Log::error('Gagal update artikel: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal memperbarui artikel. Silakan coba lagi.');
        }
    }

    public function destroy(Article $article)
    {
        DB::beginTransaction();
        try {
            $thumbnail = $article->thumbnail;
            $article->delete();

            if ($thumbnail) {
                Storage::disk('public')->delete($thumbnail);
            }

            DB::commit();
            return redirect()->back()->with('success', 'Artikel berhasil dihapus!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal hapus artikel: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menghapus artikel.');
        }
    }
}
