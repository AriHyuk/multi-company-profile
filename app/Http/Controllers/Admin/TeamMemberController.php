<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
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

        DB::beginTransaction();
        try {
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
            
            DB::commit();
            return redirect()->route('admin.team-members.index')->with('success', 'Anggota tim berhasil ditambahkan!');
        } catch (\Exception $e) {
            DB::rollBack();
            if (isset($path)) {
                Storage::disk('public')->delete($path);
            }
            Log::error('Gagal simpan team member: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Gagal menambahkan anggota tim. Silakan coba lagi.');
        }
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

        DB::beginTransaction();
        try {
            if ($request->hasFile('photo')) {
                $oldPhoto = $teamMember->photo;
                
                $manager = new ImageManager(new Driver());
                $imageFile = $request->file('photo');
                $filename = uniqid() . '_' . time() . '.webp';
                $path = 'team-members/' . $filename;

                $processedImage = $manager->read($imageFile)->toWebp(80);
                Storage::disk('public')->put($path, $processedImage);

                $data['photo'] = $path;
            }

            $teamMember->update($data);

            if (isset($oldPhoto) && $oldPhoto) {
                Storage::disk('public')->delete($oldPhoto);
            }

            DB::commit();
            return redirect()->route('admin.team-members.index')->with('success', 'Data anggota tim berhasil diperbarui!');
        } catch (\Exception $e) {
            DB::rollBack();
            if (isset($path)) {
                Storage::disk('public')->delete($path);
            }
            Log::error('Gagal update team member: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Gagal memperbarui data anggota tim. Silakan coba lagi.');
        }
    }

    public function destroy(TeamMember $teamMember)
    {
        DB::beginTransaction();
        try {
            $photo = $teamMember->photo;
            $teamMember->delete();

            if ($photo) {
                Storage::disk('public')->delete($photo);
            }

            DB::commit();
            return redirect()->back()->with('success', 'Anggota tim berhasil dihapus!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal hapus team member: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menghapus anggota tim.');
        }
    }
}
