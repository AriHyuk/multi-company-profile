<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Portfolio::create([
            'title' => 'E-Commerce Platform Rebrand',
            'slug' => 'ecommerce-platform-rebrand',
            'description' => 'A complete overhaul of a leading e-commerce platform\'s user interface and experience.',
            'category' => 'Web Development',
            'client' => 'Shopify Inc.',
            'year' => 2023,
            'status' => 'published',
            'thumbnail' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070',
            'images' => [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
                'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=2070',
            ],
        ]);

        \App\Models\Portfolio::create([
            'title' => 'Smart City Mobile App',
            'slug' => 'smart-city-mobile-app',
            'description' => 'Developing a cross-platform mobile application for city navigation and citizen engagement.',
            'category' => 'Mobile App',
            'client' => 'City of Jakarta',
            'year' => 2024,
            'status' => 'published',
            'thumbnail' => 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=2006',
            'images' => [
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070',
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974',
            ],
        ]);

        \App\Models\Portfolio::create([
            'title' => 'Cloud Infrastructure Migration',
            'slug' => 'cloud-infrastructure-migration',
            'description' => 'Migrating a legacy on-premise system to high-availability AWS infrastructure.',
            'category' => 'Cloud & DevOps',
            'client' => 'DataCore Systems',
            'year' => 2023,
            'status' => 'published',
            'thumbnail' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
            'images' => [
                'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=1940',
                'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2070',
            ],
        ]);
    }
}
