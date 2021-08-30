import React from 'react'

import Header from '../../../components/HeaderLanding'
import ornament2 from '../../../assets/ornaments/2.png'
// import ornamentbg from '../../../assets/ornaments/bg.png'
import kurikulum1 from '../../../assets/images/intermediet.png'
import kurikulum2 from '../../../assets/images/pra_intermediet.png'
import kurikulum3 from '../../../assets/images/pre_advanced.png'
import kurikulum4 from '../../../assets/images/non_advanced.png'
import bunder from '../../../assets/images/bunder.png'

import { useData } from '../../../providers/DisabilityDataProvider'
import { useAuth } from '../../../providers/AuthProvider'

import { useHistory } from 'react-router-dom'
import { isNull } from 'lodash'

// const listKurikulum = [
//     {
//         title: 'Intermediet',
//         tingkatan: [
//             {
//                 title: 'Tingkatan 1',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 2',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 3',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 4',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//         ]
//     },
//     {
//         title: 'Pra Intermediet',
//         tingkatan: [
//             {
//                 title: 'Tingkatan 1',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 2',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 3',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 4',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//         ]
//     },
//     {
//         title: 'Pre Advanced',
//         tingkatan: [
//             {
//                 title: 'Tingkatan 1',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 2',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 3',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 4',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//         ]
//     },
//     {
//         title: 'Non Advanced',
//         tingkatan: [
//             {
//                 title: 'Tingkatan 1',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 2',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 3',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//             {
//                 title: 'Tingkatan 4',
//                 aspek: [{
//                     id: 'sdjsdjs',
//                     name: 'bantu',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'notyet',
//                 },{
//                     id: 'sahdkjas',
//                     name: 'bantu lagi',
//                     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//                     videoUrl: 'sjahasd',
//                 }],
//             },
//         ]
//     },   
// ]   

const MODAL_TYPES = {
    LEVEL: 0,
    TINGKATAN: 1,
}

export default function Kurikulum() {

    const history = useHistory()
    const { data, setData } = useData()
    const { axios } = useAuth()

    const [levels, setLevels] = React.useState([])
    const [levelYangDipilih, setLevelYangDipilih] = React.useState(null)
    const [tingkatanYangDipilih, setTingkatanYangDipilih] = React.useState(null)
    const [aspekYangDipilih, setAspekYangDipilih] = React.useState(null)
    const [isModalShow, setModalShow] = React.useState(false)
    const [modalType, setModalType] = React.useState(MODAL_TYPES.LEVEL)

    React.useEffect(() => {
        axios({
            method: 'post',
            url: '/kurikulum/getData',
        })
        .then((response) => {
            console.log(response.data) //todo remove log
            setLevels(response.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])

    const handleClickLevel = function(level){

        const findLevel = (name) => levels.find(level => level.title === name)

        if (level === 'Intermediet') setLevelYangDipilih(findLevel('Intermediate'))
        else if (level === 'Pra Intermediet') setLevelYangDipilih(findLevel('Pra Intermediet'))
        else if (level === 'Pre Advanced') setLevelYangDipilih(findLevel('Pre Advanced'))
        else if (level === 'Non Advanced') setLevelYangDipilih(findLevel('Non Advanced'))
        else return;

        setModalType(MODAL_TYPES.LEVEL)
        setModalShow(true)
    }

    const renderModalLevel = () => {

        const handleClickTingkatan = function(tingkatan){
            setTingkatanYangDipilih(tingkatan)        
            setModalType(MODAL_TYPES.TINGKATAN)
        }

        const handleBack = function(){
            setModalShow(false)
        }

        return (
            <div className="tw-bg-white tw-rounded-2xl tw-max-w-screen-md tw-w-full tw-p-4 tw-flex tw-flex-col tw-gap-5  tw-text-center">
                <div className="tw-relative tw-flex tw-justify-end">
                    <i onClick={handleBack} className="bi bi-x-lg tw-text-lg md:tw-text-2xl tw-absolute tw-top-0 tw-right-0"></i>
                </div>
                <span className="tw-font-semibold tw-text-primary tw-text-3xl">{levelYangDipilih?.title}</span>
                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className="tw-grid tw-grid-cols-2 tw-gap-8 tw-max-w-sm tw-w-full">
                        {
                            levelYangDipilih?.tingkatan.length > 0 ?
                            levelYangDipilih?.tingkatan.map(function(tingkatan, i){
                                return <div key={i} onClick={() => handleClickTingkatan(tingkatan)} className="tw-px-2 tw-py-3 tw-rounded-xl tw-text-white tw-font-medium tw-shadow-sm" style={{background: 'linear-gradient(135deg, #256e48 75%, #49ae11 100%)'}}>{tingkatan.title}</div>
                            })
                            : <span>Tidak ada data</span>
                        }
                    </div>
                </div>
            </div>
        )
    }

    const renderModalTingkatan = () => {

        const handleBack = function(){
            setModalType(MODAL_TYPES.LEVEL)
        }

        const handlePilihAspek = function(aspek){
            setData({
                tingkatanKurikulum: tingkatanYangDipilih.title,
                aspekKurikulum: aspek,
            })
            history.push('kurikulum/aspek')
        }

        return (
            <div className="tw-bg-white tw-rounded-2xl tw-max-w-screen-md tw-w-full tw-p-4 tw-flex tw-flex-col tw-gap-5  tw-text-center">
                <div className="tw-relative tw-flex tw-justify-end">
                    <i onClick={handleBack} className="bi bi-arrow-left tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-absolute tw-top-0 tw-left-0"></i>
                </div>
                <span className="tw-font-semibold tw-text-primary tw-text-3xl md:tw-text-4xl">{tingkatanYangDipilih?.title}</span>
                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className="tw-grid tw-grid-cols-2 tw-gap-10 tw-max-w-sm tw-place-items-center">
                        {
                            tingkatanYangDipilih?.aspek.length > 0 ?
                            tingkatanYangDipilih?.aspek.map(function(aspek, j){ //todo edit bentuk tombol jadi bunder

                                const sudut = Math.floor(Math.random()*360)

                                return <div key={j} onClick={() => handlePilihAspek(aspek)} className="tw-relative tw-shadow-sm">
                                    <img src={bunder} className="tw-transform" style={{WebkitTransform: `rotate(${sudut}deg)`, transform: `rotate(${sudut}deg)`}} />
                                    <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-top-0">
                                        <span className="tw-text-white tw-font-medium sm:tw-text-lg md:tw-text-2xl">{aspek.name}</span>
                                    </div>
                                </div>
                            })
                            : <span>Tidak ada data</span>
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="tw-relative tw-w-screen tw-min-h-screen">
            <Header />
            {/* todo ganti jadi 1 bunderan aja */}
            <img className="tw-absolute tw-bottom-0 tw-right-0 sm:tw-max-w-lg tw-invisible md:tw-visible" src={ornament2} style={{WebkitTransform: "scaleX(-1)", trasform: "scaleX(-1)", zIndex: -1}} />
            <div className="tw-pt-16 tw-w-screen tw-px-8">
                <div className="tw-flex tw-flex-col tw-gap-2 tw-bg-white tw-rounded-xl tw-px-2 tw-py-4">
                    <span className="tw-font-semibold tw-text-3xl lg:tw-text-5xl tw-text-primary">Fitur Kurikulum</span>
                    <span className="text-lg md:tw-text-xl lg:tw-text-2xl">Pada fitur berikut, anda dapat memilih dan menyimak tutorial pelaksanaan terapi.</span>
                </div>
            </div>
            <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-mt-8">
                <div className="tw-grid tw-grid-cols-2 tw-gap-y-6 sm:tw-gap-12 md:tw-gap-16 tw-place-items-center tw-max-w-md tw-w-full tw-px-6">
                    <img onClick={() => handleClickLevel('Intermediet')} className="tw-w-32 sm:tw-w-36 md:tw-w-48" src={kurikulum1} />
                    <img onClick={() => handleClickLevel('Pra Intermediet')} className="tw-w-32 sm:tw-w-36 md:tw-w-48" src={kurikulum2} />
                    <img onClick={() => handleClickLevel('Pre Advanced')} className="tw-w-32 sm:tw-w-36 md:tw-w-48" src={kurikulum3} />
                    <img onClick={() => handleClickLevel('Non Advanced')} className="tw-w-32 sm:tw-w-36 md:tw-w-48" src={kurikulum4} />
                </div>
            </div> 

            <div className={`tw-fixed tw-w-screen tw-h-screen tw-top-0 tw-bg-black tw-bg-opacity-75 ${isModalShow ? 'tw-flex' : 'tw-hidden'} tw-items-center tw-justify-center tw-p-8 md:tw-p-16`} style={{zIndex: 900}}>
                {
                    modalType === MODAL_TYPES.LEVEL ? renderModalLevel() : renderModalTingkatan()
                }
            </div>
        </div>
    )
}
