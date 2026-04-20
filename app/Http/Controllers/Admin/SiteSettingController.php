<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class SiteSettingController extends Controller
{
    public function index()
    {
        $settings = SiteSetting::all()->pluck('value', 'key');
        
        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'settings' => 'required|array',
            'settings.*' => 'nullable|string'
        ]);

        DB::beginTransaction();
        try {
            foreach ($data['settings'] as $key => $value) {
                SiteSetting::set($key, $value);
            }
            DB::commit();
            return redirect()->back()->with('success', 'Pengaturan berhasil diperbarui!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal simpan site settings: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Gagal memperbarui pengaturan. Silakan coba lagi.');
        }
    }
}
