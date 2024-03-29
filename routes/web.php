<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\InertiaTestController;

Route::middleware('auth')->group(function () {
    Route::get('/inertia/index', [InertiaTestController::class, 'index'])->name('inertia.index');
    Route::get('/inertia/create', [InertiaTestController::class, 'create'])->name('inertia.create');
    Route::post('/inertia', [InertiaTestController::class, 'lgcreate'])->name('inertia.lgcreate');
    Route::get('/inertia/show/{id}', [InertiaTestController::class, 'show'])->name('inertia.show');
    Route::post('/inertia', [InertiaTestController::class, 'store'])->name('inertia.store');
    Route::delete('/inertia/{id}', [InertiaTestController::class, 'delete'])->name('inertia.delete');
    Route::post('/inertia/update/{id}', [InertiaTestController::class, 'update'])->name('inertia.update');
});


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// テスト用
Route::get('/inertiaTest', function () {
    return Inertia::render('InertiaTest',[]);
});

require __DIR__.'/auth.php';
