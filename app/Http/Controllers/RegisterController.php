<?php

namespace App\Http\Controllers;

use App\Models\Register;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {

       
        $validated = $request->validate([
            
            'name' => 'required|string',
            
            'phone' => 'required|numeric',
            
            'car' => 'required|string',
            
            'other_car' => 'nullable|string',
            
            'city' => 'required|string',
            
            'region' => 'required|string',
            
            'other_region' => 'nullable|string',
        ]);

        $register = Register::create([
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'car' => $validated['car'],
            'other_car' => $validated['other_car'],
            'city' => $validated['city'],
            'region' => $validated['region'],
            'other_region' => $validated['other_region'],
        ]);
        return response()->json([
            'message' => 'تم تسجيل الدخول بنجاح',
            'register' => $register
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Register $register)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Register $register)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Register $register)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Register $register)
    {
        //
    }
}