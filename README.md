# DIGIKOVA Company Profile & Ecosystem Platform

Project ini merupakan platform **Company Profile** sekaligus cikal bakal ekosistem digital untuk **DIGIKOVA**. Dibangun dengan arsitektur modern menggunakan Laravel 12 sebagai backend (API & CMS) dan React 19 via Inertia.js sebagai frontend.

## 🚀 Tech Stack

*   **Backend:** Laravel 12
*   **Frontend:** React 19 + TypeScript
*   **Routing & Data Flow:** Inertia.js
*   **Styling:** Tailwind CSS v4
*   **Database:** PostgreSQL 16
*   **Icons:** Lucide React

## ✨ Fitur Utama

1.  **Halaman Publik Responsif & Modern:**
    *   **Beranda:** Overview layanan dan proyek unggulan.
    *   **Tentang Kami:** Visi, Misi, dan profil Tim.
    *   **Layanan:** Detail setiap layanan digital yang ditawarkan.
    *   **Portofolio:** Showcase karya/proyek dengan kategori dan galeri gambar.
    *   **Artikel/Blog:** Publikasi wawasan dan update terbaru.
    *   **Kontak:** Form pengaduan/konsultasi (Lead generation).
2.  **CMS Dashboard (Content Management System):**
    *   Manajemen konten dinamis langsung dari database (Site Settings).
    *   CRUD Portofolio, Artikel, Layanan, dan Anggota Tim.
    *   Pengaturan hak akses (Admin & Editor).

## 🛠️ Prasyarat (Prerequisites)

Pastikan sistem Anda sudah menginstall:
*   [PHP](https://www.php.net/) 8.2+
*   [Composer](https://getcomposer.org/)
*   [Node.js](https://nodejs.org/) (v20+ direkomendasikan)
*   [PostgreSQL](https://www.postgresql.org/)
*   [Laravel Herd](https://herd.laravel.com/) (Opsional, sangat disarankan untuk pengguna macOS/Windows)

## 📦 Panduan Instalasi (Local Development)

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/AriHyuk/multi-company-profile.git
   cd multi-company-profile
   ```

2. **Install dependensi PHP dan Node.js:**
   ```bash
   composer install
   pnpm install # atau npm install / yarn
   ```

3. **Konfigurasi Environment:**
   Duplikat file `.env.example` menjadi `.env`.
   ```bash
   cp .env.example .env
   ```
   Lalu sesuaikan konfigurasi database (PostgreSQL):
   ```env
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=multi_company_profiles
   DB_USERNAME=postgres
   DB_PASSWORD=password_anda
   ```

4. **Generate Application Key:**
   ```bash
   php artisan key:generate
   ```

5. **Migrasi Database & Seeder:**
   Jalankan perintah ini untuk membuat tabel beserta data awal (dummy data) agar website bisa langsung tampil sempurna.
   ```bash
   php artisan migrate:fresh --seed
   ```
   *(Catatan: Seeder akan membuat akun admin default. Cek `DatabaseSeeder.php` untuk kredensial login).*

6. **Storage Link:**
   Buat symbolic link untuk folder storage publik agar gambar (logo, portofolio, foto tim) dapat diakses frontend.
   ```bash
   php artisan storage:link
   ```

## 🖥️ Menjalankan Aplikasi

Aplikasi ini menggunakan arsitektur monolith dengan Inertia. Anda perlu menjalankan server backend Laravel dan server aset frontend (Vite) secara bersamaan.

Buka **2 terminal terpisah**:

**Terminal 1 (Vite Dev Server):**
```bash
pnpm run dev # atau npm run dev
```

**Terminal 2 (Laravel Server):**
Jika Anda menggunakan **Laravel Herd**, aplikasi sudah bisa diakses otomatis melalui domain `.test` Anda (contoh: `http://multi-company-profile.test`). 
Jika tidak menggunakan Herd, jalankan server bawaan artisan:
```bash
php artisan serve
```

Aplikasi sekarang dapat diakses melalui browser di alamat `http://localhost:8000` atau domain Herd Anda.

## 📁 Struktur Direktori Penting

*   `app/Http/Controllers` - Berisi logika backend dan controller untuk merender page Inertia.
*   `resources/js/Pages` - Berisi seluruh halaman React untuk frontend dan CMS.
*   `resources/js/Components` - Berisi komponen-komponen UI modular (Buttons, Sections, Cards, dll).
*   `resources/js/Layouts` - Berisi layout pembungkus seperti `PublicLayout.tsx` dan `CmsLayout.tsx`.
*   `routes/web.php` - Berisi konfigurasi endpoint routing aplikasi.

## 🤝 Berkontribusi

1. Buat branch baru dari `main` (misal: `feat/fitur-baru` atau `fix/perbaikan-bug`).
2. Lakukan *commit* dengan format yang jelas.
3. Push ke *repository* dan buat *Pull Request*.

## 📄 Lisensi

Project ini bersifat privat untuk keperluan internal DIGIKOVA.
