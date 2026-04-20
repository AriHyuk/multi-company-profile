<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AboutContent;

class AboutController extends Controller
{
    public function index()
    {
        $content = AboutContent::first();

        return Inertia::render('About', [
            'content' => $content,
            'contact' => [
                'email' => env('CONTACT_EMAIL', 'contact@multi-company.co.id'),
                'phone' => env('CONTACT_PHONE', '+62 (21) 1234-5678'),
                'address' => env('CONTACT_ADDRESS', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
            ],
        ]);
    }
}
