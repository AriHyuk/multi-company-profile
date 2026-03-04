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
        ]);
    }
}
