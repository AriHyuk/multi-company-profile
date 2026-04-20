<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return inertia('Contact/Index', [
            'contact' => [
                'email'   => \App\Models\SiteSetting::get('contact_email', ''),
                'phone'   => \App\Models\SiteSetting::get('contact_phone', ''),
                'address' => \App\Models\SiteSetting::get('contact_address', ''),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'company' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        \App\Models\Lead::create($validated);

        return back()->with('success', 'Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.');
    }
}
