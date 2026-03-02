<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Lead;
use App\Models\Portfolio;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_leads' => Lead::count(),
                'total_articles' => Article::count(),
                'total_portfolios' => Portfolio::count(),
                'recent_leads' => Lead::latest()->take(5)->get(),
            ]
        ]);
    }
}
