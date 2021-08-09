<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TerapistSpeciality extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get all of the terapis for the TerapistSpeciality
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function terapis(): HasMany
    {
        return $this->hasMany(Terapis::class, 'speciality_id');
    }
}
