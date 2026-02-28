<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;

// ── Public Routes ─────────────────────────────────────────────────────────────
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/tentang-kami', [\App\Http\Controllers\AboutController::class, 'index'])->name('about');
Route::get('/layanan', [ServiceController::class, 'index'])->name('services.index');
Route::get('/layanan/{slug}', [ServiceController::class, 'show'])->name('services.show');
Route::get('/portofolio', [PortfolioController::class, 'index'])->name('portfolios.index');
Route::get('/portofolio/{slug}', [PortfolioController::class, 'show'])->name('portfolios.show');
Route::get('/artikel', [\App\Http\Controllers\ArticleController::class, 'index'])->name('articles.index');
Route::get('/artikel/{slug}', [\App\Http\Controllers\ArticleController::class, 'show'])->name('articles.show');

// ── Authenticated User Routes ─────────────────────────────────────────────────
Route::get('/dashboard', function () {
    return inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

