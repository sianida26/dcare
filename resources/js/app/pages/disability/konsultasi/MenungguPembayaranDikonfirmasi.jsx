import React from 'react'

import { useHistory } from 'react-router-dom'

export default function MenungguPembayaranDikonfirmasi() {

    const history = useHistory()

    return (
        <div>
            <div className="tw-bg-white tw-w-screen tw-h-screen tw-p-4 md:tw-p-14 tw-grid tw-place-items-center">
            <div className="tw-flex tw-flex-col tw-gap-8 tw-w-full tw-px-4 md:tw-px-56 tw-py-8 tw-rounded-3xl tw-items-center tw-justify-center" style={{boxShadow: '0px 0px 24px 1px rgba(0, 0, 0, 0.25)'}}>
                <span className="tw-font-semibold tw-text-xl md:tw-text-3xl tw-text-center">Menunggu pembayaran dikonfirmasi...</span>
                <div className="tw-flex tw-items-center tw-justify-center tw-gap-4">
                    <i className="bi-cash-coin tw-text-primary tw-text-5xl md:tw-text-6xl"></i>
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <i className="bi-three-dots tw-text-5xl md:tw-text-6xl"></i>   
                        <i className="bi-three-dots tw-text-5xl md:tw-text-6xl"></i>
                    </div>
                    <i className="bi-cash-coin tw-text-primary tw-text-5xl md:tw-text-6xl"></i>
                </div>
                <button 
                    className="tw-text-white tw-font-medium tw-text-xl lg:tw-text-2xl tw-py-1 tw-px-6 tw-rounded-full" 
                    style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}
                    onClick={() => history.replace('/')}
                >
                    Home
                </button>
            </div>
        </div>
        </div>
    )
}
