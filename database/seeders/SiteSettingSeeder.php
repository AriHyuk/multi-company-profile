<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // Hero Section
            'hero_title'       => 'Solusi Digital Terpadu untuk Bisnis Anda',
            'hero_subtitle'    => 'Kami membangun web, aplikasi, dan strategi digital yang mendorong pertumbuhan bisnis dari skala lokal hingga global.',
            'hero_cta_label'   => 'Konsultasi Gratis',
            'hero_cta_url'     => '/kontak',

            // Tagline & Branding
            'company_name'     => 'DIGIKOVA',
            'tagline'          => 'Your Digital Growth Partner',

            // SEO Global
            'meta_description' => 'DIGIKOVA — Agency digital full-service: web development, UI/UX, dan strategi digital untuk bisnis yang ingin bertumbuh.',
            'og_image'         => '/images/og-default.jpg',

            // Kontak
            'contact_email'    => 'helpdesk@digikova.com',
            'contact_phone'    => '089509713121',
            'contact_address'  => 'jl.cipedak, srengseng sawah, jagakarsa, jakarta selatan 12640',
            'contact_maps_url' => 'https://maps.google.com',

            // Social Media
            'social_instagram' => 'https://instagram.com',
            'social_linkedin'  => 'https://linkedin.com',
            'social_twitter'   => '',
        ];

        foreach ($settings as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }
    }
}
