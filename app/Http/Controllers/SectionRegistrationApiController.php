<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;

class SectionRegistrationApiController extends Controller
{
    public function index(Section $section)
    {
        return response()->json([
            'registrations' => $section->registrations()
                ->with('registrations.teacher.user')
                ->get(),
        ]);
    }
}
