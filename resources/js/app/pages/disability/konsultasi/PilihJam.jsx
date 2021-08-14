import React from 'react'

import { format, addHours, addMinutes } from 'date-fns'
import { useData } from '../../../providers/DisabilityDataProvider'
import { useAuth } from '../../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

// const JAM = ['07:00 - 08:30','09:00 - 10:30', '11:00 - 12:30', '13:00 - 14:30', '15:00 - 16:30', '18:30 - 20:00']
// const JAM = [
//     [7,0],
//     [9,0],
//     [11,0],
//     [13,0],
//     [15,0],
//     [18,30],
// ]

export default function PilihJam() {

    const history = useHistory()
    const { data, setData } = useData()
    const { axios } = useAuth()
    
    const [loading, setLoading] = React.useState(false)
    const [jadwals, setJadwals] = React.useState([])
    const [selectedDateId, setSelectedDateId] = React.useState(-1)

    React.useEffect(() => {
        if (data.jamKonsultasis.length < 1 || data.konsultasiTerapistId < 0){
            history.goBack()
            return
        }

        setJadwals(data.jamKonsultasis.map((jam, i) => ({
            ...jam,
            id: i,
        })))
    }, [])

    const handlePilihJam  = function(dateId){
        setSelectedDateId(dateId)
        setLoading(true)
        axios({
            url: '/konsultasi/chooseJadwalKonsultasi',
            method: 'post',
            data: {
                date: format(jadwals[dateId].dateTime, 'dd-MM-yyyy; HH:mm'),
                terapistId: data.konsultasiTerapistId,
            }
        })
        .then(result => { //handle success response
            let data = result.data;
            history.push('/konsultasi/menunggu-pembayaran-dikonfirmasi')
            console.log(data) //todo remove log
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
        })
        .finally(() => {
            setLoading(false)
        })
    }

    //todo ganti shadow dari login

    return (
        <div className="tw-bg-white tw-w-screen tw-h-screen tw-grid tw-place-items-center">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-p-16 md:tw-px-80 tw-rounded-3xl tw-items-center md:tw-items-start tw-justify-center tw-shadow-2xl">
                <i className="bi-alarm tw-text-primary tw-text-7xl"></i>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-center">
                    <span className="tw-text-primary tw-text-3xl md:tw-text-4xl tw-font-semibold tw-w-full md:tw-w-52">Jadwal Konsultasi</span>
                    <div className="tw-flex tw-flex-col tw-gap-2 tw-w-52">    
                        {jadwals.map(function(jadwal){
                            return jadwal.available ? <div className="tw-relative" key={jadwal.id}>
                                    <div className={`${loading ? 'tw-grid': 'tw-hidden'} tw-absolute tw-w-full tw-h-full tw-bg-black tw-bg-opacity-75 tw-place-content-center`}>
                                        <svg className={`tw-animate-spin tw-h-5 tw-w-5 tw-text-white ${jadwal.id !== selectedDateId && 'tw-hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="tw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </div>
                                    <div onClick={() => handlePilihJam(jadwal.id)} className={`tw-px-6 tw-py-2 tw-text-white tw-w-full tw-text-center`} style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}>{format(jadwal.dateTime, 'HH:mm')} - {format(addHours(addMinutes(jadwal.dateTime,30),1), 'HH:mm')}</div>
                                </div>
                                //todo buat jadi warna abu abu ketika sudah ada yang booking
                                : <div className="tw-px-6 tw-py-2 tw-bg-opacity-50 tw-text-white tw-w-full tw-text-center" style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}>{format(jadwal.dateTime, 'HH:mm')} - {format(addHours(addMinutes(jadwal.dateTime,30),1), 'HH:mm')}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
