import React from 'react'
import {useHistory} from 'react-router-dom'

const JAM = ['07:00 - 08:30','09:00 - 10:30', '11:00 - 12:30', '13:00 - 14:30', '15:00 - 16:30', '18:30 - 20:00']

export default function PilihJam() {

    const history = useHistory()

    const handlePilihJam  = function(){
        history.push('/konsultasi/menunggu-pembayaran-dikonfirmasi')
    }

    return (
        <div className="tw-bg-white tw-w-screen tw-h-screen tw-grid tw-place-items-center">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-p-16 md:tw-px-80 tw-rounded-3xl tw-items-center md:tw-items-start tw-justify-center tw-shadow-2xl">
                <i className="bi-alarm tw-text-primary tw-text-7xl"></i>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-center">
                    <span className="tw-text-primary tw-text-3xl md:tw-text-4xl tw-font-semibold tw-w-full md:tw-w-52">Jadwal Konsultasi</span>
                    <div className="tw-flex tw-flex-col tw-gap-2 tw-w-52">    
                        {JAM.map(function(jam, i){
                            return <div key={i} onClick={handlePilihJam} className="tw-px-6 tw-py-2 tw-text-white tw-w-full tw-text-center" style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}>{jam}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
