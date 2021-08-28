import React from 'react'

import ornament3 from '../assets/ornaments/3.png'
import ornament4 from '../assets/ornaments/4.png'

export default function Splash() {
    return (
        <div className="tw-w-screen tw-h-screen tw-relative tw-grid tw-place-items-center" style={{backgroundColor:'#1f6f49'}} >
            <img className="tw-absolute tw-bottom-0 tw-right-0 md:tw-max-w-2xl" src={ornament4} style={{zIndex: 1}} />
            <img className="tw-h-full tw-transform tw-absolute" src={ornament3} />
            <span className="tw-font-bold tw-text-white tw-text-    3xl sm:tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-absolute tw-items-center tw-justify-center">Memuat...</span>
        </div>
    )
}
