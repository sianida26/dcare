import React from 'react'
import HeaderLanding from '../../components/HeaderLanding'
import QnAImage from '../../assets/images/qna.png'
import EventTerdekatImg from '../../assets/images/event_terdekat.png'

const DASHBOARD_MENUS = [
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
    return (
        <div className="w-full flex flex-col relative">
             <HeaderLanding />
             <main className="pt-12 px-4 md:px-8 lg:px-16 flex flex-col">
                <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-primary mt-12">Beranda Volunteer</h1>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8 self-stretch place-items-center">
                    {
                        DASHBOARD_MENUS.map((x) => (
                            <span className="flex flex-col gap-2 items-center text-center border-red-400 h-36">
                                <span className="flex items-center justify-center w-20 h-20 rounded-full" style={{boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.25)'}}>
                                    <i className={`bi bi-${x.icon} text-4xl`}></i>
                                </span>
                                <span className="font-semibold">{x.caption}</span>
                            </span>
                        ))
                    }
                </div>
                <img src={QnAImage} style={{height: '24rem', objectFit: 'contain', alignSelf: 'start'}} />
             </main>
             <img src={EventTerdekatImg} className="absolute bottom-0 h-48 object-contain right-0" />
        </div>
    )
}
