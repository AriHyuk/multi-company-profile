# 🗺️ Roadmap Ngoding — Phase 1 MVP

> Company Profile & Ecosystem Platform  
> Stack: Laravel 12 · Inertia.js · React 19 · TypeScript · Tailwind CSS v4 · PostgreSQL  
> Target: Go-live dalam 4–6 minggu

---

## Cara Pakai File Ini

- Kerjakan **Epic secara berurutan** (Epic 1 harus selesai sebelum Epic 2+)
- Tandai task selesai dengan `[x]`
- Setiap task yang punya catatan teknis, baca **📝 Notes**-nya dulu sebelum ngoding
- Referensi PRD: [Notion PRD](https://www.notion.so/PRD-Company-Profile-Ecosystem-311c241984268106a8a9f134c14674fe)

---

## 🟢 EPIC 1 — Setup & Infrastruktur

> Fondasi project. **Harus selesai 100% sebelum Epic lainnya.**

### 1.1 Install Dependencies & Stack

- [ ] Install Inertia.js (server-side)

    ```bash
    composer require inertiajs/inertia-laravel
    php artisan inertia:middleware
    ```

- [ ] Install Inertia.js + React (client-side)

    ```bash
    npm install @inertiajs/react react react-dom
    npm install -D @types/react @types/react-dom typescript
    ```

- [ ] Install Pest PHP

    ```bash
    composer require pestphp/pest pestphp/pest-plugin-laravel --dev
    php artisan pest:install
    ```

- [ ] Update `vite.config.js` untuk React + Inertia

    📝 Notes: Tambahkan `@vitejs/plugin-react` dan pastikan entry point ke `resources/js/app.tsx`

- [ ] Buat `resources/js/app.tsx` sebagai entry point Inertia

- [ ] Tambahkan `HandleInertiaRequests` middleware ke `bootstrap/app.php`

### 1.2 Database

- [ ] Ganti DB driver ke **PostgreSQL** di `.env`

    ```text
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=multi_company_profiles
    DB_USERNAME=postgres
    DB_PASSWORD=secret
    ```

- [ ] Buat database `multi_company_profiles` di PostgreSQL

- [ ] Jalankan migration default Laravel

    ```bash
    php artisan migrate
    ```

### 1.3 Auth & RBAC

- [ ] Install Laravel Breeze (Inertia + React stack)

    ```bash
    composer require laravel/breeze --dev
    php artisan breeze:install react --typescript
    npm install && npm run build
    php artisan migrate
    ```

- [ ] Tambahkan kolom `role` ke migration `users`

    📝 Notes: `role` = enum `admin` | `editor`, default `editor`

- [ ] Buat middleware `EnsureRole` untuk proteksi route CMS

- [ ] Register middleware di `bootstrap/app.php`

- [ ] Buat seeder `AdminSeeder` — seed 1 akun admin default

### 1.4 Shared Layout & Komponen Dasar

- [ ] Buat `resources/js/layouts/PublicLayout.tsx` (Navbar + Footer)
- [ ] Buat `resources/js/layouts/CmsLayout.tsx` (Sidebar + Header)
- [ ] Buat komponen `<Head />` wrapper untuk SEO meta tags (Inertia Head)
- [ ] Setup Tailwind CSS v4 — pastikan config & path sudah benar

### 1.5 Storage

- [ ] Jalankan `php artisan storage:link`
- [ ] Pastikan `storage/app/public` bisa diakses publik

---

## 🟡 EPIC 2 — Halaman Publik: Beranda

### 2.1 Database

- [ ] Buat migration `site_settings` (key-value store)

    ```text
    id, key (string, unique), value (text), created_at, updated_at
    ```

    📝 Notes: Simpan hero_title, hero_desc, hero_image, tagline dsb. pakai pattern key-value

- [x] Buat Model `SiteSetting` + helper method `SiteSetting::get('hero_title')`
- [x] Buat seeder data awal site_settings

### 2.2 Route & Controller

- [x] Buat `HomeController` — method `index()`, return Inertia `Home`
- [x] Tambahkan route `GET /` → `HomeController@index`

### 2.3 React Page

- [x] Buat `resources/js/pages/Home.tsx`
- [x] Komponen `HeroSection` — headline, subheadline, CTA button
- [x] Komponen `ServicesPreview` — 3–4 layanan unggulan
- [x] Komponen `FeaturedProjects` — 3 portofolio terbaru dari DB
- [x] Komponen `CtaBanner` — tombol menuju /kontak
- [x] SEO: meta title + description + OG tags via Inertia `<Head>`

---

## 🟡 EPIC 3 — Halaman Publik: Tentang Kami

### 3.1 Database

- [x] Buat migration `about_content` (description, vision, mission, founded_year, logo)
- [x] Buat migration `team_members` (name, role, photo, bio, order, is_active)
- [x] Buat Model + Seeder untuk keduanya

### 3.2 Route & Controller

- [x] Buat `AboutController@index`, return Inertia `About`
- [x] Tambahkan route `GET /tentang-kami`

### 3.3 React Page

- [x] Buat `resources/js/pages/About.tsx`
- [x] Komponen `CompanyProfile` (text + logo)
- [x] Komponen `VisionMission` (2 kolom card)
- [x] Komponen `TeamGrid` (grid card: foto, nama, jabatan)
- [x] SEO meta tags

---

## 🟡 EPIC 4 — Halaman Publik: Layanan

### 4.1 Database

- [x] Buat migration `services` (title, slug, description, icon, price_estimate, order, is_active)
- [x] Buat Model `Service` + Seeder 3 layanan awal

### 4.2 Route & Controller

- [x] Buat `ServiceController` — `index()` + `show($slug)`
- [x] Route `GET /layanan` + `GET /layanan/{slug}`

### 4.3 React Page

- [x] Buat `resources/js/pages/Services/Index.tsx` — grid card semua layanan
- [x] Buat `resources/js/pages/Services/Show.tsx` — detail + CTA form konsultasi
- [x] SEO meta tags per halaman (gunakan slug sebagai basis)

---

## 🟡 EPIC 5 — Halaman Publik: Portofolio

### 5.1 Database

- [x] Buat migration `portfolios` (title, slug, description, thumbnail, images JSON, category, client, year, status: draft/published)
- [x] Buat Model `Portfolio` + Seeder 3 proyek placeholder

### 5.2 Route & Controller

- [x] Buat `PortfolioController` — `index()` + `show($slug)`
- [x] Route `GET /portofolio` + `GET /portofolio/{slug}`

### 5.3 React Page

- [x] Buat `resources/js/pages/Portfolio/Index.tsx` — grid + filter kategori
- [x] Buat `resources/js/pages/Portfolio/Show.tsx` — detail + galeri gambar
- [x] SEO meta tags

---

## 🟡 EPIC 6 — Halaman Publik: Artikel / Blog

### 6.1 Database

- [x] Buat migration `articles` (title, slug, body, excerpt, thumbnail, category, author_id FK users, status: draft/published, published_at)
- [x] Buat Model `Article` + relasi `author()` ke `User`
- [x] Buat Seeder 3 artikel placeholder

### 6.2 Route & Controller

- [x] Buat `ArticleController` — `index()` + `show($slug)`
- [x] Route `GET /artikel` + `GET /artikel/{slug}`

### 6.3 React Page

- [x] Buat `resources/js/pages/Article/Index.tsx` — listing + pagination
- [x] Buat `resources/js/pages/Article/Show.tsx` — render body + author info
- [x] SEO meta tags per artikel (auto-generate dari excerpt)

---

## 🟡 EPIC 7 — Halaman Publik: Kontak + Lead Form

### 7.1 Database

- [x] Buat migration `leads` (name, email, phone, service_interest, message, status: new/read/archived, created_at)
- [x] Buat Model `Lead`

### 7.2 Route & Controller

- [x] Buat `ContactController` — `index()` + `store(Request $request)`
- [x] Route `GET /kontak` + `POST /kontak`
- [x] Validasi server-side: required, email, max:length, CSRF auto dari Inertia

### 7.3 React Page

- [x] Buat `resources/js/pages/Contact.tsx`
- [x] Form konsultasi (nama, email, telepon, layanan diminati, pesan)
- [x] Flash message sukses/error setelah submit
- [x] Google Maps embed (iframe)
- [x] Info kontak: email, WhatsApp, alamat, jam operasional

---

## 🔵 EPIC 8 — CMS Dashboard

### 8.1 Layout & Navigation

- [x] `CmsLayout.tsx` — sidebar, header, breadcrumb
- [x] Dashboard home: statistik card (total artikel, portofolio, lead baru hari ini)

### 8.2 Manajemen Halaman Statis _(Admin only)_

- [x] `Admin\SiteSettingController` — form edit hero, about content
- [x] Route group `admin/` + middleware `EnsureRole:admin`

### 8.3 Manajemen Portofolio _(Admin + Editor)_

- [x] `Admin\PortfolioController` — CRUD lengkap
- [x] Upload thumbnail via `storage/public`, simpan path ke DB
- [x] Toggle published/draft

### 8.4 Manajemen Artikel _(Admin + Editor)_

- [x] `Admin\ArticleController` — CRUD lengkap
- [x] Integrasikan rich text editor: **Tiptap** (recommended)
- [x] Toggle published/draft + timestamp `published_at`

### 8.5 Manajemen Layanan & Tim _(Admin only)_

- [x] `Admin\ServiceController` — CRUD + reorder
- [x] `Admin\TeamMemberController` — CRUD + upload foto

### 8.6 Manajemen User _(Admin only)_

- [x] `Admin\UserController` — CRUD akun, assign role admin/editor

---

## 🔵 EPIC 9 — Lead Inbox & Notifikasi Email

### 9.1 Lead Inbox

- [ ] `Admin\LeadController` — `index()` + `show($id)` + `updateStatus($id)`
- [ ] Tabel leads di CMS: nama, email, layanan, tanggal, status badge
- [ ] Filter status: All / New / Read / Archived

### 9.2 Notifikasi Email via Queue

- [ ] Install Redis atau gunakan database queue driver

    ```bash
    # tambahkan ke .env:
    QUEUE_CONNECTION=database
    php artisan queue:table && php artisan migrate
    ```

- [ ] Buat `Mailable` class `NewLeadNotification`
- [ ] Dispatch via `Mail::to(...)->queue(...)` — **bukan** `send()` langsung
- [ ] Jalankan queue worker: `php artisan queue:work`
- [ ] Konfigurasi SMTP di `.env` (Mailtrap untuk dev)

---

## 🔵 EPIC 10 — SEO & Performance

- [ ] Install `spatie/laravel-sitemap`

    ```bash
    composer require spatie/laravel-sitemap
    ```

- [ ] Generate `sitemap.xml` otomatis (artikel + portofolio + halaman statis)
- [ ] Buat `public/robots.txt`
- [ ] Terapkan canonical URL di semua page via Inertia `<Head>`
- [ ] Image optimization: upload → simpan versi WebP, lazy loading di frontend
- [ ] Audit Google PageSpeed Insights, fix LCP > 2.5s
- [ ] Submit sitemap ke Google Search Console setelah deployment

---

## � EPIC 11 — Caching

> Halaman publik yang jarang berubah di-cache untuk kurangi query DB dan percepat response time.

- [ ] Konfigurasi cache driver — Redis (recommended) atau file

    ```
    # .env
    CACHE_STORE=redis
    REDIS_HOST=127.0.0.1
    REDIS_PORT=6379
    ```

- [ ] Cache response halaman statis (Beranda, Tentang Kami)

    ```php
    // ContohController@index
    $data = Cache::remember('home_page', 3600, fn() => [
        'heroTitle' => SiteSetting::get('hero_title'),
        // ...
    ]);
    ```

- [ ] Cache listing Artikel & Portofolio (invalidate saat ada CRUD baru)

    ```php
    // Saat artikel disimpan/update:
    Cache::forget('articles_listing');
    Cache::tags(['articles'])->flush(); // jika pakai Redis tags
    ```

- [ ] Cache response Route::GET untuk halaman publik via middleware

    ```bash
    composer require barryvdh/laravel-httpcache
    # atau pakai Nginx-level caching di production
    ```

- [ ] Strategi invalidate: cache di-bust setiap kali Admin simpan perubahan konten

    📝 Notes: Gunakan `Cache::tags()` jika pakai Redis untuk selective invalidation per resource

---

## 🟣 EPIC 12 — Testing (Unit → Feature → E2E)

### 12.1 Unit Test (Pest PHP)

- [ ] Test `SiteSetting::get()` helper method
- [ ] Test `Lead` model scopes (scopeNew, scopeUnread)
- [ ] Test `EnsureRole` middleware — allow & deny scenarios
- [ ] Test `NewLeadNotification` Mailable — subject, recipient, content

    ```bash
    php artisan test --filter=Unit
    ```

### 12.2 Feature Test (Pest + Laravel HTTP)

- [ ] Test halaman publik bisa diakses tanpa auth (200 OK)

    ```php
    it('shows homepage', fn() => get('/')->assertOk()->assertInertia(
        fn($page) => $page->component('Home')
    ));
    ```

- [ ] Test form kontak — submission valid → 201/redirect + lead tersimpan di DB
- [ ] Test form kontak — submission invalid → validation error response
- [ ] Test CMS route redirect ke login jika tidak auth
- [ ] Test RBAC: Editor tidak bisa akses halaman Admin-only (403)
- [ ] Test CRUD Artikel: create + update + delete via authenticated user

    ```bash
    php artisan test --filter=Feature
    ```

### 12.3 E2E Test (Laravel Dusk atau Playwright)

📝 Notes: Pilih salah satu — **Playwright** (recommended, lebih modern & cepat) atau Laravel Dusk (built-in Laravel, lebih mudah setup)

**Opsi A — Playwright:**

```bash
npm install -D @playwright/test
npx playwright install
```

- [ ] Test flow: buka Beranda → klik CTA Kontak → isi form → submit → lihat success message
- [ ] Test flow: login admin → tambah artikel baru → artikel muncul di halaman publik
- [ ] Test flow: login editor → coba akses halaman User Management → redirect/403

**Opsi B — Laravel Dusk:**

```bash
composer require laravel/dusk --dev
php artisan dusk:install
```

- [ ] Test flow form kontak end-to-end
- [ ] Test flow login + CRUD artikel

```bash
# Jalankan semua test:
php artisan test
npx playwright test  # jika pakai Playwright
```

---

## 🟣 EPIC 13 — Docker

### 13.1 Dockerfile (Production)

- [ ] Buat `Dockerfile` multi-stage:
    - Stage 1: `node:20-alpine` → build aset frontend (Vite)
    - Stage 2: `php:8.2-fpm-alpine` → install PHP deps + copy hasil build

    📝 Notes: Multi-stage build = image production lebih kecil, tidak bawa dev dependencies

- [ ] Buat `docker/nginx/default.conf` — Nginx config untuk serve Laravel

### 13.2 docker-compose.yml (Development)

- [ ] Buat `docker-compose.yml` dengan services:
    - `app` — PHP-FPM container (dari Dockerfile)
    - `nginx` — reverse proxy ke app
    - `postgres` — database PostgreSQL 16
    - `redis` — cache & queue driver
    - `mailpit` — SMTP catcher untuk dev (pengganti Mailtrap)

    ```yaml
    # Ports yang diekspos ke host:
    # - 8000:80     (app via Nginx)
    # - 5432:5432   (PostgreSQL — untuk akses via DBeaver/TablePlus)
    # - 6379:6379   (Redis)
    # - 8025:8025   (Mailpit UI)
    ```

- [ ] Buat `docker-compose.override.yml` untuk dev-only config (volume mount, hot reload)

### 13.3 Helper Scripts

- [ ] Buat `Makefile` dengan shortcut commands:

    ```makefile
    up:      docker compose up -d
    down:    docker compose down
    bash:    docker compose exec app bash
    migrate: docker compose exec app php artisan migrate
    test:    docker compose exec app php artisan test
    ```

- [ ] Update `.gitignore` — exclude docker volumes, tapi include `docker/` folder

### 13.4 Environment Untuk Docker

- [ ] Buat `.env.docker` — environment variables yang mengarah ke service names

    ```text
    DB_HOST=postgres      # bukan 127.0.0.1
    REDIS_HOST=redis
    MAIL_HOST=mailpit
    ```

---

## 🟣 EPIC 14 — CI/CD (GitHub Actions)

### 14.1 CI Pipeline (Setiap Push / PR)

- [ ] Buat `.github/workflows/ci.yml`:
    - Trigger: `push` ke `main` & `develop`, semua PR
    - Jobs:
        1. **Lint** — Laravel Pint (PHP style) + ESLint (TypeScript)
        2. **Test** — Pest PHP (unit + feature) dengan PostgreSQL service container
        3. **Build** — `npm run build` — pastikan aset frontend bisa dicompile

    ```yaml
    services:
        postgres:
            image: postgres:16
            env:
                POSTGRES_DB: testing
                POSTGRES_USER: postgres
                POSTGRES_PASSWORD: secret
    ```

### 14.2 CD Pipeline (Deploy ke Production)

- [ ] Buat `.github/workflows/deploy.yml`:
    - Trigger: push ke branch `main` saja + approval manual (environment protection)
    - Build Docker image → push ke registry (GHCR atau Docker Hub)
    - SSH ke VPS → pull image baru → `docker compose up -d`

    📝 Notes: Gunakan GitHub Environments dengan reviewer approval sebelum deploy ke prod

- [ ] Setup GitHub Secrets:
    ```text
    PRODUCTION_HOST       (IP VPS)
    PRODUCTION_USER       (user SSH)
    PRODUCTION_SSH_KEY    (private key)
    DOCKER_REGISTRY_TOKEN (jika pakai GHCR/Docker Hub)
    ```

### 14.3 Branch Strategy

- [ ] Gunakan **Git Flow sederhana**:
    ```text
    main       ← production only, protected, deploy via CD
    develop    ← staging/integration, CI runs here
    feat/*     ← fitur baru, PR ke develop
    fix/*      ← bug fix, PR ke develop atau main (hotfix)
    ```

---

## �📦 Migration Order (Urutan Jalankan)

```text
1. users (default Breeze — tambahkan kolom role)
2. site_settings
3. about_content
4. team_members
5. services
6. portfolios
7. articles
8. leads
9. jobs (queue table — jika pakai database driver)
```

---

## ⚠️ Asumsi & Catatan

- Belum ada Inertia/React di project — **install dulu via EPIC 1 sebelum hal lain**
- Storage lokal untuk Phase 1, migrasi ke S3/R2 di Phase 2
- Auth hanya untuk internal staff, tidak ada public registration
- Rich text editor: **Tiptap** (React-native, recommended) atau Quill
- Docker: untuk dev gunakan `docker-compose.yml`, production gunakan image yang sama
- E2E Testing: **Playwright** lebih disarankan karena lebih cepat dan tidak perlu ChromeDriver manual
- Queue: wajib pakai async (`queue()`) untuk email — jangan `send()` langsung di production

---

## 🔥 Lessons Learned (Updated: 2026-03-01)

Catatan dari bug nyata yang terjadi selama development. **Baca ini sebelum mulai Epic baru.**

### 1. Inertia `<Head>` Crash = Blank Screen

**Masalah:** Halaman blank screen total setelah implement Head dengan SEO tags.

**Root cause:** `<Head>` Inertia tidak bisa punya `<title>` sebagai child dengan multi-line text nodes:

```tsx
// ❌ INI CRASH — whitespace/newline antara expressions = fatal React error
<Head>
    <title>
        {company.name} — {company.tagline}
    </title>
</Head>
```

**Fix:**

```tsx
// ✅ Gunakan title sebagai prop
<Head title={`${company.name} — ${company.tagline}`} />
```

→ Detail lengkap di `.agent/skills/inertia-page/SKILL.md`

---

### 2. Docker Network = `bad address 'postgres'`

**Masalah:** Container app jalan tapi tidak bisa connect ke DB. `migrate` gagal.

**Root cause:** Container di-up tanpa di-down dulu, sehingga app container masuk network lama yang terputus dari postgres.

**Fix:**

```bash
docker compose down && docker compose up -d
```

**Diagnosa cepat:**

```bash
docker compose exec app sh -c "ping -c 1 postgres"
# Kalau "bad address" → harus down & up ulang
```

---

### 3. Vite Cache = File Lama Tetap Serve

**Masalah:** File TSX sudah diedit, tapi browser masih render versi lama. Error trace masih menunjuk ke line nomor yang sudah tidak relevan.

**Fix:**

```bash
docker compose exec app sh -c "rm -rf node_modules/.vite"
docker compose restart app
```

---

### 4. Tambah Kolom di `users` = Tests Gagal

**Masalah:** Setelah tambah kolom `role` ke tabel users, semua feature test yang pakai `User::factory()` gagal dengan DB error.

**Root cause:** `UserFactory` tidak tahu kolom baru yang required (tanpa DB default).

**Fix:** Selalu update `database/factories/UserFactory.php` setiap kali tambah kolom baru ke tabel `users`. Tambahkan field + default value yang masuk akal untuk testing.

---

### 5. `phpunit.xml` harus override ke PostgreSQL untuk test

**Masalah:** Test gagal karena Laravel default pakai SQLite in-memory, tapi project pakai PostgreSQL dengan fitur khusus (enum, dsb.).

**Fix:** Set di `phpunit.xml`:

```xml
<env name="DB_CONNECTION" value="pgsql"/>
<env name="DB_DATABASE" value="multi_company_profiles"/>
<env name="DB_HOST" value="postgres"/>
```

---

_Referensi: [PRD Notion](https://www.notion.so/PRD-Company-Profile-Ecosystem-311c241984268106a8a9f134c14674fe) | [Product Backlog Notion](https://www.notion.so/Product-Backlog-Phase-1-MVP-315c241984268177b128c649e2342367)_
