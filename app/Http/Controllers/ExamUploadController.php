<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\Item;
use App\Models\Registration;
use Illuminate\Http\Request;
use Inertia\Inertia;
use League\Csv\Reader;
use Symfony\Component\Console\Question\Question;

class ExamUploadController extends Controller
{
    public function create(Request $request, Registration $registration)
    {
        return Inertia::render('Exams/Import', [
            'registration' => $registration->with('section')->first(),
        ]);
    }

    public function store(Request $request, Registration $registration)
    {
        $request->validate([
            'document' => 'required',
            'title' => 'required',
            'description' => 'required',
        ]);

        $file = $request->file('document');

        $reader = Reader::createFromPath($file->getPathname());
        $reader->setHeaderOffset(0);

        $exam = Exam::create([
            'title' => $request->title,
            'description' => $request->description,
            'deadline' => now(),
            'registration_id' => $registration->id,
        ]);

        /**
         * @var \App\Models\Item|null $item
         */
        $item = null;

        foreach ($reader->getRecords(['question', 'choice', 'is_correct']) as $record) {

            if (!empty($record['question'])) {
                $item = Item::create([
                    'question' => $record['question'],
                    'exam_id' => $exam->id,
                ]);
            }

            $item->choices()->create([
                'answer' => $record['choice'],
                'is_correct' => $record['is_correct'],
            ]);
        }

        return redirect()->route('teachers.registrations.show', [$registration->teacher, $registration]);
    }
}
