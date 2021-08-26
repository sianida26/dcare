import React from 'react'

import Header from '../../../components/HeaderLanding'
import ornament2 from '../../../assets/ornaments/2.png'

import { useData } from '../../../providers/DisabilityDataProvider'

export default function Aspek() {

    const [videos, setVideos] = React.useState()
    //todo lanjutkan ambil data dari context api

    return (
        <div className="tw-relative tw-w-screen tw-min-h-screen">
            <Header />
            <img className="tw-absolute tw-bottom-0 tw-left-0 sm:tw-max-w-2xl" src={ornament2} style={{zIndex: -1}} />
            <div className="tw-flex tw-gap-2 tw-pt-20 tw-px-4 sm:tw-pl-6 md:tw-pl-8 tw-w-screen">
                <span  className="tw-font-semibold tw-text-xl sm:tw-text-3xl md:tw-text-4xl">Tingkatan 1</span>
                <i className="bi bi-chevron-right tw-text-primary tw-text-xl sm:tw-text-3xl md:tw-text-4xl" />
                <span className="tw-font-semibold tw-text-xl tw-text-primary sm:tw-text-3xl md:tw-text-4xl">Bantu diri makan</span>
            </div>
            <div className="tw-px-4 md:tw-px-16 tw-flex tw-flex-col lg:tw-grid lg:tw-grid-cols-2 lg:tw-juatify-between tw-gap-8 tw-mt-6 tw-object-none tw-object-top">
                <div>
                    <video controls playsInline className="tw-w-full tw-max-w-screen-md tw-min-w-screen-sm" >
                        <source src={`/storage/videos/MVI_0908.mp4`} type="video/mp4" />
                    </video>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4 tw-bg-gray-100 tw-rounded-lg ">
                    <span className="tw-font-semibold tw-text-primary tw-text-xl sm:tw-text-2xl md:tw-text-3xl">Catatan</span>
                    <p className="sm:tw-text-xl md:tw-text-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    )
}
