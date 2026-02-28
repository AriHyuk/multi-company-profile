.PHONY: setup up down build shell migrate seed tinker npm-install composer-install restart logs test

# Jalankan semua container dev (Laravel, Vite, Postgres, Redis, Mailpit)
up:
	docker compose up -d

# Matikan semua container dev
down:
	docker compose down

# Rebuild image Laravel/PHP jika ada perubahan di Dockerfile.dev
build:
	docker compose build

# Masuk ke shell container Laravel
shell:
	docker compose exec app bash

# Eksekusi migrasi database di dalam container
migrate:
	docker compose exec app php artisan migrate

# Eksekusi seeder database di dalam container
seed:
	docker compose exec app php artisan db:seed

# Masuk ke Laravel Tinker
tinker:
	docker compose exec app php artisan tinker

# Install package PHP via composer
composer-install:
	docker compose exec app composer install

# Install package Node
npm-install:
	docker compose exec app npm install

# Restart container Laravel (berguna jika stuck)
restart:
	docker compose restart app

# Lihat log container app (Laravel & Vite)
logs:
	docker compose logs -f app

# Jalankan Pest tests
test:
	docker compose exec app php artisan test
