<?php

namespace App\Http\Controllers;

use App\Models\JadwalKonsultasi;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InboxController extends Controller
{
    //

    /* type: 'konfirmasi', //selamat
        title: 'Jadwal Terkonfirmasi',
        tanggal: '16/08/2021',
        waktu: '13.00',
        pengirim: 'Agustin',
        content:{
            pasien: 'Fathimah Soraya',
            ragam: 'Down Syndrome',
            terapis: 'Agustin, S.Psi.',
            tanggal: '17/08/2021',
            waktu: '13.00 - 14.00 WIB'
        } */

    public function getInboxes(Request $request){

        $user = Auth::user();
        
        Carbon::setLocale('id');
        
        switch($user->roles->first()->name){
            case "terapist" : break; //todo buat logic untuk terapis
            case "disability" : 
                
                //todo sort by jadwal
                $ongoing = $user->jadwalKonsultasis()
                    ->where('jadwal', '<=', Carbon::now())
                    ->where('jadwal', '>=', Carbon::now()->subHours(1)->subMinutes(30))
                    ->get()
                    ->map(function($item){
                        $jadwal = $item->jadwal;
                        return [
                            'id' => $item->id,
                            'type' => 'ongoing',
                            'title' => 'Saatnya konsultasi',
                            'tanggal' => $jadwal->format('d/m/Y'),
                            'waktu' => $jadwal->format('H:i'),
                            'terapis' => $item->terapis->user->name,
                            'content' => [
                                'pasien' => $item->user->name,
                                'ragam' => 'Belum diset' //todo buat data ragam
                            ]
                        ];
                    });

                $future = $user->jadwalKonsultasis()
                    ->where('jadwal', '>=', Carbon::now())
                    ->get()
                    ->map(function($item){
                        $jadwal = $item->jadwal;
                        return [
                            'id' => $item->id,
                            'type' => 'future',
                            'title' => $jadwal->diffForHumans(),
                            'tanggal' => $jadwal->format('d/m/Y'),
                            'waktu' => $jadwal->format('H:i'),
                            'terapis' => $item->terapis->user->name,
                            'content' => [
                                'pasien' => $item->user->name,
                                'ragam' => 'Belum diset' //todo buat data ragam
                            ]
                        ];
                    });
                
                $past = $user->jadwalKonsultasis()
                    ->where('jadwal', '<', Carbon::now()->subHours(1)->subMinutes(30))
                    ->get()
                    ->map(function($item){
                        $jadwal = $item->jadwal;
                        return [
                            'id' => $item->id,
                            'type' => 'past',
                            'title' => 'Waktu konsultasi telah berakhir',
                            'tanggal' => $jadwal->format('d/m/Y'),
                            'waktu' => $jadwal->format('H:i'),
                            'terapis' => $item->terapis->user->name,
                            'content' => [
                                'pasien' => $item->user->name,
                                'ragam' => 'Belum diset' //todo buat data ragam
                            ]
                        ];
                    });

                return collect($ongoing)
                    ->merge(collect($future))
                    ->merge(collect($past));
                break; 
            default: abort(403);
        }
    }
}
