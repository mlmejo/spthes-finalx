<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentApiController extends Controller
{
    public function index()
    {
        return response()->json([
            'students' => Student::with('user')->get(),
        ]);
    }
}
