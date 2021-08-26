import React from 'react'
import DatePicker from 'react-datepicker'
import format from 'date-fns/format'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../../providers/AuthProvider'
import ornament1 from '../../../assets/ornaments/1.png'
import ornament2 from '../../../assets/ornaments/2.png'

import { useData } from '../../../providers/DisabilityDataProvider'
import db from '../../../utils/DB'

const DISABILITY_TYPES = [
    {value: "fisik", caption: "Disabilitas Fisik"},
    {value: "mental", caption: "Disabilitas Mental"},
    {value: "rungu", caption: "Disabilitas Rungu"},
    {value: "netra", caption: "Disabilitas Netra"}
]

export default function Form() {

    const history = useHistory()

    const { axios, auth } = useAuth()
    const { data, setData} = useData()
    
    const [isLoading, setLoading] = React.useState(false)
    const [assistantAddress, setAssistantAddress] = React.useState('')
    const [formErrors, setFormErrors] = React.useState({})
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    const [birthplace, setBirthplace] = React.useState('')
    const [disabilityAddress, setDisabilityAddress] = React.useState('')
    const [disabilityType, setDisabilityType] = React.useState(DISABILITY_TYPES[0].value)
    const [assistantName, setAssistantName] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        axios({
            url: '/submitDisabilityForm', 
            method: 'post', 
            data: { 
                birthplace,
                birthdate: format(selectedDate, 'dd/MM/yyyy'),
                disabilityAddress,
                disabilityType,
                assistantName,
                phone,
                assistantAddress,
            }
        })
        .then(result => { //handle success response
            console.log(result.data) //todo remove log
            setFormErrors({}) //reset error messages
            db.disability.put({key: 'showModalForm', value: false})
            setData({
                disabilityForm: {
                    ...data.disabilityForm,
                    openForm: false
                }
            })
            history.replace('/')
        })
        .catch(error =>{ //handle error response
            console.log('error') //todo remove log
            let errorMessage = error.pesan ? error.pesan : "Terjadi kesalahan pada pengaturan request ini. Silakan hubungi Admin.";
            if (error.request){
                //Request was made but no response was received
            }
            if (error.response){
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
                    case 422: 
                            setFormErrors(error.response.data.errors)
                        break;
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
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const isError = (field) => {
        return !!formErrors[field]
    }

    return (
        <div className="tw-relative tw-grid tw-place-items-center tw-py-8 tw-px-2 tw-h-screen" style={{zIndex: 900}}>
            <img className="tw-w-full tw-h-full tw-transform tw-absolute" src={ornament1} style={{zIndex:-1}}/>
            <img className="tw-absolute tw-bottom-0 tw-left-0 tw-max-w-1/4" src={ornament2} style={{zIndex:-1}} />
            <form 
                onSubmit={handleSubmit}
                className="tw-border tw-shadow-xl tw-max-w-screen-sm tw-w-full tw-bg-white tw-rounded-xl tw-p-4 tw-flex tw-flex-col tw-gap-2 tw-max-h-full tw-overflow-y-auto">
                {/* title */}
                <h1 className="tw-text-center tw-text-xl tw-font-semibold">Kelengkapan Data</h1>

                <div className="tw-bg-blue-100 tw-rounded-lg tw-text-blue-900 tw-my-2 tw-py-2 tw-px-3 tw-text-sm tw-relative">
                    <div className="tw-absolute tw-left-0 tw-top-0 tw-bg-blue-900 tw-w-1 tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg"></div>
                    <p className="tw-leading-tight tw-font-medium">Mohon isi kelengkapan data terlebih dahulu sebelum melanjutkan</p>
                </div>

                <div className="tw-w-full tw-border-t tw-border-gray-500 tw-relative tw-grid tw-place-items-center tw-h-0 tw-my-4">
                    <span className="tw-absolute tw-bg-white tw-px-2 tw-text-sm">Data Diri Penyandang Disabilitas</span>
                </div>

                <div className="tw-grid tw-grid-cols-12 tw-gap-y-2 tw-justify-items-start tw-items-center tw-w-full">
                    <div className="tw-col-span-4">Nama</div>
                    <div>:</div>
                    <div className="tw-col-span-7 tw-font-semibold">{auth.name}</div>

                    <div className="tw-col-span-4">E-mail</div>
                    <div>:</div>
                    <div className="tw-col-span-7 tw-font-semibold tw-break-all tw-w-full">{auth.email}</div>

                    <div className="tw-col-span-4">Tempat Lahir</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input
                            value={birthplace}
                            disabled={isLoading}
                            onChange={(e) => setBirthplace(e.target.value)}
                            className={`disabled:tw-bg-gray-200 tw-w-full tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 ${isError('birthplace') ? 'tw-border-red-500 focus:tw-ring-red-500' : 'focus:tw-ring-green-500 tw-border-gray-500'}`} />
                        <p className="tw-text-red-500 tw-font-semibold">{formErrors.birthplace}</p>
                    </div>

                    <div className="tw-col-span-4">Tanggal lahir</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <DatePicker 
                            className={`disabled:tw-bg-gray-200 tw-w-full tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 ${isError('birthdate') ? 'tw-border-red-500 focus:tw-ring-red-500' : 'focus:tw-ring-green-500 tw-border-gray-500'}` }
                            dateFormat="dd/MM/yyyy"
                            disabled={isLoading}
                            onChange={(date) => setSelectedDate(date)} 
                            selected={selectedDate} 
                        />
                        <p className="tw-text-red-500 tw-font-semibold">{formErrors.birthdate}</p>
                    </div>

                    <div className="tw-col-span-4">Alamat Lengkap</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input 
                            value={disabilityAddress}
                            disabled={isLoading}
                            onChange={(e) => setDisabilityAddress(e.target.value)}
                            className={`disabled:tw-bg-gray-200 tw-w-full tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 ${isError('disabilityAddress') ? 'tw-border-red-500 focus:tw-ring-red-500' : 'focus:tw-ring-green-500 tw-border-gray-500'}`} />
                        <p className="tw-text-red-500 tw-font-semibold">{formErrors.disabilityAddress}</p>
                    </div>

                    <div className="tw-col-span-4">Ragam Disabilitas</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <select
                            value={disabilityType}
                            disabled={isLoading}
                            onChange={(e) => setDisabilityType(e.target.value)}
                            className={`disabled:tw-bg-gray-200 tw-w-full tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 tw-bg-white ${isError('disabilityType') ? 'tw-border-red-500 focus:tw-ring-red-500' : 'focus:tw-ring-green-500 tw-border-gray-500'}`}>
                            {
                                DISABILITY_TYPES.map((type,i) => <option value={type.value} key={i}>{type.caption}</option>)
                            }
                        </select>
                        <p className="tw-text-red-500 tw-font-semibold">{formErrors.disabilityType}</p>
                    </div>
                </div>


                <div className="tw-w-full tw-border-t tw-border-gray-500 tw-relative tw-grid tw-place-items-center tw-h-0 tw-my-4">
                    <span className="tw-absolute tw-bg-white tw-px-2 tw-text-sm">Data Diri Pendamping</span>
                </div>

                <div className="tw-grid tw-grid-cols-12 tw-gap-y-2 tw-justify-items-start tw-items-center">
                    <div className="tw-col-span-4">Nama Lengkap</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input
                            value={assistantName}
                            disabled={isLoading}
                            onChange={(e) => setAssistantName(e.target.value)}
                            className={`disabled:tw-bg-gray-200 tw-w-full tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 ${isError('assistantName') ? 'tw-border-red-500 focus:tw-ring-red-500' : 'focus:tw-ring-green-500 tw-border-gray-500'}`} />
                        <p className="tw-text-red-500 tw-font-semibold">{formErrors.assistantName}</p>
                    </div>

                    <div className="tw-col-span-4">No Telepon</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input
                            value={phone}
                            disabled={isLoading}
                            onChange={(e) => setPhone(e.target.value)} 
                            className={`disabled:tw-bg-gray-200 tw-w-full tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 ${isError('phone') ? 'tw-border-red-500 focus:tw-ring-red-500' : 'focus:tw-ring-green-500 tw-border-gray-500'}`} />
                        <p className="tw-text-red-500 tw-font-semibold">{formErrors.phone}</p>
                    </div>

                    <div className="tw-col-span-4">Alamat Lengkap</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input
                            value={assistantAddress}
                            disabled={isLoading}
                            onChange={(e) => setAssistantAddress(e.target.value)}
                            className={`disabled:tw-bg-gray-200 tw-w-full tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 ${isError('assistantAddress') ? 'tw-border-red-500 focus:tw-ring-red-500' : 'focus:tw-ring-green-500 tw-border-gray-500'}`} />
                        <p className="tw-text-red-500 tw-font-semibold">{formErrors.assistantAddress}</p>
                    </div>
                </div>

                <div className="tw-flex tw-justify-center">
                    <button 
                        type="submit" 
                        disabled={isLoading} 
                        className={`tw-flex tw-items-center tw-gap-3 tw-py-3 tw-px-4 tw-bg-primary ${isLoading && 'tw-bg-opacity-70'} tw-text-white tw-font-semibold tw-rounded-lg`}
                    >
                        {isLoading && <svg class="tw-animate-spin tw-h-5 tw-w-5 tw-text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="tw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>}
                        Simpan
                    </button>
                </div>

            </form>
        </div>
    )
}
