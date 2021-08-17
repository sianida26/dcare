import React from 'react'
import Calendar from 'react-calendar'
import { useHistory } from 'react-router'
import PerfectScrollbar from 'react-perfect-scrollbar'
import DatePicker from 'react-datepicker'
import format from 'date-fns/format'

import Header from '../../../components/HeaderLanding'
import ornament1 from '../../../assets/ornaments/1.png'
import ornament2 from '../../../assets/ornaments/2.png'

export default function Monitoring() {

    const history = useHistory()

    const [startDate, setStartDate] = React.useState(new Date());
    const [isCalendarMode, setCalendarMode] = React.useState(true)
    const [isModalShow, setModalShow] = React.useState(false)
    const [selectedDate, setSelectedDate] = React.useState(new Date()) //todo create null safe method

    
    const handlePilihTanggal = function(value){
        setModalShow(true)
        setSelectedDate(value)
    }

    const handleCloseModal = function(){
        setModalShow(false)
    }

    const renderCalendar = () => {

        return (
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-max-w-screen-sm tw-w-full">
                <PerfectScrollbar>
                    <Calendar locale='id-ID' onClickDay={handlePilihTanggal} className="tw-text-center" />
                </PerfectScrollbar>
            </div>
        )
    }

    const renderKartu = () => {
        return (
            <div className="tw-bg-gray-50 tw-px-3 tw-py-6 tw-rounded-lg tw-flex tw-flex-col tw-gap-5 tw-items-center tw-justify-center tw-max-w-screen-sm tw-w-full">
                <div>
                    <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                />
                </div>
                <table>
                    <tbody>
                        <tr className="tw-flex tw-gap-2">
                            <td className="tw-py-3">01/08/2021</td>
                            <td className="tw-border-l-4 tw-border-primary">
                                <div className="tw-pl-2 tw-py-3">
                                    <p>Fulan sudah dapat mengunyah secara mandiri.</p>
                                    <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="tw-flex tw-gap-2">
                            <td className="tw-py-3">01/08/2021</td>
                            <td className="tw-border-l-4 tw-border-primary">
                                <div className=" tw-pl-2 tw-py-3">
                                    <p>Motorik tangan Fulan masih lemah perlu dilatih dengan sering memutarkan pergelangan tangan dan melibatkan siku oleh pendamping. Namun unuk otot-otot geraham dan pipi sudah lebih lentur untuk mengunyah. Mohon untuk sering dibangun.</p>
                                    <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="tw-flex tw-gap-2">
                            <td className="tw-py-3">01/08/2021</td>
                            <td className="tw-border-l-4 tw-border-primary">
                                <div className="tw-pl-2 tw-py-3">
                                    <p>Fulan sudah dapat mengunyah secara mandiri.</p>
                                    <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="tw-flex tw-gap-2">
                            <td className="tw-py-3">01/08/2021</td>
                            <td className="tw-border-l-4 tw-border-primary">
                                <div className=" tw-pl-2 tw-py-3">
                                    <p>Motorik tangan Fulan masih lemah perlu dilatih dengan sering memutarkan pergelangan tangan dan melibatkan siku oleh pendamping. Namun unuk otot-otot geraham dan pipi sudah lebih lentur untuk mengunyah. Mohon untuk sering dibangun.</p>
                                    <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
                                </div>
                            </td>
                        </tr>
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
                        <button onClick={() => setCalendarMode(true)} className={`tw-rounded-xl tw-w-full tw-p-1 tw-text-white tw-border-2 ${isCalendarMode ? 'tw-border-0' : 'tw-border-2 tw-border-primary'}`} style={isCalendarMode && {background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}>Kalender</button>
                        <button onClick={() => setCalendarMode(false)} className="tw-rounded-xl tw-w-full tw-p-1 tw-text-white tw-border-2" style={!isCalendarMode ? {background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'} : {borderColor: '#256e48', color: '#256e48'}}>Kartu</button>
                    </div>
                    <div>
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
                            <textarea className="tw-w-full tw-h-80 sm:tw-h-60 tw-p-4 tw-font-medium tw-border-2 tw-rounded-3xl focus:tw-outline-none focus:tw-border-yellow-500"></textarea>
                        </div>
                    </div>
                    <div className="tw-flex tw-justify-end">
                        <button className="tw-py-1 tw-px-8 tw-text-white tw-font-semibold tw-rounded-xl" style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}>Kirim</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
