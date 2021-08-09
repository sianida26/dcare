<?php

namespace Database\Seeders;

use App\Models\TerapistSpeciality;

use Illuminate\Database\Seeder;

class TerapistSpecialitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $specialities = collect(['Disabilitas intelektual', 'Disabilitas daksa', 'Disabilitas rungu', 'Disabilitas netra']);

        $specialities->map(function($speciality){
            $model = TerapistSpeciality::firstWhere('name', $speciality);
            if ($model === null) TerapistSpeciality::create(['name' => $speciality]);
        });
    }
}
