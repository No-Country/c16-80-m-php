<?php

namespace Database\Factories;

use App\Models\Actividad;
use App\Models\Raza;
use App\Models\Tamano;
use App\Models\Tipo;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mascota>
 */
class MascotaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'tipo_id'=>Tipo::factory(),
            'raza_id'=>Raza::factory(),
            'tamano_id'=>Tamano::factory(),
            'actividad_id'=>Actividad::factory(),
            'usuario_id'=>$this->faker->randomElement([Usuario::factory(),null]),
            'nombre'=>$this->faker->name(),
            'edad'=>$this->faker->numberBetween(1,20),
            'historial'=>$this->faker->paragraph()
        ];
    }
}
