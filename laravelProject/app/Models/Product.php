<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Product extends Model
{
    use HasFactory;
    use Sluggable;

    protected $fillable = [
        'title',
        'details',
        'image',
        'price',
    ];
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'SKU'
            ]
        ];
    }
}
