<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use App\Models\Student;
use Illuminate\Http\Request;

class RegistrationStudentController extends Controller
{
    public function index(Registration $registration)
    {
        return response()->json([
            'students' => $registration->students()
                ->with('user')
                ->get(),
        ]);
    }

    public function store(Request $request, Registration $registration)
    {
        $request->validate([
            'student_ids' => 'array',
        ]);

        $students = Student::findMany($request->student_ids);

        $registration->students()->sync($students);

        return redirect()->route('sections.edit', $registration->section);
    }
}
