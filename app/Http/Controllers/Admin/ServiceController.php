<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Service/Index', [
            'services' => Service::latest()->paginate(10)
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Service/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|in:active,inactive',
        ]);

        $data = [
            'title'       => $validated['name'],
            'slug'        => Str::slug($validated['name']),
            'description' => $validated['short_description'],
            'content'     => $validated['description'],
            'icon'        => $validated['icon'],
            'is_active'   => $validated['status'] === 'active',
        ];

        DB::beginTransaction();
        try {
            Service::create($data);
            DB::commit();
            return redirect()->route('admin.services.index')->with('success', 'Layanan berhasil ditambahkan!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal simpan service: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menambahkan layanan. Silakan coba lagi.');
        }
    }

    public function edit(Service $service)
    {
        return Inertia::render('Admin/Service/Form', [
            'service' => $service
        ]);
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|in:active,inactive',
        ]);

        $data = [
            'title'       => $validated['name'],
            'slug'        => Str::slug($validated['name']),
            'description' => $validated['short_description'],
            'content'     => $validated['description'],
            'icon'        => $validated['icon'],
            'is_active'   => $validated['status'] === 'active',
        ];

        DB::beginTransaction();
        try {
            $service->update($data);
            DB::commit();
            return redirect()->route('admin.services.index')->with('success', 'Layanan berhasil diperbarui!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal update service: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal memperbarui layanan. Silakan coba lagi.');
        }
    }

    public function destroy(Service $service)
    {
        DB::beginTransaction();
        try {
            $service->delete();
            DB::commit();
            return redirect()->back()->with('success', 'Layanan berhasil dihapus!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal hapus service: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menghapus layanan.');
        }
    }
}
