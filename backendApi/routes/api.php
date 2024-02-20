<?php

use App\Http\Controllers\ActividadController;
use App\Http\Controllers\AdministradorController;
use App\Http\Controllers\MascotaController;
use App\Http\Controllers\RazaController;
use App\Http\Controllers\TamanoController;
use App\Http\Controllers\TipoController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=>'v1'],function(){
    Route::apiResource('actividad',ActividadController::class);
    Route::apiResource('administrador',AdministradorController::class);
    Route::apiResource('mascota',MascotaController::class);
    Route::apiResource('raza',RazaController::class);
    Route::apiResource('tamano',TamanoController::class);
    Route::apiResource('tipo',TipoController::class);
    Route::apiResource('usuario',UsuarioController::class);
});
