<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class LeadController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Lead/Index', [
            'leads' => Lead::latest()->paginate(10)
        ]);
    }

    public function show(Lead $lead)
    {
        if ($lead->status === 'new') {
            try {
                $lead->update(['status' => 'read']);
            } catch (\Exception $e) {
                Log::error('Gagal update status lead: ' . $e->getMessage());
            }
        }

        return Inertia::render('Admin/Lead/Show', [
            'lead' => $lead
        ]);
    }

    public function destroy(Lead $lead)
    {
        DB::beginTransaction();
        try {
            $lead->delete();
            DB::commit();
            return redirect()->route('admin.leads.index')->with('success', 'Lead berhasil dihapus!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal hapus lead: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menghapus lead.');
        }
    }
}
