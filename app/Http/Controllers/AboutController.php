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
        ]);
    }
}
