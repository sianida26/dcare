<?php

namespace App\Http\Controllers;

use App\Models\Kurikulum;
use Debugbar;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class KurikulumController extends Controller
{
    //

    public function getData(Request $request){
        return Kurikulum::all()
            ->groupBy('level')
            ->map(function($level, $key){

                $dataTingkatan = $level->groupBy('tingkatan')
                    ->map(function($tingkatan, $key){

                        $dataAspek = $tingkatan->groupBy('aspek')
                        ->flatten(1)
                        ->map(function($aspek, $key){
                            return [
                                'id' => $aspek['id'],
                                'name' => $aspek['aspek'],
                                'description' => $aspek['description'],
                                'videoUrl' => '/storage/videos/kurikulum'.'/'.$aspek['video_url'],
                            ];
                        })
                        ->values();

                        return [
                            'title' => 'tingkatan '.$key,
                            'aspek' => $dataAspek,
                        ];
                    })
                    ->values()
                    ->all();

                return [
                    'title' => Str::ucfirst($key),
                    'tingkatan' => $dataTingkatan,
                ];
            })
            ->values()
            ->all();
    }
}
