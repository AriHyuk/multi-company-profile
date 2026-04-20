<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AboutContent;
use App\Models\TeamMember;

class AboutController extends Controller
{
    public function index()
    {
        $content = AboutContent::first();
        $teamMembers = TeamMember::where('is_active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('About', [
            'content' => $content,
            'teamMembers' => $teamMembers,
            'contact' => [
                'email' => env('CONTACT_EMAIL', 'contact@multi-company.co.id'),
                'phone' => env('CONTACT_PHONE', '+62 (21) 1234-5678'),
                'address' => env('CONTACT_ADDRESS', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
            ],
        ]);
    }
}
