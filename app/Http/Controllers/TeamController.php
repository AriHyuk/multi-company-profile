<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Inertia\Inertia;
use Inertia\Response;

class TeamController extends Controller
{
    /**
     * Tampilkan semua anggota tim yang aktif.
     */
    public function index(): Response
    {
        $team = TeamMember::where('is_active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('Team/Index', [
            'team' => $team,
            'contact' => [
                'email'   => \App\Models\SiteSetting::get('contact_email', 'contact@multi-company.co.id'),
                'phone'   => \App\Models\SiteSetting::get('contact_phone', '+62 (21) 1234-5678'),
                'address' => \App\Models\SiteSetting::get('contact_address', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
            ],
        ]);
    }
}
