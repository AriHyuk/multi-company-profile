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
                'email'   => \App\Models\SiteSetting::get('contact_email', ''),
                'phone'   => \App\Models\SiteSetting::get('contact_phone', ''),
                'address' => \App\Models\SiteSetting::get('contact_address', ''),
            ],
        ]);
    }
}
