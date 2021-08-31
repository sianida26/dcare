import React from 'react'

import HeaderLanding from '../../components/HeaderLanding'
import dropdownIcon from '../../assets/icons/iconForFaq.png'

const FAQ_ITEMS = [
    'Apa itu disabilitas?',
    'Apa saja ragam disabilitas?',
    'Bagaimana cara Assesmen yang benar?',
]

const TYPE_ITEMS = [
    'Kurikulum',
    'Konsultasi',
    'Terapis',
    'Monitoring',
]

export default function Komunitas() {
    return (
        <div className="tw-w-screen tw-relative">
            <HeaderLanding />
            <div className="tw-w-screen tw-pt-20 tw-flex tw-flex-col tw-px-4 tw-pb-16">
                {/* title row */}
                <div className="tw-w-full tw-flex tw-items-center">
                    <img className="tw-h-4" src={dropdownIcon} alt="Buka menu" />
                    <h1 className="tw-text-primary tw-font-bold tw-text-4xl tw-px-3 tw-flex-none">Komunitas</h1>
                    {/* search */}
                    <div className="tw-w-full tw-flex-grow tw-flex tw-gap-2 tw-items-center">
                        <input 
                            type="search"
                            placeholder="Cari..."
                            className="tw-w-full tw-rounded-full tw-bg-gray-100 tw-py-2 tw-px-3"
                        />
                        <i className="bi bi-search" />
                    </div>
                </div>

                {/* card */}
                <div className="tw-w-full tw-bg-gray-200 tw-rounded-2xl tw-flex tw-flex-col tw-mt-16 tw-py-8 tw-px-4">
                    {/* title and logo */}
                    <div className="tw-flex tw-flex-col tw-items-center">
                        <div className="tw-h-24 tw-w-24 tw-bg-primary tw-rounded-full"></div>
                        <h1 className="tw-font-semibold tw-text-xl">Omah Gembira</h1>
                        <span className="">Komunitas</span>
                    </div>

                    {/* description */}
                    <desc className="tw-my-4">Merupakan suatu komunitas mahasiswa Pemerhati Penyandang Disabilitas di Malang Raya. Dibentuk pada tanggal 23 Juli 2020</desc>

                    {/* kegiatan */}
                    <p>Kegiatan:</p>
                    <div className="tw-grid tw-grid-cols-3 tw-gap-2">
                        <div className="tw-w-full tw-h-24 tw-bg-white tw-grid tw-place-items-center">
                            <span>Foto</span>
                        </div><div className="tw-w-full tw-h-24 tw-bg-white tw-grid tw-place-items-center">
                            <span>Foto</span>
                        </div><div className="tw-w-full tw-h-24 tw-bg-white tw-grid tw-place-items-center">
                            <span>Foto</span>
                        </div>
                    </div>

                    {/* contact us */}
                    <div className="tw-flex tw-justify-end">
                        <span className="tw-flex tw-flex-col tw-items-end">
                            <span>Kontak Kami</span>
                            <span>OmahGembira@gmail.com</span>
                            <span>085526327228</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
