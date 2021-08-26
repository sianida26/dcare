import React from 'react'
import DatePicker from 'react-datepicker'
import format from 'date-fns/format'
import { useAuth } from '../../providers/AuthProvider'

const DISABILITY_TYPES = [
    {value: "fisik", caption: "Disabilitas Fisik"},
    {value: "mental", caption: "Disabilitas Mental"},
    {value: "rungu", caption: "Disabilitas Rungu"},
    {value: "netra", caption: "Disabilitas Netra"}
]

export default function DisabilityFormModal() {

    const { axios } = useAuth()

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    const [birthplace, setBirthplace] = React.useState('')
    const [disabilityAddress, setDisabilityAddress] = React.useState('')
    const [disabilityType, setDisabilityType] = React.useState(DISABILITY_TYPES[0].value)
    const [assistantName, setAssistantName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [assistantAddress, setAssistantAddress] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
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
        <div className="tw-w-screen tw-h-screen tw-top-0 tw-fixed tw-bg-black tw-bg-opacity-75 tw-p-4 tw-grid tw-place-items-center" style={{zIndex: 900}}>
            <form 
                onSubmit={handleSubmit}
                className="tw-max-w-screen-sm tw-w-full tw-bg-white tw-rounded-xl tw-p-4 tw-flex tw-flex-col tw-gap-2 tw-max-h-full tw-overflow-y-auto">
                {/* title */}
                <h1 className="tw-text-center tw-text-xl tw-font-semibold">Kelengkapan Data</h1>

                <div className="tw-bg-blue-100 tw-rounded-lg tw-text-blue-900 tw-my-2 tw-py-2 tw-px-3 tw-text-sm tw-relative">
                    <div className="tw-absolute tw-left-0 tw-top-0 tw-bg-blue-900 tw-w-1 tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg"></div>
                    <p className="tw-leading-tight tw-font-medium">Mohon isi kelengkapan data terlebih dahulu sebelum melanjutkan</p>
                </div>

                <div className="tw-w-full tw-border-t tw-border-gray-500 tw-relative tw-grid tw-place-items-center tw-h-0 tw-my-4">
                    <span className="tw-absolute tw-bg-white tw-px-2 tw-text-sm">Data Diri Penyandang Disabilitas</span>
                </div>

                <div className="tw-grid tw-grid-cols-12 tw-gap-y-2 tw-justify-items-start tw-items-center">
                    <div className="tw-col-span-4">Nama</div>
                    <div>:</div>
                    <div className="tw-col-span-7 tw-font-semibold">skhfsdkjfsd</div>

                    <div className="tw-col-span-4">E-mail</div>
                    <div>:</div>
                    <div className="tw-col-span-7 tw-font-semibold">sfdskdjf</div>

                    <div className="tw-col-span-4">Tempat Lahir</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input
                            value={birthplace}
                            onChange={(e) => setBirthplace(e.target.value)}
                            className="tw-w-full tw-border-gray-500 tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 focus:tw-ring-green-500" />
                    </div>

                    <div className="tw-col-span-4">Tanggal lahir</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <DatePicker 
                            className="tw-w-full tw-border-gray-500 tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 focus:tw-ring-green-500" 
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => setSelectedDate(date) } 
                            selected={selectedDate} 
                        />
                    </div>

                    <div className="tw-col-span-4">Alamat Lengkap</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input 
                            value={disabilityAddress}
                            onChange={(e) => setDisabilityAddress(e.target.value)}
                            className="tw-w-full tw-border-red-500 tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 focus:tw-ring-red-500" />
                        <p className="tw-text-red-500 tw-font-semibold">Harus diisi</p>
                    </div>

                    <div className="tw-col-span-4">Ragam Disabilitas</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <select
                            value={disabilityType}
                            onChange={(e) => setDisabilityType(e.target.value)}
                            className="tw-w-full tw-border-gray-500 tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 focus:tw-ring-green-500 tw-bg-white">
                            {
                                DISABILITY_TYPES.map((type,i) => <option value={type.value} key={i}>{type.caption}</option>)
                            }
                        </select>
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
                            onChange={(e) => setAssistantName(e.target.value)}
                            className="tw-w-full tw-border-gray-500 tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 focus:tw-ring-green-500" />
                    </div>

                    <div className="tw-col-span-4">No Telepon</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} 
                            className="tw-w-full tw-border-gray-500 tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 focus:tw-ring-green-500" />
                    </div>

                    <div className="tw-col-span-4">Alamat Lengkap</div>
                    <div>:</div>
                    <div className="tw-col-span-7">
                        <input
                            value={assistantAddress}
                            onChange={(e) => setAssistantAddress(e.target.value)}
                            className="tw-w-full tw-border-gray-500 tw-rounded-lg tw-border tw-py-1 tw-px-2 focus:tw-ring-1 focus:tw-ring-green-500" />
                    </div>
                </div>

                <div className="tw-flex tw-justify-end">
                    <button type="submit" className="tw-py-2 tw-px-4 tw-bg-primary tw-text-white tw-font-semibold tw-rounded-lg">
                        Simpan
                    </button>
                </div>

            </form>
        </div>
    )
}
