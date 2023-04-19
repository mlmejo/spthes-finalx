<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Choice;
use App\Models\Exam;
use App\Models\Item;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ExamAnswerController extends Controller
{
    public function index(Exam $exam)
    {
        $takers = DB::table('answers')
            ->select('student_id')
            ->join('items', 'items.id', '=', 'answers.item_id')
            ->where('items.exam_id', '=', $exam->id)
            ->distinct()
            ->get()
            ->toArray();

        $scores = [];

        foreach ($takers as $taker) {
            $answers = DB::table('answers')
                ->select('items.id', 'answers.answer')
                ->join('items', 'answers.item_id', 'items.id')
                ->join('choices', 'choices.item_id', 'items.id')
                ->where('items.exam_id', $exam->id)
                ->where('answers.student_id', $taker->student_id)
                ->distinct()
                ->get();

            $score = 0;

            foreach ($answers as $answer) {
                $isCorrect = DB::table('choices')
                    ->where('choices.id', $answer->answer)
                    ->where('choices.is_correct', 1)
                    ->count();

                if ($isCorrect) {
                    $score++;
                }
            }

            $student = Student::find($taker->student_id);

            array_push($scores, [
                'name' => $student->user->name,
                'score' => $score,
            ]);
        }

        return Inertia::render('Answers/Index', compact('scores', 'exam'));
    }

    public function store(Request $request, Exam $exam)
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'answers' => 'array',
        ]);

        foreach ($request->answers as $answer) {
            Answer::create([
                'student_id' => $request->student_id,
                'item_id' => $answer['id'],
                'answer' => $answer['value'],
                'exam_id' => $exam,
            ]);
        }

        return redirect()->route('registrations.exams.index', $exam->registration);
    }
}
