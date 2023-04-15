<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherApiController extends Controller
{
    public function index()
    {
        return response()->json([
            ...Teacher::with('user:id,name')->get(),
        ]);
    }
}
