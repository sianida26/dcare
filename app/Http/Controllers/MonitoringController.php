<?php

namespace App\Http\Controllers;

use App\Models\Monitoring;

use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MonitoringController extends Controller
{
    //

    public function buatLaporan(Request $request){

        $rules = [
            'tanggal' => ['required', 'date_format:d-m-Y'],
            'perkembangan' => ['required'],
        ];

        $message = [
            'required' => 'Harus diisi',
            'date_format' => 'Format tanggal tidak sesuai',
        ];

        $request->validate($rules, $message);

        $reporter = Auth::user();
        $date = Carbon::createFromFormat('d-m-Y',$request->tanggal);

        $monitoring = Monitoring::where('user_id',$reporter->id)
            ->whereDate('date',$date)
            ->first();
        if ($monitoring === null) $monitoring = new Monitoring;
        $monitoring->user()->associate($reporter);
        $monitoring->perkembangan = $request->perkembangan;
        $monitoring->date = $date->startOfDay();
        $monitoring->save();

        return $monitoring;
    }

    public function getLaporanPerBulan(Request $request){

        $rules = [
            'date' => ['required', 'date_format:m-Y'],
        ];

        $message = [
            'required' => 'Harus diisi',
            'date_format' => 'Format tanggal tidak sesuai',
        ];

        $request->validate($rules, $message);

        $userId = Auth::id();

        $date = Carbon::createFromFormat('m-Y',$request->date);
        
        return Monitoring::where('user_id', $userId)
            ->whereYear('date', $date->year)
            ->whereMonth('date', $date->month)
            ->get()
            ->sortBy('date')
            ->values()
            ->map(function($monitoring){
                return [
                    'tanggal' => $monitoring->date->format('d-m-Y'),
                    'perkembangan' => $monitoring->perkembangan,
                ];
            });
    }
}
