<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use App\Models\Section;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionTeacherController extends Controller
{
    public function index(Teacher $teacher)
    {
        return Inertia::render('Teachers/Sections/Index', [
            'registrations' => $teacher->registrations()
                ->with('section.academic_level')
                ->get(),
            'teacher' => $teacher,
        ]);
    }

    public function store(Request $request, Section $section)
    {
        $validated = $request->validate([
            'teacher_ids' => 'array',
        ]);

        $teachers = Teacher::findMany($validated);

        $section->teachers()->sync($teachers);

        return redirect()->route('sections.edit', $section);
    }

    public function show(Teacher $teacher, Registration $registration)
    {
        return Inertia::render('Teachers/Sections/Show', [
            'registration' => $registration->with('section.academic_level')->first(),
        ]);
    }
}
