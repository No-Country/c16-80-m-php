<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    use HasFactory;

    protected $table = "mascota";
    protected $fillable = [];

    /**
     * Get the usuario that owns the Mascota
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    /**
     * Get the actividad that owns the Mascota
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function actividad()
    {
        return $this->belongsTo(Actividad::class);
    }

    /**
     * Get the tamanio that owns the Mascota
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tamanio()
    {
        return $this->belongsTo(Tamano::class);
    }

    /**
     * Get the raza that owns the Mascota
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function raza()
    {
        return $this->belongsTo(Raza::class);
    }

    /**
     * Get the tipo that owns the Mascota
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tipo()
    {
        return $this->belongsTo(Tipo::class);
    }
}
