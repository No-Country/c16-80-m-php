<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Administrador>
 */
class AdministradorFactory extends Factory
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
            'user'=>$this->faker->unique()->userName(),
            'password'=>$this->faker->unique()->password(),
            'nombre'=> $this->faker->firstName()." ".$this->faker->lastName()
        ];
    }
}
