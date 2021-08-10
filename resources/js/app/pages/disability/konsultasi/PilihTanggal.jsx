import React from 'react'
import Calendar from 'react-calendar'
import {useHistory} from 'react-router-dom'

export default function Jadwal() {

    const history = useHistory()

    const renderTileContent = function({ activeStartDate, date, view }){
        return <div className="tw-w-full tw-flex tw-flex-col tw-gap-0.5">
            <div className="tw-h-2 tw-bg-red-500"></div>
            <div className="tw-h-2 tw-bg-blue-500"></div>
        </div>
    }

    const handleBack = function(){
        history.goBack()
    }
    const handlePilihTanggal = function(){
        history.push('/konsultasi/pilih-jam')
    }

    return (
        <div className="tw-w-screen tw-p-6">
            <i className="bi-arrow-left-short tw-text-5xl tw-font-bold tw-text-primary" onClick={handleBack}></i>
            <div className="tw-flex tw-flex-col md:tw-flex-col lg:tw-flex-row tw-gap-8 tw-pt-6">
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <Calendar locale='id-ID' onClickDay={handlePilihTanggal} className="tw-p-2 tw-text-center" tileContent={renderTileContent} />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2">
                    <span className="tw-text-normal tw-text-xl tw-text-primary tw-font-semibold">Keterangan Agenda</span>
                    <div className="tw-flex tw-gap-2 tw-w-full tw-p-1">
                        <span className="tw-w-10 tw-h-5 tw-bg-blue-500">&nbsp;</span>
                        <span className="tw-font-medium">: Konsultasi offline</span>
                    </div>
                    <div className="tw-flex tw-gap-2 tw-w-full tw-p-1">
                        <span className="tw-w-10 tw-h-5 tw-bg-red-500">&nbsp;</span>
                        <span className="tw-font-medium">: Sudah dipesan</span>
                    </div>
                    <div className="tw-flex tw-gap-2 tw-w-full tw-p-1">
                        <span className="tw-w-10 tw-h-5 tw-bg-green-500">&nbsp;</span>
                        <span className="tw-font-medium">: Agenda Kosong</span>
                    </div>
                    <div className="tw-flex tw-gap-2 tw-w-full tw-p-1">
                        <span className="tw-w-10 tw-h-5 tw-bg-purple-500">&nbsp;</span>
                        <span className="tw-font-medium">: Menunggu konfirmasi</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
