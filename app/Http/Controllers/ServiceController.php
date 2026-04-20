<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function index(): Response
    {
        $services = Service::where('is_active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('Services/Index', [
            'services' => $services,
            'contact' => [
                'email'   => \App\Models\SiteSetting::get('contact_email', 'contact@multi-company.co.id'),
                'phone'   => \App\Models\SiteSetting::get('contact_phone', '+62 (21) 1234-5678'),
                'address' => \App\Models\SiteSetting::get('contact_address', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
            ],
        ]);
    }

    public function show(string $slug): Response
    {
        $service = Service::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        return Inertia::render('Services/Show', [
            'service' => $service,
            'contact' => [
                'email'   => \App\Models\SiteSetting::get('contact_email', 'contact@multi-company.co.id'),
                'phone'   => \App\Models\SiteSetting::get('contact_phone', '+62 (21) 1234-5678'),
                'address' => \App\Models\SiteSetting::get('contact_address', 'Jl. Raya Kemang No. 123, Jakarta Selatan, 12730'),
            ],
        ]);
    }
}
