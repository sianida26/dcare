<?php

namespace Database\Seeders;

use App\Models\Terapis;
use App\Models\JadwalKonsultasi;

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class JadwalKonsultasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Terapis::all()
            ->map(function($terapis){
                $date = Carbon::today();
                //date loop
                for ($i = 0; $i < 30; $i++){

                    if ((bool)random_int(0,1)){
                        
                        //time loop
                        collect([
                            [7,30],
                            [9,0],
                            [11,0],
                            [13,0],
                            [15,0],
                            [18,30],
                        ])->map(function($time) use ($terapis, $date){
                            
                            if ((bool)random_int(0,1)){
                                $jadwal = new JadwalKonsultasi;
                                $jadwal->terapis()->associate($terapis);
                                $jadwal->jadwal = $date->setTime($time[0], $time[1]);
                                $jadwal->save();
                            }
                        });
                    }
                    $date->addDays(1);
                }
            });
    }
}