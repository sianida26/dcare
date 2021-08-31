import React from 'react'

import Header from '../../components/HeaderLanding'
import Jaemin from '../../assets/images/na.jpg'
import Artikel1 from '../../assets/images/artikel1.jpg'
import Artikel2 from '../../assets/images/artikel2.jpg'
import Artikel3 from '../../assets/images/artikel3.jpeg'
import Artikel4 from '../../assets/images/artikel4.jpg'

export default function WhatsNew() {
    return (
        <div className="tw-w-screen tw-h-screen">
            <Header />
            {/* whole page except header */}
            <div className="tw-relative tw-pt-16 tw-flex tw-flex-col">
                {/* cover */}
                <div className="tw-relative">
                    <img src={Artikel1} className="tw-filter tw-brightness-75 tw-object-cover tw-w-full tw-h-96" />
                    <div className="tw-absolute tw-top-0 tw-left-6 lg:tw-left-8 tw-p-4 tw-pt-8 tw-w-40 lg:tw-w-52 tw-bg-gray-200 tw-bg-opacity-50 tw-items-center">
                        <span className="tw-font-bold tw-text-3xl lg:tw-text-5xl tw-text-white">APA YANG BARU ?</span>
                    </div>
                    <div className="tw-absolute tw-bottom-2 lg:tw-bottom-3 tw-right-6 lg:tw-right-8 tw-flex tw-flex-col">
                        <span className="tw-font-semibold tw-text-white lg:tw-text-lg tw-text-right tw-leading-snug">Menghapus Diskriminasi terhadap Penyandang Disabilitas</span>
                        <span className="tw-font-semibold tw-text-white lg:tw-text-lg tw-text-right">Oleh : Fathimah Soraya</span>
                        <span className="tw-font-semibold tw-text-white lg:tw-text-lg tw-text-right">29 Agustus 2021</span>
                        <span className="tw-bg-gray-200 tw-bg-opacity-50 tw-py-1 tw-px-3 tw-mt-1 tw-rounded-lg tw-self-end tw-font-medium tw-text-md tw-text-white tw-text-center">Buka</span>
                    </div>
                </div>
                {/* content */}
                <div className="tw-px-4 tw-py-10 tw-w-3/4 tw-self-center tw-flex tw-flex-col tw-items-center tw-justify-center">
                    {/* card */}
                    <div className="tw-flex tw-flex-col tw-gap-4 tw-w-full tw-bg-gray-300 tw-rounded-lg tw-p-4">
                        <div className="tw-flex tw-gap-3 tw-w-full tw-items-center tw-justify-center">
                            <i className="bi bi-arrow-left tw-text-primary tw-text-xl lg:tw-text-2xl" />
                            <div className="tw-border tw-border-gray-500 tw-w-full tw-p-2 tw-flex tw-flex-col tw-gap-1">
                                <img src={Artikel2} className="tw-object-cover tw-w-full tw-h-32 lg:tw-h-52" />
                                <span className="tw-font-semibold tw-text-xl tw-text-primary">Latest News</span>
                                <span className="tw-font-medium tw-mt-3">30 Agustus 2021</span>
                                <span>Mahasiswa UM ciptakan olahan makanan cepat saji penunjang perkembangan otak disabilitas intelektual</span>
                                <div className="tw-bg-primary tw-py-2 tw-px-3 tw-mt-10 tw-w-full lg:tw-w-56 tw-rounded-lg tw-items-center tw-justify-center">
                                    <p className="tw-font-medium tw-text-md tw-text-white tw-text-center">View All News &amp; Articles</p>
                                </div>
                            </div>
                            <i className="bi bi-arrow-right tw-text-primary tw-text-xl lg:tw-text-2xl" />
                        </div>
                        <div className="tw-flex tw-gap-3 tw-w-full tw-items-center tw-justify-center">
                            <i className="bi bi-arrow-left tw-text-primary tw-text-xl lg:tw-text-2xl" />
                            <div className="tw-border tw-border-gray-500 tw-w-full tw-p-2 tw-flex tw-flex-col tw-gap-1">
                                <img src={Artikel3} className="tw-filter tw-brightness-75 tw-object-cover tw-w-full tw-h-32 lg:tw-h-52" />
                                <span className="tw-font-semibold tw-text-xl tw-text-primary">Tips &amp; Trick</span>
                                <span className="tw-font-medium tw-mt-3">25 Agustus 2021</span>
                                <span>Orang tua kesulitan menghadapi anak tantrum, ini solusinya!</span>
                                <div className="tw-bg-primary tw-py-2 tw-px-3 tw-mt-10 tw-w-full lg:tw-w-56 tw-rounded-lg tw-items-center tw-justify-center">
                                    <p className="tw-font-medium tw-text-md tw-text-white tw-text-center">View All Tips &amp; Trick</p>
                                </div>
                            </div>
                            <i className="bi bi-arrow-right tw-text-primary tw-text-xl lg:tw-text-2xl" />
                        </div>
                        <div className="tw-flex tw-gap-3 tw-w-full tw-items-center tw-justify-center">
                            <i className="bi bi-arrow-left tw-text-primary tw-text-xl lg:tw-text-2xl" />
                            <div className="tw-border tw-border-gray-500 tw-w-full tw-p-2 tw-flex tw-flex-col tw-gap-1">
                                <img src={Artikel4} className="tw-object-cover tw-w-full tw-h-32 lg:tw-h-52" />
                                <span className="tw-font-semibold tw-text-xl tw-text-primary">Event</span>
                                <span className="tw-font-medium tw-mt-3">23 Agustus 2021</span>
                                <span>Webinar Perayaan Hari Disabilitas Internasional Tahun 2020</span>
                                <div className="tw-bg-primary tw-py-2 tw-px-3 tw-mt-10 tw-w-full lg:tw-w-56 tw-rounded-lg tw-items-center tw-justify-center">
                                    <p className="tw-font-medium tw-text-md tw-text-white tw-text-center">View All Event</p>
                                </div>
                            </div>
                            <i className="bi bi-arrow-right tw-text-primary tw-text-xl lg:tw-text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
