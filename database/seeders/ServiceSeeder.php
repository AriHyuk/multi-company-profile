<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title'          => 'Web Development',
                'slug'           => 'web-development',
                'description'    => 'Kami membangun website profesional yang cepat, responsif, dan SEO-friendly. Dari landing page sederhana hingga aplikasi web kompleks, kami menggunakan teknologi modern seperti Laravel, React, dan Tailwind CSS untuk memastikan performa terbaik dan pengalaman pengguna yang optimal.',
                'icon'           => '🖥️',
                'price_estimate' => 'Mulai dari Rp 5.000.000',
                'order'          => 1,
                'is_active'      => true,
            ],
            [
                'title'          => 'UI/UX Design',
                'slug'           => 'ui-ux-design',
                'description'    => 'Desain antarmuka yang intuitif dan estetis adalah kunci keberhasilan produk digital. Tim desainer kami menciptakan pengalaman pengguna yang menyenangkan melalui riset mendalam, wireframing, prototyping, hingga desain visual yang siap implementasi.',
                'icon'           => '🎨',
                'price_estimate' => 'Mulai dari Rp 3.000.000',
                'order'          => 2,
                'is_active'      => true,
            ],
            [
                'title'          => 'Digital Marketing',
                'slug'           => 'digital-marketing',
                'description'    => 'Tingkatkan visibilitas bisnis Anda di dunia digital. Layanan kami mencakup SEO, Google Ads, manajemen media sosial, dan pembuatan konten strategis yang dirancang untuk menjangkau target audiens Anda dan mengkonversi mereka menjadi pelanggan setia.',
                'icon'           => '📈',
                'price_estimate' => 'Mulai dari Rp 2.500.000/bulan',
                'order'          => 3,
                'is_active'      => true,
            ],
            [
                'title'          => 'Network & Application',
                'slug'           => 'network-application',
                'description'    => 'Layanan infrastruktur jaringan dan pengembangan aplikasi terintegrasi. Kami menyediakan solusi networking yang handal, konfigurasi server, serta pengembangan aplikasi berbasis kebutuhan bisnis Anda untuk memastikan konektivitas dan performa sistem yang optimal.',
                'icon'           => '🌐',
                'price_estimate' => 'Hubungi Kami',
                'order'          => 4,
                'is_active'      => true,
            ],
            [
                'title'          => 'IT Care',
                'slug'           => 'it-care',
                'description'    => 'Layanan perawatan dan dukungan IT menyeluruh dari Digikova. Mulai dari pelatihan sumber daya manusia di bidang teknologi informasi hingga sertifikasi keahlian yang diakui secara profesional, kami hadir mendukung transformasi digital Anda.',
                'icon'           => '💙',
                'price_estimate' => 'Hubungi Kami',
                'order'          => 5,
                'is_active'      => true,
            ],
            [
                'title'          => 'Pelatihan Bidang IT',
                'slug'           => 'pelatihan-bidang-it',
                'description'    => 'Program pelatihan teknologi informasi yang komprehensif untuk individu maupun institusi. Kurikulum dirancang oleh praktisi industri untuk memastikan relevansi dan kualitas pembelajaran yang langsung dapat diterapkan di dunia kerja.',
                'icon'           => '🎓',
                'price_estimate' => 'Hubungi Kami',
                'order'          => 6,
                'is_active'      => true,
            ],
            [
                'title'          => 'Sertifikasi Keahlian',
                'slug'           => 'sertifikasi-keahlian',
                'description'    => 'Program sertifikasi keahlian di bidang teknologi informasi yang diakui secara profesional. Tingkatkan kompetensi dan nilai jual Anda di industri teknologi dengan sertifikat resmi yang diakui oleh lembaga-lembaga profesional.',
                'icon'           => '🏅',
                'price_estimate' => 'Hubungi Kami',
                'order'          => 7,
                'is_active'      => true,
            ],
        ];

        foreach ($services as $service) {
            Service::updateOrCreate(
                ['slug' => $service['slug']],
                $service
            );
        }
    }
}
