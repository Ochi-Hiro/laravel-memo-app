<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InertiaTestController extends Controller
{
    public function index()
    {
        return Inertia::render('InertiaDemo/Index');
    }

    public function show($id)
    {
        return Inertia::render('InertiaDemo/Show',[
            'id' => $id
        ]);
    }
}
