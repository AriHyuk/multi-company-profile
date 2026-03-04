<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use App\Models\AboutContent;
use App\Models\TeamMember;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Halaman beranda — ambil setting dari DB dan pass ke React.
     */
    public function index(): Response
    {
        $aboutContent = AboutContent::first();
        $teamPreview = TeamMember::where('is_active', true)->orderBy('order')->take(3)->get();

        return Inertia::render('Home', [
            'hero' => [
                'title'    => SiteSetting::get('hero_title', 'Selamat Datang'),
                'subtitle' => SiteSetting::get('hero_subtitle', ''),
                'ctaLabel' => SiteSetting::get('hero_cta_label', 'Hubungi Kami'),
                'ctaUrl'   => SiteSetting::get('hero_cta_url', '/kontak'),
            ],
            'meta' => [
                'description' => SiteSetting::get('meta_description', ''),
                'ogImage'     => SiteSetting::get('og_image', ''),
            ],
            'company' => [
                'name'    => SiteSetting::get('company_name', 'Company'),
                'tagline' => SiteSetting::get('tagline', ''),
            ],
            'aboutContent' => $aboutContent,
            'teamPreview' => $teamPreview,
        ]);
    }
}
