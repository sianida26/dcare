import React from 'react'

import {useHistory} from 'react-router-dom'

import HeaderLanding from '../../components/HeaderLanding'
import QnAImage from '../../assets/images/qna.png'
import EventTerdekatImg from '../../assets/images/event_terdekat.png'

const DASHBOARD_MENUS = [
    {
        icon: 'calendar-check',
        caption: 'Agenda Konsultasi',
        link: '/jadwal',
    },
    {
        icon: 'envelope-open', //todo ganti
        caption: 'Inbox',
    },
    {
        icon: 'card-text',
        caption: 'Kurikulum',
    },
    {  
        icon: 'person',
        caption: 'Akun Saya' //todo hapus
    }
]

export default function DashboardTerapist() {

    const history = useHistory()

    return (
        <div className="tw-w-full tw-flex tw-flex-col tw-relative">
             <HeaderLanding />
             <main className="tw-pt-12 tw-px-4 md:tw-px-8 lg:tw-px-16 tw-flex tw-flex-col">
                <h1 className="tw-text-2xl md:tw-text-3xl tw-text-center md:tw-text-left tw-font-bold tw-text-primary tw-mt-12">Beranda Terapis</h1>
                <div className="tw-w-full tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-5 tw-mt-8 tw-self-stretch tw-place-items-center">
                    {
                        DASHBOARD_MENUS.map((x,i) => (
                            <span key={i} className="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-text-center tw-border-red-400 tw-h-36">
                                <span onClick={() => history.push(x.link)} className="tw-flex tw-items-center tw-justify-center tw-w-20 tw-h-20 tw-rounded-full" style={{boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.25)'}}>
                                    <i className={`bi bi-${x.icon} tw-text-4xl`}></i>
                                </span>
                                <span className="tw-font-semibold">{x.caption}</span>
                            </span>
                        ))
                    }
                </div>
                <img src={QnAImage} style={{height: '24rem', objectFit: 'contain', alignSelf: 'start'}} />
             </main>
             <img src={EventTerdekatImg} className="tw-absolute tw-bottom-0 tw-h-48 tw-object-contain tw-right-0" />
        </div>
    )
}
