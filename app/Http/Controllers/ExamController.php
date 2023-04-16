<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function create(Section $section)
    {
        return Inertia::render('Exams/Create', [
            'section' => $section->with('academic_level:id,name')->first(),
        ]);
    }
}
