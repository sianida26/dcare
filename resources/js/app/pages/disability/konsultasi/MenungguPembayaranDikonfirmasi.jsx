import React from 'react'

export default function MenungguPembayaranDikonfirmasi() {
    return (
        <div>
            <div className="tw-bg-white tw-w-screen tw-h-screen tw-p-4 md:tw-p-14 tw-grid tw-place-items-center">
            <div className="tw-flex tw-flex-col tw-gap-8 tw-w-full tw-px-4 md:tw-px-56 tw-py-8 tw-rounded-3xl tw-items-center tw-justify-center tw-shadow-2xl">
                <span className="tw-font-semibold tw-text-xl md:tw-text-3xl tw-text-center">Menunggu pembayaran dikonfirmasi...</span>
                <div className="tw-flex tw-items-center tw-justify-center tw-gap-4">
                    <i className="bi-cash-coin tw-text-primary tw-text-5xl md:tw-text-6xl"></i>
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <i className="bi-three-dots tw-text-5xl md:tw-text-6xl"></i>   
                        <i className="bi-three-dots tw-text-5xl md:tw-text-6xl"></i>
                    </div>
                    <i className="bi-cash-coin tw-text-primary tw-text-5xl md:tw-text-6xl"></i>
                </div>
            </div>
        </div>
        </div>
    )
}
