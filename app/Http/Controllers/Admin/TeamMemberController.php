<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TeamMemberController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/TeamMember/Index', [
            'team_members' => TeamMember::latest()->paginate(10)
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/TeamMember/Form');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'is_active' => 'required|boolean',
            'photo' => 'required|image|max:2048',
            'order' => 'nullable|integer',
        ]);

        if ($request->hasFile('photo')) {
            $manager = new ImageManager(new Driver());
            $imageFile = $request->file('photo');
            $filename = uniqid() . '_' . time() . '.webp';
            $path = 'team-members/' . $filename;

            $processedImage = $manager->read($imageFile)->toWebp(80);
            Storage::disk('public')->put($path, $processedImage);

            $data['photo'] = $path;
        }

        TeamMember::create($data);

        return redirect()->route('admin.team-members.index')->with('success', 'Anggota tim berhasil ditambahkan!');
    }

    public function edit(TeamMember $teamMember)
    {
        return Inertia::render('Admin/TeamMember/Form', [
            'teamMember' => $teamMember
        ]);
    }

    public function update(Request $request, TeamMember $teamMember)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'is_active' => 'required|boolean',
            'photo' => 'nullable|image|max:2048',
            'order' => 'nullable|integer',
        ]);

        if ($request->hasFile('photo')) {
            if ($teamMember->photo) {
                Storage::disk('public')->delete($teamMember->photo);
            }
            $manager = new ImageManager(new Driver());
            $imageFile = $request->file('photo');
            $filename = uniqid() . '_' . time() . '.webp';
            $path = 'team-members/' . $filename;

            $processedImage = $manager->read($imageFile)->toWebp(80);
            Storage::disk('public')->put($path, $processedImage);

            $data['photo'] = $path;
        }

        $teamMember->update($data);

        return redirect()->route('admin.team-members.index')->with('success', 'Data anggota tim berhasil diperbarui!');
    }

    public function destroy(TeamMember $teamMember)
    {
        if ($teamMember->photo) {
            Storage::disk('public')->delete($teamMember->photo);
        }
        $teamMember->delete();

        return redirect()->back()->with('success', 'Anggota tim berhasil dihapus!');
    }
}
