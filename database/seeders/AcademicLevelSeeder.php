<?php

namespace Database\Seeders;

use App\Enums\AcademicTier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AcademicLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 7; $i < 11; $i++) {
            DB::table('academic_levels')->insert([
                'name' => "Grade $i",
                'tier' => AcademicTier::JuniorHigh,
            ]);
        }

        for ($i = 11; $i < 13; $i++) {
            DB::table('academic_levels')->insert([
                'name' => "Grade $i",
                'tier' => AcademicTier::SeniorHigh,
            ]);
        }

        foreach ([
            'First Year',
            'Second Year',
            'Third Year',
            'Fourth Year',
        ] as $name) {
            DB::table('academic_levels')->insert([
                'name' => $name,
                'tier' => AcademicTier::College,
            ]);
        }
    }
}
