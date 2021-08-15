import React from 'react'
import Calendar from 'react-calendar'
import { useHistory } from 'react-router'
import PerfectScrollbar from 'react-perfect-scrollbar'
import DatePicker from 'react-datepicker'

import Header from '../../../components/HeaderLanding'
import ornament1 from '../../../assets/ornaments/1.png'
import ornament2 from '../../../assets/ornaments/2.png'

export default function Monitoring() {

    const history = useHistory()

    const [startDate, setStartDate] = React.useState(new Date());

    const [isCalendarMode, setCalendarMode] = React.useState(true)

    const handlePilihTanggal = function(){
        history.push('/monitoring/tambah-perkembangan')
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
            <div className="tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-center tw-max-w-screen-sm tw-w-full">
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
                        <tr className="tw-flex tw-gap-2 tw-border-b tw-border-primary">
                            <td>01/08/2021</td>
                            <td>
                                <p>Fulan sudah dapat mengunyah secara mandiri.</p>
                                <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
                            </td>
                        </tr>
                        <tr className="tw-flex tw-gap-2 tw-border-b tw-border-primary">
                            <td>01/08/2021</td>
                            <td>
                                <p>Motorik tangan Fulan masih lemah perlu dilatih dengan sering memutarkan pergelangan tangan dan melibatkan siku oleh pendamping. Namun unuk otot-otot geraham dan pipi sudah lebih lentur untuk mengunyah. Mohon untuk sering dibangun.</p>
                                <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
                            </td>
                        </tr>
                        <tr className="tw-flex tw-gap-2 tw-border-b tw-border-primary">
                            <td>01/08/2021</td>
                            <td>
                                <p>Fulan sudah dapat mengunyah secara mandiri.</p>
                                <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
                            </td>
                        </tr>
                        <tr className="tw-flex tw-gap-2 tw-border-b tw-border-primary">
                            <td>01/08/2021</td>
                            <td>
                                <p>Motorik tangan Fulan masih lemah perlu dilatih dengan sering memutarkan pergelangan tangan dan melibatkan siku oleh pendamping. Namun unuk otot-otot geraham dan pipi sudah lebih lentur untuk mengunyah. Mohon untuk sering dibangun.</p>
                                <p className="tw-text-gray-500">dibuat oleh @blablabla pada 19:30 WIB</p>
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
                <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4 tw-w-full tw-items-center tw-justify-center tw-bg-white tw-rounded-xl tw-mt-4">
                    <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-justify-around tw-w-full tw-px-8 ">
                        <button onClick={() => setCalendarMode(true)} className="tw-rounded-xl tw-w-full tw-p-1 tw-text-white tw-border-2" style={isCalendarMode ? {background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)', borderColor: 'transparent'} : {borderColor: '#256e48', color: '#256e48'}}>Kalender</button>
                        <button onClick={() => setCalendarMode(false)} className="tw-rounded-xl tw-w-full tw-p-1 tw-text-white tw-border-2" style={!isCalendarMode ? {background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)', borderColor: 'transparent'} : {borderColor: '#256e48', color: '#256e48'}}>Kartu</button>
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
        </div>
    )
}
