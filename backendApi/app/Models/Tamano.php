<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tamano extends Model
{
    use HasFactory;

    protected $table = "tamano";
    protected $fillable = [
        'tipo',
        'talla'
    ];

    /**
     * Get all of the mascotas for the Tamano
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function mascotas()
    {
        return $this->hasMany(Mascota::class);
    }
}
