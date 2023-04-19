<?php

use App\Http\Controllers\AcademicLevelApiController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExamAnswerController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\ExamUploadController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistrationApiController;
use App\Http\Controllers\RegistrationExamController;
use App\Http\Controllers\SectionRegistrationApiController;
use App\Http\Controllers\SectionTeacherController;
use App\Http\Controllers\StudentApiController;
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
    Route::resource('sections.registrations', SectionRegistrationApiController::class);
    Route::resource('students', StudentApiController::class);
    Route::resource('teachers', TeacherApiController::class);
});

Route::post('sections/{section}/teachers', [SectionTeacherController::class, 'store'])
    ->prefix('admin')
    ->middleware(['auth', 'check.role:admin'])
    ->name('sections.teachers.store');

Route::get('/teachers/{teacher}/registrations', [SectionTeacherController::class, 'index'])
    ->middleware(['auth', 'check.role:teacher'])
    ->name('teachers.registrations.index');

Route::get('/teachers/{teacher}/registrations/{registration}', [SectionTeacherController::class, 'show'])
    ->middleware(['auth', 'check.role:teacher'])
    ->name('teachers.registrations.show');

Route::get('/registrations/{registration}/exams/create', [ExamController::class, 'create'])
    ->middleware(['auth', 'check.role:teacher'])
    ->name('registrations.exams.create');

Route::post('/registrations/{registration}/exams', [ExamController::class, 'store'])
    ->middleware(['auth', 'check.role:teacher'])
    ->name('registrations.exams.store');

Route::get('/registrations/{registration}/exams', [RegistrationExamController::class, 'index'])
    ->middleware('auth')
    ->name('registrations.exams.index');

Route::resource('registrations.exams', RegistrationExamController::class)
    ->middleware(['auth']);

Route::resource('exams.answers', ExamAnswerController::class)
    ->middleware('auth');

Route::get('/registrations/{registration}/exam/import', [ExamUploadController::class, 'create'])
    ->middleware(['auth', 'check.role:teacher'])
    ->name('registrations.exams.import');

Route::post('/registrations/{registration}/exam/import', [ExamUploadController::class, 'store'])
    ->middleware(['auth', 'check.role:teacher'])
    ->name('registrations.exams.import.store');;


require __DIR__ . '/admin.php';
require __DIR__ . '/auth.php';
