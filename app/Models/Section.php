<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Section extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'academic_level_id'];

    public function academic_level(): BelongsTo
    {
        return $this->belongsTo(AcademicLeveL::class);
    }

    public function teachers(): BelongsToMany
    {
        return $this->belongsToMany(
            Teacher::class,
            'registrations',
            'section_id',
            'teacher_id',
        );
    }

    public function registrations(): HasMany
    {
        return $this->hasMany(Registration::class);
    }
}
