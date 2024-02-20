<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRazaRequest;
use App\Http\Requests\UpdateRazaRequest;
use App\Http\Resources\RazaCollection;
use App\Models\Raza;

class RazaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try{
            $raza = Raza::paginate();
            return new RazaCollection($raza);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()],500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRazaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Raza $raza)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Raza $raza)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRazaRequest $request, Raza $raza)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Raza $raza)
    {
        //
    }
}
