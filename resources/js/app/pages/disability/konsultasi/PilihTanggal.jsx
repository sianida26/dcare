import React from 'react'

import Calendar from 'react-calendar'
import { format, isSameDay, parse } from 'date-fns'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../../providers/AuthProvider'
import { useData } from '../../../providers/DisabilityDataProvider'

export default function Jadwal() {

    const history = useHistory()

    const { axios } = useAuth()
    const { data, setData } = useData()

    const [jadwals, setJadwals] = React.useState([])
    const [dates, setDates] = React.useState([])

    React.useEffect(function(){
        if (data.konsultasiTerapistId < 0){
            history.replace('.')
            return
        }
        requestAvailableDates()
    }, [])

    const requestAvailableDates = function(){
        axios({
            url: '/konsultasi/getAvailableDates',
            method: 'post',
            data:{
                terapistId: data.konsultasiTerapistId,
            }
        })
        .then(result => { //handle success response
            let responseData = result.data
            let typedData = Object.fromEntries(Object.entries(responseData).map(([key, value]) => {
                let newValue = value.map(jadwal => ({
                    available: jadwal.available,
                    dateTime: new Date(jadwal.dateTime.slice(0,-1))
                }))
                return [key, newValue]
            }))
            console.log(typedData)
            setJadwals(typedData)
            setDates(Object.keys(responseData).map(date => parse(date, 'dd-MM-yyyy', new Date())))
        })
        .catch(error =>{ //handle error response
            let errorMessage = error.pesan ? error.pesan : "Terjadi kesalahan pada pengaturan request ini. Silakan hubungi Admin.";
            if (error.request){
                //Request was made but no response was received
            } else if (error.response){
                //Error caused from the server
                console.log(error.response) //todo remove log
                let errorCode = error.response.status
                switch(errorCode){
                    case 400: /*bad request*/ break; 
                    case 401: /*Unauthorized*/ break;
                    case 403: /*Forbidden*/ break;
                    case 404: /*not found*/ break; 
                    case 405: /*method not allowed*/ break; 
                    case 408: /*Request timed out*/ break;
                    case 409: /*Conflict*/ break;
                    case 419: /*Page expired, CSRF token missing*/ break;
                    case 422: /*Validation failed*/ break;
                    case 429: /*Too Many Request */ break;
                    case (Math.floor(errorCode/100) === 5): //server error
                        errorMessage=`Ups. Terjadi error di dalam server. silakan coba lagi nanti (${errorCode})`;
                        break; 
                    default: /* Other errors */
                        errorMessage=`Ups. terjadi error (${errorCode})`;
                }
            } else {
                //Something happened in setting up the request that triggered an Error
            }
            //you can show error notification here
            // if (errorMessage) enqueueSnackbar(errorMessage,{variant:"error"});
        })
        .finally(() => {
            //
        })
    }

    const renderTileContent = function({ activeStartDate, date, view }){
        // console.log(date)
        let isAvailable = dates.some(availableDate => isSameDay(date,availableDate))
        return <div className="tw-w-full tw-flex tw-flex-col tw-gap-0.5">
            {/* <div className="tw-h-2 tw-bg-red-500"></div> */}
            {isAvailable && <div className="tw-h-2 tw-bg-blue-500"></div>}
        </div>
    }

    const handleBack = function(){
        history.goBack()
    }
    const handlePilihTanggal = function(value){
        let isAvailable = dates.some(availableDate => isSameDay(value,availableDate))
        if (!isAvailable) return
        // console.log(jadwals[format(value, 'dd-MM-yyyy')])
        setData({
            jamKonsultasis: jadwals[format(value, 'dd-MM-yyyy')]
        })
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
