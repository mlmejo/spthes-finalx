<?php

namespace App\Http\Controllers;

use App\Models\Section;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionTeacherController extends Controller
{
    public function index(Teacher $teacher)
    {
        return Inertia::render('Teachers/Sections/Index', [
            'sections' => $teacher
                ->sections()
                ->with('academic_level:id,name')
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
}
