<?php

namespace App\Http\Controllers;

use App\Models\Terapis;
use App\Models\JadwalKonsultasi;

use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class TerapisController extends Controller
{
    //

    public function chooseJadwalKonsultasi(Request $request){

        $rules = [
            'date' => ['required', 'date_format:d-m-Y; H:i'],
            'terapistId' => ['required', 'exists:terapis,id'],
        ];

        $messages = [
            'required' => 'Harus diisi',
            'date_format' => 'Format tanggal tidak sesuai',
            'exists' => 'Terapis tidak tersedia',
        ];

        $request->validate($rules, $messages);

        $date = Carbon::createFromFormat('d-m-Y; H:i',$request->date);
        $terapis = Terapis::findOrFail($request->terapistId);

        $jadwal = JadwalKonsultasi::where('terapis_id', $request->terapistId)
            ->where('jadwal', $date)
            ->first();

        if ($jadwal === null) abort(401);

        $jadwal->user_id = Auth::id();
        $jadwal->save();

        return 'ok';
    }

    public function getAvailableDates(Request $request){

        $rules = [
            'terapistId' => ['required', 'exists:terapis,id'],
        ];

        $messages = [
            'required' => 'ID harus ada',
            'exists' => 'Terapis ini tidak ada',
        ];

        $request->validate($rules, $messages);

        $terapis = Terapis::findOrFail($request->terapistId);

        return $terapis->jadwalKonsultasi()
            ->whereDate('jadwal', '>=', Carbon::today())
            ->get()
            ->map(function($jadwal){
                return collect([
                    'available' => true,
                    'dateTime' => $jadwal->jadwal
                ]);
            })
            ->groupBy(function($item){
                return $item['dateTime']->format('d-m-Y'); //group by date
            });

        // return 'ok';
    }

    public function getTerapists(Request $request){

        $terapists = Terapis::with('user')
            ->get()
            ->map(function($terapis){
                return [
                    'id' => $terapis->id,
                    'name' => $terapis->user->name,
                    'email' => $terapis->user->email,
                    'phone' => $terapis->phone,
                    'education' => $terapis->education,
                    'year' => $terapis->terapist_since,
                    'speciality' => $terapis->speciality->name,
                ];
            });


        return $terapists;
    }

    public function findNearby(Request $request){
        
        return Terapis::all()
        ->map(function($terapis){

            return [
                'name' => $terapis->user->name,
                'speciality' => $terapis->speciality->name,
                'location' => [floatval($terapis->latitude), floatval($terapis->longitude)],
            ];
        })
        ->all();
    }
}
