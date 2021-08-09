<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Terapis;
use App\Models\TerapistSpeciality;

use Faker;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use Spatie\Permission\Models\Role;


class TerapistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create('id_ID');

        $specialities = TerapistSpeciality::all();

        for($i = 0; $i < 10; $i++){

            $speciality = $specialities->random();

            $user = User::create([
                'name' => $faker->name(),
                'email' => $faker->email(),
                'password' => Hash::make('cobaterapis'),
            ]);

            $terapis = new Terapis;
            $terapis->phone = $faker->phoneNumber();
            $terapis->address = $faker->address();
            $terapis->education = $faker->regexify('S[1-3] [A-Z][a-z]{6}');
            $terapis->terapist_since = $faker->numberBetween(1900, 2021);
            $terapis->speciality()->associate($speciality);

            $user->terapist()->save($terapis);
            $role = Role::firstWhere('name','terapist');
            $user->assignRole($role);
        }
    }
}
