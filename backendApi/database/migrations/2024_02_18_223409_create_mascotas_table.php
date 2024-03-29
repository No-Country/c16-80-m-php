<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mascota', function (Blueprint $table) {
            $table->id();
            $table->integer('tipo_id');
            $table->integer('raza_id');
            $table->integer('tamano_id');
            $table->integer('actividad_id');
            $table->integer('usuario_id')->nullable();
            $table->string('nombre');
            $table->integer('edad')->unsigned();
            $table->longText('historial');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mascota');
    }
};
