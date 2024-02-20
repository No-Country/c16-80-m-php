<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    use HasFactory;

    protected $table = "actividad";

    protected $fillable = [
        'tipo'
    ];

    /**
     * Get all of the mascotas for the Actividad
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function mascotas()
    {
        return $this->hasMany(Mascota::class);
    }
}
