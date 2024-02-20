<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipo extends Model
{
    use HasFactory;

    protected $table = "tipo";
    protected $fillable = [
        'nombre'
    ];

    /**
     * Get all of the mascotas for the Tipo
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function mascotas()
    {
        return $this->hasMany(Mascota::class);
    }
}
