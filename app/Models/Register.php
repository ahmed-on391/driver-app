<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'car',
        'other_car',
        'city',
        'region',
        'other_region',
    ];
}