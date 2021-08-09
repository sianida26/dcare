<?php

namespace App\Http\Controllers;

use App\Models\Terapis;

use Illuminate\Http\Request;


class TerapisController extends Controller
{
    //

    public function getTerapists(Request $request){

        $terapists = Terapis::with('user')
            ->get()
            ->map(function($terapis){
                return [
                    'name' => $terapis->user->name,
                    'email' => $terapis->user->email,
                    'phone' => $terapis->phone,
                ];
            });


        return $terapists;
    }
}
