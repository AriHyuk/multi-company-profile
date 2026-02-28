<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\AboutContent::create([
            'description' => 'PT Multi Company Profiles adalah perusahaan teknologi terdepan yang berfokus pada solusi inovatif untuk ekosistem digital. Kami percaya pada kolaborasi dan keunggulan dalam memberikan nilai tambah bagi mitra kami.',
            'vision' => 'Menjadi pusat inovasi dan katalisator pertumbuhan bisnis digital di Asia Tenggara.',
            'mission' => 'Memberikan solusi teknologi berkelas dunia, membangun ekosistem yang berkelanjutan, dan memberdayakan talenta digital terbaik.',
            'founded_year' => 2015,
            'logo' => null, // Placeholder logo bisa menggunakan asset lokal atau diset dari CMS nantinya
        ]);

        $teamMembers = [
            [
                'name' => 'Budi Santoso',
                'role' => 'Chief Executive Officer',
                'photo' => null,
                'bio' => 'Visioner di balik PT Multi Company Profiles dengan pengalaman lebih dari 15 tahun di industri teknologi.',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Siti Aminah',
                'role' => 'Chief Technology Officer',
                'photo' => null,
                'bio' => 'Ahli dalam arsitektur sistem skala besar dan memimpin inovasi produk perusahaan.',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Andi Wijaya',
                'role' => 'Chief Marketing Officer',
                'photo' => null,
                'bio' => 'Strategis pemasaran dengan rekam jejak sukses dalam membangun brand awareness secara global.',
                'order' => 3,
                'is_active' => true,
            ],
        ];

        foreach ($teamMembers as $member) {
            \App\Models\TeamMember::create($member);
        }
    }
}
