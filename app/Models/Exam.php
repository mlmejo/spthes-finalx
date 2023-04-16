<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Exam extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'deadline', 'registration_id'];

    public function registration(): BelongsTo
    {
        return $this->belongsTo(Registration::class);
    }
}
