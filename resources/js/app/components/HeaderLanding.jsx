import React, {useState} from 'react'
import { useHistory } from 'react-router'

import logo from '../assets/logo/logo-green.png'

export default function HeaderLanding() {

    const navItems = ['Beranda', 'Layanan', 'News', 'Toko', 'Kerjasama', 'Kontak']
    const [isNavbarExpanding, setNavbarExpanding] = useState(false)

    const history = useHistory()

    return (
        <div className="tw-w-full tw-absolute tw-z-40">
            <div className="tw-px-4 tw-py-3 tw-flex tw-text-primary tw-relative">
                <div className="tw-flex-grow md:tw-flex-grow-0">
                    <img src={logo} className="tw-h-8" onClick={() => history.push('/')} />
                </div>
                <div className="tw-flex-grow tw-hidden md:tw-flex tw-items-center tw-justify-center tw-font-semibold">
                    <div className="tw-hidden tw-items-center tw-justify-center tw-px-5 tw-py-1 tw-gap-6 tw-bg-white tw-rounded-md" style={{boxShadow: '0px 2px 12px 1px rgba(0, 0, 0, 0.25)'}}>
                    {
                        navItems.map((x,i) => <span key={i}>{x}</span>)
                    }
                    </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center tw-text-xl tw-gap-4">
                    {/* search */}
                    <div className="tw-rounded-full tw-bg-white tw-w-9 tw-h-9 tw-flex tw-items-center tw-justify-center" style={{boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.25)'}}> 
                        <i className="bi-search"></i>
                    </div>
                    {/* profile or login */}
                    <div className="tw-rounded-full tw-bg-white tw-w-9 tw-h-9 tw-flex tw-items-center tw-justify-center" onClick={() => history.push('/login')} style={{boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.25)'}}> 
                        <i className="bi-person-fill"></i>
                    </div>
                    {
                        isNavbarExpanding ? (
                            <div className="tw-rounded-full tw-hidden tw-w-9 tw-h-9 tw-items-center tw-bg-primary tw-text-white tw-justify-center" style={{boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.25)'}}> 
                                <i className="bi-list" onClick={() => setNavbarExpanding(false)}></i>
                            </div>
                        ) 
                        : (
                            <div className="tw-rounded-full tw-hidden tw-w-9 tw-h-9 tw-bg-white tw-items-center tw-justify-center" style={{boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.25)'}}> 
                                <i className="bi-list" onClick={() => setNavbarExpanding(true)}></i>
                            </div>
                        )
                    }
                </div>
                <div className={`${isNavbarExpanding ? 'tw-flex' : 'tw-hidden'} tw-flex-col tw-hidden tw-w-36 tw-bg-white tw-absolute tw-top-16 tw-right-5 tw-gap-2 tw-pl-4 tw-py-4 tw-z-40 tw-rounded-lg`} style={{boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.25)'}}>
                    {
                        navItems.map((x,i) => <div key={i}>{x}</div>)
                    }
                </div>
            </div>
        </div>
    )
}
