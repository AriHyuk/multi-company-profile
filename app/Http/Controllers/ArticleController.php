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
                'email' => env('CONTACT_EMAIL', 'contact@multi-company.co.id'),
                'phone' => env('CONTACT_PHONE', '+62 (21) 1234-5678'),
                'address' => env('CONTACT_ADDRESS', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
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
                'email' => env('CONTACT_EMAIL', 'contact@multi-company.co.id'),
                'phone' => env('CONTACT_PHONE', '+62 (21) 1234-5678'),
                'address' => env('CONTACT_ADDRESS', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
            ],
        ]);
    }
}
