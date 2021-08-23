import React from 'react'

import Header from '../../../components/HeaderLanding'
import ornament2 from '../../../assets/ornaments/2.png'
// import ornamentbg from '../../../assets/ornaments/bg.png'
import kurikulum1 from '../../../assets/images/intermediet.png'
import kurikulum2 from '../../../assets/images/pra_intermediet.png'
import kurikulum3 from '../../../assets/images/pre_advanced.png'
import kurikulum4 from '../../../assets/images/non_advanced.png'

export default function PilihKurikulum() {
    return (
        <div className="tw-relative tw-w-screen tw-min-h-screen">
            <Header />
            {/* <img className="tw-absolute tw-justify-self-center md:tw-max-w-3xl" src={ornamentbg} style={{zIndex: -1}} /> */}
            <img className="tw-absolute tw-bottom-0 tw-right-0 sm:tw-max-w-2xl" src={ornament2} style={{WebkitTransform: "scaleX(-1)", trasform: "scaleX(-1)", zIndex: -1}} />
            <div className="tw-pt-20 tw-w-screen tw-px-4">
                <div className="tw-flex tw-flex-col tw-font-semibold tw-text-primary">
                    <span className="tw-text-4xl sm:tw-text-5xl md:tw-text-6xl">Fitur</span>
                    <span className="tw-text-3xl sm:tw-text-4xl md:tw-text-5xl">Kurikulum</span> 
                </div>
            </div>
            <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-mt-12">
                <div className="tw-grid tw-grid-cols-2 tw-gap-y-8 sm:tw-gap-12 md:tw-gap-20 tw-place-items-center tw-max-w-md tw-w-full tw-px-6">
                    <img className="tw-w-32 sm:tw-w-36 md:tw-w-48" src={kurikulum1} />
                    <img className="tw-w-32 sm:tw-w-36 md:tw-w-48" src={kurikulum2} />
                    <img className="tw-w-32 sm:tw-w-36 md:tw-w-48" src={kurikulum3} />
                    <img className="tw-w-32 sm:tw-w-36 md:tw-w-48" src={kurikulum4} />
                </div>
            </div>
        </div>
    )
}
