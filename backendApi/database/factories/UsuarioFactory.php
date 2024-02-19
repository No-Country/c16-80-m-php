<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuario>
 */
class UsuarioFactory extends Factory
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
            'user' => $this->faker->userName(),
            'password'=> bcrypt('123456'),
            'nombre'=>$this->faker->name(),
            'correo'=>$this->faker->email(),
            'direccion'=>$this->faker->address(),
            'telefono'=>$this->faker->phoneNumber(),
            'fecha_nacimiento'=>$this->faker->dateTimeBetween($start = '-18 years', $end = '+50 years'),
        ];
    }
}
