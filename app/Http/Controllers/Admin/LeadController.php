<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
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
            $lead->update(['status' => 'read']);
        }

        return Inertia::render('Admin/Lead/Show', [
            'lead' => $lead
        ]);
    }

    public function destroy(Lead $lead)
    {
        $lead->delete();
        return redirect()->route('admin.leads.index')->with('success', 'Lead berhasil dihapus!');
    }
}
