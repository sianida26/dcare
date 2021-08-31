import React from 'react'

import { useHistory } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'

import HeaderLanding from '../../components/HeaderLanding'
import QnAImage from '../../assets/images/qna.png'
import KomunitasImage from '../../assets/images/komunitas.png'
import EventTerdekatImg from '../../assets/images/whatsnew.png'

const DASHBOARD_MENUS = [
    {
        icon: 'chat-left-text',
        caption: 'Konsultasi',
        link: '/konsultasi',
    },
    {
        icon: 'envelope-open', //todo ganti
        caption: 'Inbox',
        link: '/inbox'
    },
    {  
        icon: 'graph-up',
        caption: 'Monitoring',
        link: '/monitoring' 
    },
    {
        icon: 'search', //todo ganti
        caption: 'Temukan Terapis Terdekat',
        link: '/terapis-terdekat'
    },
    {
        icon: 'card-text',
        caption: 'Kurikulum',
        link: '/kurikulum'
    },
    {  
        icon: 'person',
        caption: 'Akun Saya' //todo hapus
    },
]

export default function DashboardDisability() {

    const history = useHistory()

    const { axios } = useAuth()

    return (
        <div className="tw-w-full tw-flex tw-flex-col tw-relative">
             <HeaderLanding />
             <main className="tw-pt-12 tw-px-4 md:tw-px-8 lg:tw-px-16 tw-flex tw-flex-col">
                <h1 className="tw-text-2xl md:tw-text-3xl tw-text-center md:tw-text-left tw-font-bold tw-text-primary tw-mt-12">Beranda Penyandang Disabilitas</h1>
                <div className="tw-w-full tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-5 tw-mt-8 tw-self-stretch tw-place-items-center">
                    {
                        DASHBOARD_MENUS.map((x) => (
                            <span className="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-text-center tw-border-red-400 tw-h-36" onClick={() => history.push(x.link)}>
                                <span className="tw-flex tw-items-center tw-justify-center tw-w-20 tw-h-20 tw-rounded-full" style={{boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.25)'}}>
                                    <i className={`bi bi-${x.icon} tw-text-4xl`}></i>
                                </span>
                                <span className="tw-font-semibold">{x.caption}</span>
                            </span>
                        ))
                    }
                </div>
                <div className="tw-relative">
                    <img className="tw-absolute tw-top-0" onClick={() => history.push('/faq')} src={QnAImage} />
                    <img className="tw-absolute tw-top-28" onClick={() => history.push('/komunitas')} src={KomunitasImage} />
                    <img className="tw-absolute tw-top-52" onClick={() => history.push('/apayangbaru')} src={EventTerdekatImg} />
                </div>
             </main>
        </div>
    )
}
