<?php

namespace Database\Seeders;

use App\Models\DisabilityType;
use Illuminate\Database\Seeder;

class DisabilityTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $types = collect(['fisik', 'mental', 'rungu', 'netra']);

        $types->map(function($type){
            $model = DisabilityType::firstWhere('name', $type);
            if ($model === null) DisabilityType::create(['name' => $type]);
        });
    }
}
