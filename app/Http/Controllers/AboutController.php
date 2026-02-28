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
        $teams = TeamMember::where('is_active', true)->orderBy('order')->get();

        return Inertia::render('About', [
            'content' => $content,
            'teams' => $teams,
        ]);
    }
}
