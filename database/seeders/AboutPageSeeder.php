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
        \App\Models\AboutContent::truncate();
        \App\Models\TeamMember::truncate();
        
        \App\Models\AboutContent::create([
            'description' => 'Digikova adalah perusahaan yang bergerak di bidang layanan Teknologi Informasi dan Komunikasi (TIK) yang berfokus pada peningkatan literasi digital serta pengembangan solusi teknologi bagi masyarakat dan bisnis. Melalui kegiatan seminar, pelatihan, dan layanan IT Support, Digikova membantu berbagai kalangan, mulai dari pendidikan, perusahaan, hingga masyarakat umum, dalam memanfaatkan teknologi secara optimal. Dengan komitmen pada profesionalisme dan inovasi, Digikova hadir sebagai mitra terpercaya dalam mendukung transformasi digital.',
            'vision' => 'Menjadi perusahaan layanan Teknologi Informasi dan Komunikasi (TIK) yang terpercaya, inovatif, dan berperan aktif dalam meningkatkan kualitas sumber daya manusia melalui pemanfaatan teknologi digital.',
            'mission' => "Memberikan layanan IT Support yang profesional, cepat, dan tepat guna.\nMeningkatkan literasi digital masyarakat melalui pelatihan, seminar, dan edukasi teknologi.\nMengembangkan solusi teknologi yang inovatif sesuai kebutuhan bisnis dan pendidikan.\nMembangun kemitraan yang kuat dengan berbagai sektor, baik pendidikan, pemerintahan, maupun swasta.\nMendukung transformasi digital yang berkelanjutan untuk meningkatkan efisiensi dan produktivitas.",
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
