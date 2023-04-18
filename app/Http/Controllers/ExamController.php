<?php

namespace App\Http\Controllers;

use App\Models\Choice;
use App\Models\Exam;
use App\Models\Item;
use App\Models\Registration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function index(Registration $registration)
    {
        return view('exams.index', [
            'exams' => $registration->exams,
        ]);
    }

    public function create(Registration $registration)
    {
        return Inertia::render('Exams/Create', [
            'registration' => $registration->with('section.academic_level')->first(),
        ]);
    }

    public function store(Request $request, Registration $registration)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'sometimes',
            'questions' => 'array',
        ]);

        $exam = Exam::create([
            'title' => $request->title,
            'description' => $request->description,
            'deadline' => now(),
            'registration_id' => $registration->id,
        ]);

        foreach ($request->questions as $question) {
            $item = Item::create([
                'question' => $question['question'],
                'exam_id' => $exam->id,
            ]);

            foreach ($question['choices'] as $choice) {
                Choice::create([
                    'answer' => $choice['content'],
                    'is_correct' => $choice['is_correct'],
                    'item_id' => $item->id,
                ]);
            }
        }
    }
}
