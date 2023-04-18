<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use App\Models\Student;
use Illuminate\Http\Request;

class RegistrationStudentsController extends Controller
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
            'registration_id' => 'required|exists:registrations,id',
            'student_ids' => 'array',
        ]);

        $students = Student::findMany($request->student_ids);

        $registration = Registration::find($request->registration_id);

        $registration->students()->attach($students);

        return redirect()->route('sections.edit', $registration->section);
    }
}
