<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'thumbnail',
        'images',
        'category',
        'client',
        'year',
        'status',
    ];

    protected $casts = [
        'images' => 'array',
    ];
}
