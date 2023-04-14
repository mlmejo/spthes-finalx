<?php

use App\Http\Controllers\SectionController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::resource('sections', SectionController::class)
        ->middleware('auth');
});
