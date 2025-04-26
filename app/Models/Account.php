<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = ['title','amount','date'];
    protected $hidden = ['created_at','updated_at'];
}
