import React from 'react'
import Calendar from 'react-calendar'
import { useHistory } from 'react-router'
import PerfectScrollbar from 'react-perfect-scrollbar'
import DatePicker from 'react-datepicker'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import idLocale from 'date-fns/locale/id'

import {useAuth} from '../../../providers/AuthProvider'
import Header from '../../../components/HeaderLanding'
import ornament1 from '../../../assets/ornaments/1.png'
import ornament2 from '../../../assets/ornaments/2.png'

export default function Monitoring() {

    const history = useHistory()

    const { axios } = useAuth()

    const [startDate, setStartDate] = React.useState(new Date());
    const [isCalendarMode, setCalendarMode] = React.useState(true)
    const [isModalShow, setModalShow] = React.useState(false)
    const [perkembangan, setPerkembangan] = React.useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date()) //todo create null safe method
    const [listPerkembangan, setListPerkembangan] = React.useState([])

    React.useEffect(function(){
        requestDataBulanan()
    },[startDate])

    const requestDataBulanan = function(){
        axios({
            url: '/monitoring/getLaporanPerBulan',
            method: 'post',
            data: {
                date: format(startDate,'MM-yyyy'),
            }
        })
        .then(result => { //handle success response
            let data = result.data;
            console.log(data) //todo remove log
            // handleCloseModal()
            setListPerkembangan(data.map(function(x){
                return {
                    ...x,
                    tanggal: parse(x.tanggal, 'dd-MM-yyyy', new Date())
                }
            }))
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
            // setLoading(false)
        })
    }

    
    const handlePilihTanggal = function(value){
        setModalShow(true)
        setSelectedDate(value)
        setPerkembangan(listPerkembangan.find(x => {
            return x.tanggal.getDate() === value.getDate()
        })?.perkembangan || '')
    }

    const handleCloseModal = function(){
        setModalShow(false)
        setPerkembangan('')
    }

    const handleSubmitLaporan = function(){
        axios({
            url: '/monitoring/buatLaporan',
            method: 'post',
            data: {
                tanggal: format(selectedDate,'dd-MM-yyyy'),
                perkembangan: perkembangan
            }
        })
        .then(result => { //handle success response
            let data = result.data;
            console.log(data) //todo remove log
            handleCloseModal()
            requestDataBulanan()
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
            // setLoading(false)
        })
    }

    const renderCalendar = () => {

        return (
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-max-w-screen-sm tw-w-full">
                <PerfectScrollbar>
                    <Calendar 
                        locale='id-ID' 
                        onActiveStartDateChange={(props) => {
                            if (props.view === 'month'){
                                setStartDate(props.activeStartDate)
                            }
                        }}
                        activeStartDate={startDate}
                        onClickDay={handlePilihTanggal} 
                        className="tw-text-center" />
                </PerfectScrollbar>
            </div>
        )
    }


    const renderKartu = () => {

        const DatePickerCustom = React.forwardRef(({value, onClick}, ref) => (
            <div className="tw-py-2 tw-font-semibold tw-text-white tw-text-center tw-rounded-lg tw-w-full" style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}} onClick={onClick} ref={ref}>{format(new Date(startDate), 'MMMM yyyy', {locale: idLocale})}</div>
        ))

        return (
            <div className="tw-bg-gray-50 tw-px-3 tw-py-6 tw-rounded-lg tw-flex tw-flex-col tw-gap-5 tw-items-center tw-justify-center tw-max-w-screen-sm tw-w-full">
                <div className="tw-flex tw-w-full">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        // dateFormat="MMMM YYYY"
                        showMonthYearPicker
                        customInput={<DatePickerCustom />}
                    /> 
                </div>
                <table className="tw-w-full tw-table-fixed">
                    <tbody className="tw-w-full">
                        {/* <tr className="tw-flex tw-gap-2">
                            <td className="tw-py-3">01/08/2021</td>
                            <td className="tw-border-l-4 tw-border-primary">
                                <div className="tw-pl-2 tw-py-3">
                                    <p>Fulan sudah dapat mengunyah secara mandiri.</p>
                                    <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
                                </div>
                            </td>
                        </tr> */}
                        {
                            listPerkembangan.length ? listPerkembangan.map(function(perkembangan, i){

                                return <tr className="tw-flex tw-gap-2 tw-w-full">
                                    <td className="tw-py-3 tw-border-r-4 tw-border-primary tw-w-28">{format(perkembangan.tanggal, 'dd/MM/yyyy')}</td>
                                    <td className="">
                                        <div className="tw-pl-2 tw-py-3">
                                            <p>{perkembangan.perkembangan}</p>
                                            {/* <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p> */}
                                        </div>
                                    </td>
                                </tr>
                            }) : <tr>
                                <td colSpan={2}>Belum ada perkembangan pada bulan ini</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className="tw-relative tw-w-screen tw-min-h-screen tw-flex tw-justify-center">
            <Header />
            <img className="tw-w-full tw-h-full tw-transform tw-absolute lg:tw-bottom-16" src={ornament1} style={{WebkitTransform: "scaleY(-1)", transform: "scaleY(-1)", zIndex: -1}} />
            <img className="tw-absolute tw-bottom-0 tw-left-0 md:tw-max-w-2xl" src={ornament2} style={{zIndex: -1}} />
            <div className="tw-pt-16 tw-w-screen tw-px-4 tw-border tw-">
                <div className="tw-flex tw-flex-col tw-gap-2 tw-bg-white tw-rounded-xl tw-px-2 tw-py-4">
                    <span className="tw-font-semibold tw-text-3xl tw-text-primary">Fitur Monitoring</span>
                    <span className="tw-text-base">Pada fitur ini, anda dapat memasukkan dan memantau perkembangan Fulan.</span>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-6 tw-p-4 tw-w-full tw-items-center tw-justify-center tw-bg-white tw-rounded-xl tw-mt-4">
                    <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-justify-around tw-w-full tw-px-8 ">
                        <button onClick={() => setCalendarMode(true)} className={`tw-rounded-xl tw-w-full tw-p-1 tw-text-white tw-border-2 focus:tw-outline-none ${isCalendarMode ? '' : 'tw-border-primary tw-text-primary'}`} style={isCalendarMode ? {background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'} : {}}>Kalender</button>
                        <button onClick={() => setCalendarMode(false)} className={`tw-rounded-xl tw-w-full tw-p-1 tw-text-white tw-border-2 focus:tw-outline-none ${!isCalendarMode ? '' : 'tw-border-primary tw-text-primary'}`} style={!isCalendarMode ? {background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'} : {}}>Kartu</button>
                    </div>
                    <div className="tw-w-full tw-flex tw-justify-center">
                        {
                            isCalendarMode ? renderCalendar() : renderKartu()
                        } 
                    </div>
                    {/* <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-max-w-screen-sm tw-w-full">
                        <PerfectScrollbar>
                            <Calendar locale='id-ID' onClickDay={handlePilihTanggal} className="tw-text-center" />
                        </PerfectScrollbar>
                    </div> */}

                    {/* <Calendar locale='id-ID' onClickDay={handlePilihTanggal} className="tw-text-center tw-max-w-full absolute" /> */}
                </div>
            </div>

            {/* MODAL */}
            <div className={`tw-fixed tw-w-screen tw-h-screen tw-bg-black tw-bg-opacity-75 ${isModalShow ? ' tw-flex' : 'tw-hidden'} tw-items-center tw-justify-center tw-p-8 md:tw-p-16`} style={{zIndex: 900}}>
                <div className="tw-bg-white tw-rounded-2xl tw-max-w-screen-lg tw-w-full tw-p-4 tw-flex tw-flex-col tw-gap-4">
                    <div className="tw-flex tw-justify-end">
                        <i onClick={handleCloseModal} className="bi bi-x-lg tw-text-lg md:tw-text-2xl"></i>
                    </div>
                    <div>
                        <table className="tw-text-left">
                            <tr>
                                <th>Tanggal</th>
                                <th className="tw-px-2">:</th>
                                <td className="tw-px-2 tw-font-semibold">{format(selectedDate,'MM/dd/yyyy')}</td>
                            </tr>
                        </table>
                        <div className="tw-flex tw-flex-col tw-w-full tw-h-full tw-gap-2">
                            <div className="tw-flex tw-gap-2">
                                <span className="tw-font-bold">Perkembangan</span>
                                <span className="tw-font-bold">:</span>
                            </div> 
                            <textarea onChange={(e) => setPerkembangan(e.target.value)} value={perkembangan} className="tw-w-full tw-h-80 sm:tw-h-60 tw-p-4 tw-font-medium tw-border-2 tw-rounded-3xl focus:tw-outline-none focus:tw-border-yellow-500"></textarea>
                        </div>
                    </div>
                    <div className="tw-flex tw-justify-end">
                        <button onClick={handleSubmitLaporan} className="tw-py-1 tw-px-8 tw-text-white tw-font-semibold tw-rounded-xl focus:tw-outline-none" style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}>Kirim</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
