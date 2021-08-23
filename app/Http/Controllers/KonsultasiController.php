<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatID;
use App\Models\Terapis;
use Illuminate\Support\Facades\Auth;

class KonsultasiController extends Controller
{
    //
    public function getChatId(Request $request){
        $user = Auth::user();
        $role = $user->roles->first()->name;
        $terapis = Terapis::whereFirst('email','cobaterapis@gmail.com');
        $chatId = ChatID::firstOrCreate(
            [
                'patient_id' => $role === 'disability' ? $user->id : 25,
                'terapist_id' => $role === 'terapist' ? $user->terapist->id : 11,
            ],
            []
        );
        return $chatId->id;
    }
}
