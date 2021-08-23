<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Traits\UsesUuid;

class ChatID extends Model
{
    use HasFactory, UsesUuid;

    public $timestamps = false;
    protected $guarded = [];
}
