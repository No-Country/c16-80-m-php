<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Usuario extends Model
{
    use HasFactory;

    protected $table = "usuario";
    protected $fillable = [
        'user',
        'password',
        'nombre',
        'correo',
        'direccion',
        'telefono',
        'fecha_nacimiento'
    ];

    /**
     * Get all of the Mascotas for the Usuario
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function mascotas()
    {
        return $this->hasMany(Mascota::class);
    }
}
