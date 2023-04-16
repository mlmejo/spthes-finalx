<?php

use App\Http\Controllers\AcademicLevelApiController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SectionTeacherController;
use App\Http\Controllers\TeacherApiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/register/admin');

Route::get('/dashboard', DashboardController::class)
    ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group([
    'prefix' => 'api',
    'as' => 'api.',
    'middleware' => 'auth'
], function () {
    Route::resource('academic_levels', AcademicLevelApiController::class);
    Route::resource('teachers', TeacherApiController::class);
});

Route::post('sections/{section}/teachers', [SectionTeacherController::class, 'store'])
    ->prefix('admin')
    ->middleware('auth')
    ->name('sections.teachers.store');

Route::get('/teachers/{teacher}/sections', [SectionTeacherController::class, 'index'])
    ->middleware('auth')
    ->name('teachers.sections.index');

Route::get('/teachers/{teacher}/sections/{section}', [SectionTeacherController::class, 'show'])
    ->middleware('auth')
    ->name('teachers.sections.show');

Route::get('/sections/{section}/exams/create', [ExamController::class, 'create'])
    ->middleware('auth')
    ->name('sections.exams.create');

require __DIR__ . '/admin.php';
require __DIR__ . '/auth.php';
