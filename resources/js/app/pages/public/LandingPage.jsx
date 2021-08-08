import React from 'react'
import {Animated} from 'react-animated-css'

import Header from '../../components/HeaderLanding'

import logo from '../../assets/logo/logo-white.png'
import therapy from '../../assets/images/therapy.png'
import volunteer from '../../assets/images/volunteer.png'
import event from '../../assets/images/event.jpeg'
import event1 from '../../assets/images/event1.jpeg'
import event2 from '../../assets/images/event2.jpeg'

export default function LandingPage() {
    return (
        <div className="tw-w-full">
            <Header />
            {/* section 1 */}
            <main className="">
                <section className="tw-w-full tw-h-screen tw-bg-gray-100 tw-flex tw-flex-col">
                    <div className="tw-flex tw-flex-grow tw-items-center tw-px-4 md:tw-px-16">
                        <div className="tw-text-primary tw-flex tw-flex-col tw-gap-3" style={{width: '38rem'}}>
                            <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>
                                <h1 className="tw-font-bold tw-text-4xl tw-text-center md:tw-text-left">Disability Care</h1>
                            </Animated>
                            <Animated animationIn="fadeIn" animationInDelay={1000} animationOut="fadeOutLeft" isVisible={true}>
                                <p className="tw-text-center md:tw-text-left">Platform layanan konsultasi terapi dan pembelajaran disabilitas. Konsultasi Terapi,  janji pertemuan dengan terapis, bimbingan belajar kini lebih mudah dengan D-Care!</p>
                            </Animated>
                            <div className="tw-w-full tw-flex tw-justify-center md:tw-w-auto">
                                <Animated animationIn="fadeIn" animationInDelay={1500} animationOut="fadeOutLeft" isVisible={true}>
                                    <div className="tw-flex tw-items-center tw-gap-3">
                                        <button className="tw-text-white tw-font-bold tw-rounded-md tw-py-2 tw-px-3" style={{backgroundColor: '#ff6600'}}>Mulai Perjalanan</button>
                                        <i className="bi-play-circle tw-text-4xl"></i>
                                    </div>
                                </Animated>
                            </div>
                        </div>
                    </div>
                    <div className="tw-bg-green-100 tw-w-full tw-h-40 tw-items-center tw-justify-around tw-text-primary tw-flex"> {/*flex*/}
                        {
                            [
                                {value: 64, title: 'Terapis'},
                                {value: 357, title: 'Event'},
                                {value: 20, title: 'Mitra'},
                            ].map((x,i) => (
                                <div className="tw-flex tw-flex-col" key={i}>
                                    <span className="tw-text-3xl md:tw-text-6xl tw-font-bold">
                                       {x.value}+
                                    </span>
                                    <span className="">{x.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </section> 

                {/* section 2*/}
                <section className="tw-min-h-screen tw-w-full">
                    <h1 className="tw-bg-primary tw-w-full tw-uppercase tw-text-white tw-text-center tw-font-bold tw-text-3xl tw-py-8">
                        Apa Yang Kami Tawarkan?
                    </h1>
                    <div className="tw-flex tw-flex-col tw-w-full tw-text-primary tw-mb-16">
                        {
                            [
                                {
                                    image: therapy,
                                    title: 'Terapis terdekat',
                                    description: 'Temui terapis terdekat dengan mudah menggunakan layanan D-Care.'
                                },
                                {
                                    image: volunteer,
                                    title: 'Volunteer',
                                    description: 'Anda juga bisa menjadi volunteer secara aktif dan pasif melalui berbagai layanan D-Care'
                                }
                            ].map((x,i) => (
                                <div
                                    key={i} 
                                    className="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mt-16 tw-transition-colors tw-duration-200 hover:tw-bg-gray-200 tw-py-4"
                                >
                                    <div className="tw-w-full tw-flex tw-justify-center">
                                        <img src={x.image} className="tw-h-48" />
                                    </div>
                                    <div className="tw-w-full tw-flex tw-flex-col tw-items-center md:tw-items-start">
                                        <h1 className="tw-ext-3xl tw-font-bold tw-text-center md:tw-text-left">{x.title}</h1>
                                        <p className="tw-mx-4 md:tw-ml-0 md:tw-mr-8 tw-text-justify tw-mt-2">{x.description}</p>
                                        {/* <div className="flex items-center gap-3 mt-3">
                                            <button className="text-white font-semibold rounded-md py-2 px-3" style={{backgroundColor: '#ff6600'}}>Mulai Sekarang!</button>
                                            <i className="bi-play-circle text-4xl"></i>
                                        </div> */}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* dokumentasi event */}
                <section className="tw-pl-0 md:tw-pl-8">
                    <h1 className="tw-uppercase tw-text-primary tw-text-center tw-font-bold tw-text-3xl tw-py-8">
                        Dokumentasi Event
                    </h1>
                    <div className="tw-grid tw-grid-cols-3 tw-gap-8">
                    {
                        [event, event1, event2].map((x,i) => 
                            <div className="tw-w-full tw-flex tw-items-center tw-justify-center" key={i}>
                                <img className="tw-h-12 md:tw-h-56" src={x} />
                            </div>
                        )
                    }
                    </div>
                </section>
            </main>
            <footer className="tw-w-full tw-bg-primary tw-text-white tw-mt-16">
                <div className="tw-w-full tw-flex tw-justify-around tw-py-16">
                    {
                        [1,2,3,4].map(x => <img key={x} src={logo} className="tw-h-5 md:tw-h-12" />)
                    }
                </div>
                <p className="tw-text-center tw-font-semibold tw-pb-8">contac person, email, etc</p>
            </footer>
        </div>
    )
}
