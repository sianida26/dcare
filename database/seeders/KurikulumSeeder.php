<?php

namespace Database\Seeders;

use App\Models\Kurikulum;

use Illuminate\Database\Seeder;

class KurikulumSeeder extends Seeder
{

    private $dataKurikulum = [
        [
            'level' => 'intermediate',
            'tingkatan' => 1,
            'aspek' => 'Bantu Diri Makan',
            'video_url' => 'MVI_0908.mp4',
            'description' => '<p>Tahap ini dilakukan untuk anak yang belum mampu makan secara mandiri tanpa disuapin</p><p>Tutorial yang ada pada video ini berupa:</p><ol class="tw-list-decimal tw-list-inside"><li>Tutorial bantu diri mengunyah makanan</li><li>Tutorial bantu diri mengunyah sendok</li><li>Tutorial bantu diri makan tanpa berantakan</li></ol>'
        ],
        [
            'level' => 'intermediate',
            'tingkatan' => 4,
            'aspek' => 'Kognitif',
            'video_url' => 'MVI_6533.mp4',
            'description' => '<p>Tahap ini dilakukan untuk melatih kognitif anak dalam menghapal nama, bentuk, serta warna benda menggunakan alat peraga berupa flash cards</p>',
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (Kurikulum::all()->isNotEmpty()) return;
        collect($this->dataKurikulum)->each(function($data){
            Kurikulum::create([
                'level' => $data['level'],
                'tingkatan' => $data['tingkatan'],
                'aspek' => $data['aspek'],
                'video_url' => $data['video_url'],
                'description' => $data['description'],
            ]);
        });
    }
}
