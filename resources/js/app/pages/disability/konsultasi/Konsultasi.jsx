import React from 'react'

import faker from 'faker'

// import { useSnackbar } from 'notistack'

import { useAuth } from '../../../providers/AuthProvider'
import { useData } from '../../../providers/DisabilityDataProvider'
import { useHistory } from 'react-router'

import {
    InputAdornment,
    TextField,
} from '@material-ui/core'

import {
    Search as SearchIcon
} from '@material-ui/icons'

import HeaderLanding from '../../../components/HeaderLanding'
import TerapistCard from '../../../components/TerapistCard'
import ornament2 from '../../../assets/ornaments/2.png'

export default function Konsultasi() {

    const history = useHistory()
    const { data, setData } = useData()
    // const { enqueueSnackbar } = useSnackbar()
    const {axios} = useAuth()
    const [terapists, setTerapists] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [filteredTerapists, setFilteredTerapists] = React.useState([])
    
    React.useEffect(() => {
        requestTerapists()
    }, [])

    React.useEffect(() => {
        setFilteredTerapists(search.length === 0 ? terapists : terapists.filter(terapist => {
            return terapist.name.indexOf(search) !== -1 
                || terapist.email.indexOf(search) !== -1 
                || terapist.speciality.indexOf(search) !== -1 
        })) 
    }, [terapists, search])

    const requestTerapists = () => {

        axios({
            method: 'post',
            url: '/konsultasi/getTerapists',
        })
        .then(result => { //handle success response
            faker.locale = 'id_ID'

            let data = result.data;
            setTerapists(data.map((terapist) => ({
                id: terapist.id,
                avatar: terapist.avatar,
                name: terapist.name,
                email: terapist.email,
                phone: terapist.phone,
                rating: terapist.rating,
                job: terapist.education,
                year: terapist.year,
                speciality: terapist.speciality,
            })))
        })
        .catch(error =>{ //handle error response
            let errorMessage = error.pesan ? error.pesan : "Terjadi kesalahan pada pengaturan request ini. Silakan hubungi Admin.";
            if (error.request){
                //Request was made but no response was received
            } else if (error.response){
                //Error caused from the server
                console.log(error.response) //todo remove log
                let errorCode = error.response.status
                switch(errorCode){
                    case 400: /*bad request*/ break; 
                    case 401: /*Unauthorized*/ break;
                    case 403: /*Forbidden*/ break;
                    case 404: /*not found*/ break; 
                    case 405: /*method not allowed*/ break; 
                    case 408: /*Request timed out*/ break;
                    case 409: /*Conflict*/ break;
                    case 419: /*Page expired, CSRF token missing*/ break;
                    case 422: /*Validation failed*/ break;
                    case 429: /*Too Many Request */ break;
                    case (Math.floor(errorCode/100) === 5): //server error
                        errorMessage=`Ups. Terjadi error di dalam server. silakan coba lagi nanti (${errorCode})`;
                        break; 
                    default: /* Other errors */
                        errorMessage=`Ups. terjadi error (${errorCode})`;
                }
            } else {
                //Something happened in setting up the request that triggered an Error
            }
            //you can show error notification here
            // if (errorMessage) enqueueSnackbar(errorMessage,{variant:"error"});
        });
        // setTerapists(list)
    }

    const handlePilihTerapis = function(terapistId){
        setData({
            konsultasiTerapistId: terapistId
        })
        history.push('/konsultasi/pilih-tanggal')
    }

    const handleSearchChange = (str) => {
        setSearch(str)
    }

    return (
        <div className="tw-relative tw-flex tw-flex-col tw-w-full tw-min-h-screen">
            <HeaderLanding />
            <main className="tw-flex tw-flex-col tw-w-full tw-px-8 tw-mt-16 tw-pt-8 tw-pb-12">
                {/* title */}
                <div className="tw-flex tw-flex-col tw-gap-6 lg:tw-gap-12 tw-items-center lg:tw-ml-16">
                    <div className="tw-flex tw-flex-col tw-items-center">
                        <h1 className="tw-text-primary tw-font-bold tw-text-5xl">Fitur</h1>
                        <h1 className="tw-text-primary tw-font-bold tw-text-4xl">Konsultasi</h1>
                    </div>
                    <span className="tw-w-72 tw-font-light tw-text-center">Temui terapis favoritmu dan agendakan konsultasi dengannya</span>
                </div>

                <div>
                    <TextField 
                        fullWidth
                        placeholder="Cari"
                        type="search"
                        autoComplete="off"
                        onChange={(e) => handleSearchChange(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }}
                    />
                </div>

                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-w-full tw-place-items-center tw-gap-12 tw-mt-8 tw-text-sm lg:tw-px-12">
                    {
                        filteredTerapists.map(terapist => <TerapistCard
                            onClick={() => handlePilihTerapis(terapist.id)} 
                            key={terapist.id} 
                            avatar={terapist.avatar} 
                            name={terapist.name}
                            email={terapist.email} 
                            phone={terapist.phone} 
                            rating={terapist.rating} 
                            job={terapist.job} 
                            year={terapist.year} 
                            speciality={terapist.speciality} />)
                    }
                </div>
            </main>
            {/* ornaments */}
            <img className="tw-absolute tw-bottom-0 tw-left-0 md:tw-max-w-2xl" src={ornament2} style={{zIndex: -1}} />
        </div>
    )
}
