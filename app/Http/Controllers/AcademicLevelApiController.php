<?php

namespace App\Http\Controllers;

use App\Enums\AcademicTier;
use App\Models\AcademicLevel;
use Illuminate\Http\Request;

class AcademicLevelApiController extends Controller
{
    public function index()
    {
        $academic_levels = [];

        foreach (array_column(AcademicTier::cases(), 'value') as $tier) {
            $academic_levels[$tier] = AcademicLevel::where('tier', $tier)->get();
        }

        return response()->json([...$academic_levels]);
    }
}
