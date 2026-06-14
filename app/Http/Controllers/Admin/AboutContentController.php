<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutContent;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AboutContentController extends Controller
{
    public function edit()
    {
        $content = AboutContent::first() ?? new AboutContent();
        
        return Inertia::render('Admin/About/Index', [
            'content' => $content
        ]);
    }

    public function update(Request $request)
    {
        $content = AboutContent::first();

        $data = $request->validate([
            'description' => 'required|string',
            'vision' => 'required|string',
            'mission' => 'required|string',
            'founded_year' => 'required|integer',
            'logo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('logo')) {
            if ($content && $content->logo) {
                Storage::disk('public')->delete($content->logo);
            }
            $path = $request->file('logo')->store('about', 'public');
            $data['logo'] = $path;
        }

        if ($content) {
            $content->update($data);
        } else {
            AboutContent::create($data);
        }

        return redirect()->route('admin.about-content.edit')
            ->with('success', 'Konten Tentang Kami berhasil diperbarui.');
    }
}
