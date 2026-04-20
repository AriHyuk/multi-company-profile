<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::where('status', 'published')
            ->orderBy('year', 'desc')
            ->get();

        return Inertia::render('Portfolio/Index', [
            'portfolios' => $portfolios,
            'contact' => [
                'email' => env('CONTACT_EMAIL', 'contact@multi-company.co.id'),
                'phone' => env('CONTACT_PHONE', '+62 (21) 1234-5678'),
                'address' => env('CONTACT_ADDRESS', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
            ],
        ]);
    }

    public function show($slug)
    {
        $portfolio = Portfolio::where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return Inertia::render('Portfolio/Show', [
            'portfolio' => $portfolio,
            'contact' => [
                'email' => env('CONTACT_EMAIL', 'contact@multi-company.co.id'),
                'phone' => env('CONTACT_PHONE', '+62 (21) 1234-5678'),
                'address' => env('CONTACT_ADDRESS', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
            ],
        ]);
    }
}
