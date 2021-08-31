import React from 'react'

import HeaderLanding from '../../components/HeaderLanding'
import dropdownIcon from '../../assets/icons/iconForFaq.png'

const FAQ_ITEMS = [
    'Apa itu disabilitas?',
    'Apa saja ragam disabilitas?',
    'Bagaimana cara Assesmen yang benar?',
]

const TYPE_ITEMS = [
    'Kurikulum',
    'Konsultasi',
    'Terapis',
    'Monitoring',
]

export default function FAQ() {
    return (
        <div className="tw-w-screen tw-relative">
            <HeaderLanding />
            <div className="tw-w-screen tw-pt-20 tw-flex tw-flex-col tw-px-4 tw-pb-16">
                {/* title row */}
                <div className="tw-w-full tw-flex tw-items-center">
                    <img className="tw-h-4" src={dropdownIcon} alt="Buka menu" />
                    <h1 className="tw-text-primary tw-font-bold tw-text-4xl tw-px-3 tw-flex-none">Q &amp; A</h1>
                    {/* search */}
                    <div className="tw-w-full tw-flex-grow tw-flex tw-gap-2 tw-items-center">
                        <input 
                            type="search"
                            placeholder="Cari..."
                            className="tw-w-full tw-rounded-full tw-bg-gray-100 tw-py-2 tw-px-3"
                        />
                        <i className="bi bi-search" />
                    </div>
                </div>

                {/* faq section */}
                <div className="tw-w-full tw-mt-8">
                    <h2 className="tw-text-primary tw-font-semibold tw-text-2xl tw-py-2">FAQ</h2>
                    {/* faq card */}
                    <div className="tw-w-full tw-bg-gray-200 tw-rounded-lg tw-px-4 tw-py-3 tw-divide-y tw-divide-gray-500" >
                        {
                            FAQ_ITEMS.map((item, i) => <div className="tw-py-2" key={i}>
                                <p className="">{item}</p>
                            </div>)
                        }
                    </div>
                </div>

                {/* items section */}
                <div className="tw-my-8 tw-flex tw-gap-2 tw-text-sm tw-flex-wrap tw-justify-center">
                    {
                        TYPE_ITEMS.map((type,i) => <div className="tw-bg-gray-200 tw-grid tw-place-content-center tw-rounded-lg tw-w-24 tw-h-24" key={i}>
                            <span>{type}</span>
                        </div>)
                    }
                </div>

                {/* ask a question */}
                <form className="tw-w-full tw-flex tw-flex-col tw-gap-4" onSubmit={(e) => e.preventDefault()}>
                    <textarea 
                        placeholder="Ajukan pertanyaan ..."
                        className="tw-bg-gray-200 tw-rounded-xl tw-px-4 tw-py-2 tw-w-full tw-h-48"
                    />
                    <button 
                        type="submit"
                        style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}
                        className="tw-rounded tw-font-semibold tw-py-2 tw-px-8 tw-text-white tw-self-end"
                    >
                        Kirim
                    </button>
                </form>

                {/* helpdesk */}
                <div className="tw-mt-8 tw-flex tw-flex-col tw-gap-2 tw-flex-initial">
                    <div>
                        <span className="tw-border tw-border-primary tw-p-1">
                            Help Desk
                        </span>
                    </div>
                    <span>0341-12348</span>
                    <span>Dcare@co.id</span>
                </div>
            </div>
        </div>
    )
}
