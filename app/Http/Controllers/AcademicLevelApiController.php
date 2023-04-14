<?php

namespace App\Http\Controllers;

use App\Enums\AcademicTier;
use App\Models\AcademicLevel;
use Illuminate\Http\Request;

class AcademicLevelApiController extends Controller
{
    public function __invoke()
    {
        $jhs = AcademicLevel::where('tier', AcademicTier::JuniorHigh)
            ->get();

        $shs = AcademicLevel::where('tier', AcademicTier::SeniorHigh)
            ->get();

        $college = AcademicLevel::where('tier', AcademicTier::College)
            ->get();

        return response()->json(compact('jhs', 'shs', 'college'));
    }
}
