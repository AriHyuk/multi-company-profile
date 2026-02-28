<?php

use App\Models\SiteSetting;

it('shows homepage and renders Home Inertia component', function () {
    // Pastikan ada minimal satu setting supaya controller tidak error
    SiteSetting::updateOrCreate(['key' => 'hero_title'], ['value' => 'Test Title']);

    $response = $this->get('/');

    $response->assertOk();
    $response->assertInertia(
        fn ($page) => $page->component('Home')
            ->has('hero')
            ->has('meta')
            ->has('company')
    );
});

it('returns hero data from site settings', function () {
    SiteSetting::updateOrCreate(['key' => 'hero_title'],    ['value' => 'Judul Hero']);
    SiteSetting::updateOrCreate(['key' => 'hero_subtitle'], ['value' => 'Subtitle Hero']);

    $response = $this->get('/');

    $response->assertInertia(
        fn ($page) => $page
            ->component('Home')
            ->where('hero.title', 'Judul Hero')
            ->where('hero.subtitle', 'Subtitle Hero')
    );
});
