<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TeamController;
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
Route::get('/tim', [TeamController::class, 'index'])->name('team.index');

// ── Contact & Lead Form ───────────────────────────────────────────────────
Route::get('/kontak', [ContactController::class, 'index'])->name('contact.index');
Route::post('/kontak', [ContactController::class, 'store'])->name('contact.store');

// ── Authenticated User Routes ─────────────────────────────────────────────────
Route::get('/dashboard', function () {
    if (in_array(auth()->user()->role, ['admin', 'editor'])) {
        return redirect()->route('admin.dashboard');
    }
    return inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ── Admin CMS Routes ────────────────────────────────────────────────────────
Route::prefix('admin')
    ->name('admin.')
    ->middleware(['auth', 'role:admin,editor'])
    ->group(function () {
        Route::get('/dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
        
        Route::resource('portfolios', \App\Http\Controllers\Admin\PortfolioController::class);
        Route::resource('articles', \App\Http\Controllers\Admin\ArticleController::class);
        Route::resource('services', \App\Http\Controllers\Admin\ServiceController::class);
        Route::resource('team-members', \App\Http\Controllers\Admin\TeamMemberController::class);
        Route::resource('leads', \App\Http\Controllers\Admin\LeadController::class)->only(['index', 'show', 'destroy']);
        
        // Admin-only features
        Route::middleware('role:admin')->group(function() {
            Route::resource('users', \App\Http\Controllers\Admin\UserController::class);
            Route::get('/settings', [\App\Http\Controllers\Admin\SiteSettingController::class, 'index'])->name('settings');
            Route::post('/settings', [\App\Http\Controllers\Admin\SiteSettingController::class, 'store'])->name('settings.store');
        });
    });

require __DIR__.'/auth.php';
