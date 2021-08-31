<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Terapis;

class LokasiTerapisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //-7.850276, 112.539998 to -8.047150, 112.760786
        $constraints = [
            'lat' => ['min' => 7850276, 'max' => 8047150],
            'lon' => ['min' => 112539998, 'max' => 112760786],
        ];

        Terapis::all()
            ->each(function($terapis) use ($constraints){
                $terapis->latitude = -rand($constraints['lat']['min'], $constraints['lat']['max'])/1000000;
                $terapis->longitude = rand($constraints['lon']['min'], $constraints['lon']['max'])/1000000;
                $terapis->save();
            });
    }
}
