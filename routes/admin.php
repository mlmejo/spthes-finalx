<?php

use App\Http\Controllers\SectionController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::resource('sections', SectionController::class)
        ->middleware('auth');

    Route::resource('students', StudentController::class)
        ->middleware('auth');

    Route::resource('teachers', TeacherController::class)
        ->middleware('auth');
});
