import React from 'react'
import { useHistory } from 'react-router'

import { useData } from '../../../providers/DisabilityDataProvider'
import { useAuth } from '../../../providers/AuthProvider'

import Header from '../../../components/HeaderLanding'
import ornament1 from '../../../assets/ornaments/1.png'
import ornament2 from '../../../assets/ornaments/2.png'

export default function Inbox() {

    const history = useHistory()

    const { axios } = useAuth()
    const { data, setData } = useData()

    const [inboxes, setInboxes] = React.useState([])
    const [isBukaInbox, setBukaInbox] = React.useState(false)
    const [isLoading, setLoading] = React.useState(true)
    const [selectedInbox, setSelectedInbox] = React.useState(null)

    React.useEffect(function(){
        requestInboxData()
    },[])

    const requestInboxData = function(){

        axios({
            url: '/inbox/getInboxes',
            method: 'get',
        })
        .then(response => {
            setInboxes(response.data) //todo ganti data dari server
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
        })
        .finally(function(){
            setLoading(false)
        });
    }

    const handleBukaInbox = function(inbox){
        setBukaInbox(true)
        setSelectedInbox(inbox)
    }

    const handleModalButtonClick = function(){
        if (selectedInbox?.type === 'future'){
            setBukaInbox(false)
        } else {
            setData({
                konsultasiChat: selectedInbox
            })
            history.push('/chat')
        }
    }

    const handleCloseModal = function(){
        setBukaInbox(false)
    }

    return (
        <div className="tw-relative tw-w-screen tw-min-h-screen tw-flex tw-justify-center tw-top-1">
            <Header />
            <img className="tw-w-full tw-h-full tw-transform tw-absolute lg:tw-bottom-16" src={ornament1} style={{WebkitTransform: "scaleY(-1)", transform: "scaleY(-1)", zIndex: -1}} />
            <img className="tw-absolute tw-bottom-0 tw-left-0 md:tw-max-w-2xl" src={ornament2} style={{zIndex: -1}} />
            <div className="tw-w-screen tw-flex-auto tw-p-4 tw-mt-24 tw-flex tw-justify-center">
                <div className="tw-w-full tw-flex tw-flex-col tw-gap-4 tw-bg-white tw-rounded-3xl tw-p-4 tw-max-w-screen-sm tw-flex-auto tw-overflow-y-auto" style={{boxShadow: '0px 0px 24px 1px rgba(0, 0, 0, 0.25)'}}>
                    <div className="tw-flex tw-gap-3 tw-items-center tw-justify-center">
                        <i className="bi bi-mailbox tw-text-4xl"></i>
                        <span className="tw-font-semibold tw-text-4xl">Inbox</span>
                    </div>
                    <div className="tw-bg-gray-100 tw-rounded-2xl tw-py-2 tw-px-3 md:tw-px-5 tw-flex tw-flex-col tw-items-center">
                        {
                           isLoading ? <p>Loading...</p>
                           : inboxes.length === 0 ? <p>Tidak ada inbox</p>
                           : inboxes.map(function(inbox, i){

                                return <div key={i} onClick={() => handleBukaInbox(inbox)} className="tw-flex tw-gap-4 md:tw-gap-8 tw-py-2 tw-items-center tw-border-b-2 tw-border-gray-300 tw-w-full">
                                    <i className={`bi ${inbox.type === 'ongoing'? 'bi-bell-fill tw-text-green-500' : inbox.type === 'future' ? 'bi-info-circle-fill tw-text-blue-500' : 'bi-clock-history tw-text-gray-600'} tw-text-3xl`}></i>
                                    <div className="tw-flex tw-flex-col tw-flex-grow tw-gap-2">
                                        <span className="tw-font-semibold tw-text-xl">{inbox.title}</span>
                                        <div className="tw-flex tw-flex-col tw-text-gray-700 tw-text-left">
                                            <span className="tw-text-lg">{inbox.tanggal}&nbsp;;&nbsp;{inbox.waktu}</span>
                                            <span className="tw-text-lg">{inbox.terapis}</span>
                                        </div>
                                    </div>
                                    {/* todo tanyakan jadi apa nggak
                                    <i className="bi bi-trash tw-text-3xl"></i> */} 
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Modal Notifikasi */}
            <div className={`tw-fixed tw-w-screen tw-h-screen tw-top-0 tw-bg-black tw-bg-opacity-75 ${isBukaInbox ? 'tw-flex' : 'tw-hidden'} tw-items-center tw-justify-center tw-p-8 md:tw-p-16`} style={{zIndex: 900}}>
                <div className="tw-bg-white tw-rounded-2xl tw-max-w-screen-lg tw-w-full tw-p-4 tw-flex tw-flex-col">
                    <div className="tw-relative tw-flex tw-justify-end">
                        <i onClick={handleCloseModal} className="bi bi-x-lg tw-text-lg md:tw-text-2xl tw absolute tw-top-0 tw-right-0" />
                    </div>
                    <span className="tw-font-semibold tw-text-3xl tw-text-center">Konsultasi</span>
                    <span className="tw-font-medium tw-text-md  tw-text-center tw-mt-4">{selectedInbox?.type === 'konfirmasi' ? 'Selamat, jadwal Anda telah disetujui oleh terapis.' : null}</span>
                    <table className="tw-text-left tw-mt-8">
                        <tbody>
                            <tr>
                                <th className="tw-w-1/5">Pasien</th>
                                <th className="tw-px-2">:</th>
                                <td>{selectedInbox?.content.pasien}</td>
                            </tr>
                            <tr>
                                <th className="tw-w-1/5">Ragam</th>
                                <th className="tw-px-2">:</th>
                                <td>{selectedInbox?.content.ragam}</td>
                            </tr>
                            <tr>
                                <th className="tw-w-1/5">Terapis</th>
                                <th className="tw-px-2">:</th>
                                <td>{selectedInbox?.terapis}</td>
                            </tr>
                            <tr>
                                <th className="tw-w-1/5">Waktu Konsultasi</th>
                                <th className="tw-px-2">:</th>
                                <td className="tw-flex tw-flex-col md:tw-flex-row tw-gap-1"> 
                                    <span>{selectedInbox?.tanggal}&nbsp;;</span>
                                    <span>{selectedInbox?.waktu}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="tw-flex tw-justify-center tw-mt-8">
                        <button onClick={handleModalButtonClick} disabled={selectedInbox?.type === "future"} className={`tw-py-1 tw-px-8 tw-text-white tw-font-semibold tw-rounded-xl focus:tw-outline-none ${selectedInbox?.type === "future" && 'tw-filter tw-grayscale tw-cursor-not-allowed'}`} style={{background: 'linear-gradient(90deg, #256e48 0%, #49ae11 100%)'}}>{selectedInbox?.type === 'konfirmasi' ? 'Tutup' : 'Chat'}</button>
                    </div>
                </div>
            </div>

            {/* Modal Konfirmasi */}
            
        </div>
    )
}
