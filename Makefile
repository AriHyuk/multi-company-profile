.PHONY: setup up down build shell \
        migrate migrate-fresh seed tinker \
        composer-install composer-update \
        npm-install npm-dev npm-build \
        restart logs test \
        clear optimize \
        queue-work queue-restart \
        storage-link pint

# ─── Docker ───────────────────────────────────────────────────────────────────

# Jalankan semua container dev
up:
	docker compose up -d

# Matikan semua container dev
down:
	docker compose down

# Matikan dan hapus volume (hati-hati: data db hilang)
down-v:
	docker compose down -v

# Rebuild image jika ada perubahan di Dockerfile.dev
build:
	docker compose build --no-cache

# Restart container app saja
restart:
	docker compose restart app

# Masuk ke shell container Laravel
shell:
	docker compose exec app bash

# Lihat log container app (streaming)
logs:
	docker compose logs -f app

# ─── Setup Awal ───────────────────────────────────────────────────────────────

# Setup lengkap dari awal (composer + npm + migrate + seed + storage link)
setup:
	docker compose exec app composer install
	docker compose exec app npm install
	docker compose exec app php artisan key:generate
	docker compose exec app php artisan migrate --seed
	docker compose exec app php artisan storage:link
	@echo "✅ Setup selesai. Akses di http://localhost:8000"

# ─── Database ─────────────────────────────────────────────────────────────────

# Jalankan migrasi
migrate:
	docker compose exec app php artisan migrate

# Fresh migrate + seed (HATI-HATI: hapus semua data)
fresh:
	docker compose exec app php artisan migrate:fresh --seed

# Jalankan seeder saja
seed:
	docker compose exec app php artisan db:seed

# Masuk ke Laravel Tinker
tinker:
	docker compose exec app php artisan tinker

# ─── Composer ─────────────────────────────────────────────────────────────────

# Install dependencies PHP
composer-install:
	docker compose exec app composer install

# Update dependencies PHP
composer-update:
	docker compose exec app composer update

# ─── Frontend (Vite/NPM) ──────────────────────────────────────────────────────

# Install dependencies Node
npm-install:
	docker compose exec app npm install

# Jalankan Vite dev server (jika HMR mati)
vite:
	docker compose exec app npm run dev

# Build assets untuk production
npm-build:
	docker compose exec app npm run build

# ─── Artisan ──────────────────────────────────────────────────────────────────

# Bersihkan semua cache (config, route, view, event)
clear:
	docker compose exec app php artisan optimize:clear

# Cache route + config + view untuk production
optimize:
	docker compose exec app php artisan optimize

# Buat symlink storage
storage-link:
	docker compose exec app php artisan storage:link

# ─── Queue ────────────────────────────────────────────────────────────────────

# Jalankan queue worker
queue-work:
	docker compose exec app php artisan queue:work --tries=3

# Restart semua queue worker
queue-restart:
	docker compose exec app php artisan queue:restart

# ─── Testing & Kualitas ───────────────────────────────────────────────────────

# Jalankan Pest tests
test:
	docker compose exec app php artisan test

# Jalankan Pest tests dengan coverage
test-cov:
	docker compose exec app php artisan test --coverage

# Format kode dengan Pint
pint:
	docker compose exec app ./vendor/bin/pint
