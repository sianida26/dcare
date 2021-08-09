import React from 'react'
import faker from 'faker'
import logo from '../assets/logo/logo-white.png'

export default function TerapistCard({avatar, name, email, phone, rating, job, year, speciality}) {
    return (
        <div className="tw-max-w-sm tw-w-full tw-flex tw-flex-col tw-px-8 tw-py-8 tw-items-center tw-text-sm tw-bg-white" style={{boxShadow: '0px 0px 42px rgba(0, 0, 0, 0.25)', borderRadius: '3rem'}}>
            <div className="tw-w-full tw-px-1 lg:tw-px-6 tw-flex tw-flex-col tw-items-center">
                {/* card header */}
                <div className="tw-rounded-xl tw-bg-primary tw-grid tw-place-items-center tw-py-4 tw-w-full">
                    <img src={logo} alt="Logo" className="tw-h-8" />
                </div>

                {/* avatar */}
                <img className="tw-rounded-full tw-h-16 tw-w-16 tw-my-4" alt="avatar terapis" src={avatar} />

                {/* profile */}
                <div className="tw-flex tw-flex-col tw-items-center">
                    <span>{name}</span>
                    <span>{email}</span>
                    <span>{phone}</span>
                </div>

                {/* rating */}
                <div className="tw-flex tw-flex-col tw-items-center tw-mt-4">
                    <h3 className="tw-font-semibold">Rating:</h3>
                    <div className="tw-flex tw-gap-1">
                        {
                            [1,2,3,4,5].map((x) => <i className={`bi bi-star-fill ${x <= rating ? 'tw-text-yellow-400' : 'tw-text-gray-500'}`}></i>)
                        }
                    </div>
                </div>

                {/* about */}
                <div className="tw-flex tw-flex-col tw-items-stretch tw-w-full tw-mt-4 tw-gap-2">
                    <div className="tw-py-3 tw-rounded-lg tw-grid tw-place-items-center tw-px-2 tw-text-center" style={{boxShadow: 'inset 0px 4px 8px 4px rgba(0, 0, 0, 0.25)'}}>
                        <span>{job}</span>
                    </div>
                    <div className="tw-py-3 tw-rounded-lg tw-grid ptw-lace-items-center tw-px-2 tw-text-center" style={{boxShadow: 'inset 0px 4px 8px 4px rgba(0, 0, 0, 0.25)'}}>
                        <span>{year} - Sekarang</span>
                    </div>
                    <div className="tw-py-3 tw-rounded-lg tw-grid tw-place-items-center tw-px-2 tw-text-center" style={{boxShadow: 'inset 0px 4px 8px 4px rgba(0, 0, 0, 0.25)'}}>
                        <span>{speciality}</span>
                    </div>
                </div>
            </div>

            {/* card footer */}
            <div className="tw-flex tw-gap-2 tw-text-white tw-font-semibold tw-w-full tw-mt-4">
                <div className="tw-p-3 tw-rounded-xl tw-flex-grow tw-flex tw-justify-center tw-items-center" style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}>
                    <span>Agendakan Konsultasi</span>
                    <i className="bi bi-calendar-check-fill tw-text-xl tw-ml-2" />
                </div>
            </div>
        </div>
    )
}