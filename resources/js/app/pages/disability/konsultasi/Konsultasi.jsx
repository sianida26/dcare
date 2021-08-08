import React from 'react'

import faker from 'faker'

import HeaderLanding from '../../../components/HeaderLanding'
import TerapistCard from '../../../components/TerapistCard'
import ornament2 from '../../../assets/ornaments/2.png'


const specialities = [
    'Terapis Disabilitas Intelektual',
    'Fisioterapis',
]

export default function Konsultasi() {

    const [terapists, setTerapists] = React.useState([])
    
    React.useEffect(() => {
        faker.locale = 'id_ID'
        let list = []
        let length = 12
        // faker.seed(length)
        for (let i = 0; i < length; i++){
            list.push({
                avatar: faker.image.avatar(),
                name: faker.name.findName(),
                email: faker.internet.email().toLowerCase(),
                phone: faker.phone.phoneNumber(),
                rating: Math.floor(Math.random()*6),
                job: faker.name.jobTitle(),
                year: Math.floor(Math.random()*100 + 1921),
                speciality: specialities[Math.floor(Math.random()*specialities.length)]
            })
        }
        setTerapists(list)
    }, [])

    return (
        <div className="tw-relative tw-flex tw-flex-col tw-w-full">
            <HeaderLanding />
            <main className="tw-flex tw-flex-col tw-w-full tw-px-8 tw-mt-16 tw-pt-8 tw-pb-12">
                {/* title */}
                <div className="tw-flex tw-gap-12 tw-items-center tw-ml-16">
                    <div className="tw-flex tw-flex-col">
                        <h1 className="tw-text-primary tw-font-bold tw-text-5xl">Fitur</h1>
                        <h1 className="tw-text-primary tw-font-bold tw-text-4xl">Konsultasi</h1>
                    </div>
                    <span className="tw-w-72 tw-font-light">Temui terapis favoritmu dan agendakan konsultasi dengannya</span>
                </div>

                <div className="tw-grid tw-grid-cols-3 tw-w-full tw-place-items-center tw-gap-12 tw-mt-8 tw-px-12">
                    {
                        terapists.map((terapist, i) => <TerapistCard key={i} avatar={terapist.avatar} name={terapist.name} email={terapist.email} phone={terapist.phone} rating={terapist.rating} job={terapist.job} year={terapist.year} speciality={terapist.speciality} />)
                    }
                </div>
            </main>
            {/* ornaments */}
            <img className="tw-absolute tw-bottom-0 tw-left-0 md:tw-max-w-2xl" src={ornament2} style={{zIndex: -1}} />
        </div>
    )
}
