<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = \App\Models\Article::with('author:id,name')
            ->where('status', 'published')
            ->orderBy('published_at', 'desc')
            ->paginate(9);

        return \Inertia\Inertia::render('Article/Index', [
            'articles' => $articles,
            'contact' => [
                'email'   => \App\Models\SiteSetting::get('contact_email', ''),
                'phone'   => \App\Models\SiteSetting::get('contact_phone', ''),
                'address' => \App\Models\SiteSetting::get('contact_address', ''),
            ],
        ]);
    }

    public function show($slug)
    {
        $article = \App\Models\Article::with('author:id,name')
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return \Inertia\Inertia::render('Article/Show', [
            'article' => $article,
            'contact' => [
                'email'   => \App\Models\SiteSetting::get('contact_email', ''),
                'phone'   => \App\Models\SiteSetting::get('contact_phone', ''),
                'address' => \App\Models\SiteSetting::get('contact_address', ''),
            ],
        ]);
    }
}
