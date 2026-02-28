<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutContent extends Model
{
    protected $fillable = [
        'description',
        'vision',
        'mission',
        'founded_year',
        'logo',
    ];

    protected $casts = [
        'founded_year' => 'integer',
    ];
}
