<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class JadwalKonsultasi extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $casts = [
        'jadwal' => 'datetime:d-n-Y; H:i',
    ];

    /**
     * Get the terapis that owns the JadwalKonsultasi
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function terapis(): BelongsTo
    {
        return $this->belongsTo(Terapis::class, 'terapis_id');
    }
}
