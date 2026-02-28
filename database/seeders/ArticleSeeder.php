<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = \App\Models\User::where('role', 'admin')->first();

        $articles = [
            [
                'title' => 'Masa Depan Transformasi Digital di Indonesia',
                'slug' => 'masa-depan-transformasi-digital-indonesia',
                'body' => 'Transformasi digital bukan lagi pilihan, melainkan keharusan bagi bisnis untuk bertahan di era modern...',
                'excerpt' => 'Menjelajahi bagaimana teknologi mengubah lanskap bisnis di Indonesia.',
                'category' => 'Teknologi',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => '5 Tips Meningkatkan Brand Awareness Perusahaan',
                'slug' => '5-tips-meningkatkan-brand-awareness',
                'body' => 'Brand awareness adalah kunci utama dalam membangun kepercayaan konsumen terhadap produk Anda...',
                'excerpt' => 'Cara efektif membangun citra merek yang kuat di pasar kompetitif.',
                'category' => 'Marketing',
                'status' => 'published',
                'published_at' => now()->subDays(2),
            ],
            [
                'title' => 'Pentingnya UI/UX yang Baik untuk Konversi Website',
                'slug' => 'pentingnya-ui-ux-untuk-konversi',
                'body' => 'Desain yang bagus tanpa pengalaman pengguna yang intuitif tidak akan menghasilkan konversi yang maksimal...',
                'excerpt' => 'Mengapa Anda harus fokus pada pengalaman pengguna saat membangun website.',
                'category' => 'Design',
                'status' => 'published',
                'published_at' => now()->subDays(5),
            ],
        ];

        foreach ($articles as $article) {
            \App\Models\Article::create(array_merge($article, ['author_id' => $admin->id]));
        }
    }
}
