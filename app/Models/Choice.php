<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Choice extends Model
{
    use HasFactory;

    protected $fillable = ['answer', 'is_correct', 'item_id'];

    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }
}
