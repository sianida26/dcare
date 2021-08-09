import React from 'react'

import HeaderLanding from '../../components/HeaderLanding'
import { useAuth } from '../../providers/AuthProvider'

const FORMS = [
    {
        label: 'Nama Lengkap',
        name: 'fullname',
    },
    {
        label: 'Tempat/Tanggal Lahir',
        name: 'birthdate',
    },
    {
        label: 'No. Telepon',
        name: 'phone',
    },
    {
        label: 'E-mail',
        name: 'email',
        type: 'email',
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
        autocomplete: 'new-password'
    },
    {
        label: 'Alamat Lengkap',
        name: 'address',
    },
    {
        label: 'Pendidikan Terakhir',
        name: 'education',
    },
    {
        label: 'Menjadi terapis sejak',
        name: 'terapist_since',
        type: 'number',
    },
    {
        label: 'Kode Referral',
        name: 'referral',
    }
]

const DEFAULT_FORM = {
    fullname: '',
    birthdate: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    education: '',
    terapist_since: '',
    referral: '',
}

export default function RegisterTerapist() {

    const [formData, setFormData] = React.useState(DEFAULT_FORM)

    const {axios} = useAuth()

    const handleFormChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: '/register-terapis',
            data: formData,
        })
        .then(result => { //handle success response
            let data = result.data;
            console.log(data) //todo remove log
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
    }

    return (
        <div className="tw-relative tw-flex tw-flex-col tw-w-full">
            <HeaderLanding />
            <div className="tw-flex tw-relative tw-flex-col tw-px-8 tw-mt-24 tw-w-full tw-pb-8">
                <h1 className="tw-text-4xl tw-text-primary tw-font-bold">Registrasi Terapis</h1>
                <form className="tw-flex tw-flex-col tw-gap-2 tw-mt-4" onSubmit={handleSubmit}>
                    {
                        FORMS.map((form,i) => (<div key={i}>
                            <p className="tw-font-semibold">{form.label}</p>
                            <input 
                                autoComplete={form.autocomplete}
                                className="tw-py-1 tw-px-2 tw-rounded-md tw-border tw-border-gray-500 tw-w-1/2" 
                                onChange={(e) => handleFormChange(form.name, e.target.value)} 
                                type={form.type || 'text'} 
                                value={formData[form.name]}
                            />
                        </div>))
                    }
                    <div className="tw-grid tw-place-items-center tw-mt-4">
                        <button className="tw-py-3 tw-px-4 tw-bg-primary tw-font-semibold tw-text-white tw-shadow-md tw-rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
