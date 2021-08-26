<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatID;
use App\Models\Terapis;
use App\Models\JadwalKonsultasi;
use Illuminate\Support\Facades\Auth;

class KonsultasiController extends Controller
{
    //
    public function getChatId(Request $request){

        $jadwalKonsultasi = JadwalKonsultasi::findOrFail($request->id);
        $user = Auth::user();

        if (!($jadwalKonsultasi->user_id === $user->id || $jadwalKonsultasi->terapis_id === $user->id)) abort(404);
        $chatId = ChatID::firstOrCreate(
            [
                'patient_id' => $jadwalKonsultasi->user_id,
                'terapist_id' => $jadwalKonsultasi->terapis_id,
            ],
            []
        );
        return $chatId->id;
    }
}
