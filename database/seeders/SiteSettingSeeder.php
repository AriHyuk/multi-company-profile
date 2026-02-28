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
            'company_name'     => 'MultiCo Profiles',
            'tagline'          => 'Your Digital Growth Partner',

            // SEO Global
            'meta_description' => 'MultiCo Profiles — Agency digital full-service: web development, UI/UX, dan strategi digital untuk bisnis yang ingin bertumbuh.',
            'og_image'         => '/images/og-default.jpg',

            // Kontak
            'contact_email'    => 'hello@multicompany.id',
            'contact_phone'    => '+62 812-3456-7890',
            'contact_address'  => 'Jl. Contoh No. 1, Jakarta Selatan, DKI Jakarta',
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
