import React from 'react'
import { collection, setDoc, onSnapshot, doc, serverTimestamp, query as firebaseQuery, orderBy} from "firebase/firestore";
import { useHistory } from 'react-router';
import { v1 as uuidv1 } from 'uuid'

import { useAuth } from '../../../providers/AuthProvider'
import { useData } from '../../../providers/DisabilityDataProvider';
import firestoreDB from '../../../services/firebase/firestore'

export default function Chat() {

    const history = useHistory()

    const { data, setData } = useData()
    const { axios, auth } = useAuth()
    const messagesEndRef = React.useRef(null)

    const [text, setText] = React.useState('')
    const [userId, setUserId] = React.useState(-1)
    const [messages, setMessages] = React.useState([])
    const [isOnline, setOnline] = React.useState(false)
    const [inputText, setInputText] = React.useState('')
    const [roomId, setRoomId] = React.useState(null)
    const [rommRef, setRoomRef] = React.useState(null)
    const [dataKonsultasi, setDataKonsultasi] = React.useState(null)

    React.useEffect(function(){
        if (data.konsultasiChat === null || data.konsultasiChat.type === "future") {
            history.replace('/')
            return
        }
        setDataKonsultasi(data.konsultasiChat)
        requestChatId(data.konsultasiChat.id)
    }, [])

    React.useEffect(function(){
        if (roomId === null) return
        const query = firebaseQuery(collection(firestoreDB, `chatKonsultasi/${roomId}/messages`), orderBy('timestamp'))
        const unsubscribe = onSnapshot(query, (querySnapshot) => {
            const messages = []
            querySnapshot.forEach(doc => {
                messages.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            console.log(messages)
            setMessages(messages)
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        })

        return () => unsubscribe()
    }, [roomId])

    const handleSendMessage = async function(event){
        event.preventDefault()
        let msg = inputText
        if (!msg || dataKonsultasi?.type !== "ongoing") return;
        setInputText('')

        //send message to firebase server
        await setDoc(doc(firestoreDB, `chatKonsultasi/${roomId}/messages`, uuidv1()), {
            message: msg,
            timestamp: serverTimestamp(),
            role: auth.role,
        });
    }

    const initializeChatRoom = async function(id){
        //set chat room document reference
        let roomRef = doc(firestoreDB, "chatKonsultasi",id)
        setRoomRef(roomRef)
        await setDoc(roomRef, {})
    }


    const requestChatId = function(id){
        axios({
            data: {id},
            method: 'post',
            url: '/konsultasi/getChatId', 
        })
        .then(result => { //handle success response
            console.log(result) //todo remove log
            setRoomId(result.data)
            initializeChatRoom(result.data)
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
        <div className="tw-w-screen tw-p-4 tw-flex tw-flex-col tw-h-screen">
            {/* header */}
            <div className="tw-w-full tw-bg-primary tw-text-white tw-flex tw-rounded-xl tw-py-2 tw-items-center tw-gap-2 tw-mb-4">
                <div className="tw-relative">
                    <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-blue-500 tw-mx-2">{/* todo ubah jadi img */}</div>
                    {/* <div className={`tw-w-4 tw-h-4 tw-rounded-full ${isOnline ? "tw-bg-green-500" : "tw-bg-gray-300"} tw-absolute tw-right-1 tw-top-0`}></div>
                    <div className={`tw-w-4 tw-h-4 tw-rounded-full ${isOnline ? "tw-bg-green-500 tw-animate-ping" : "tw-bg-gray-300"} tw-absolute tw-right-1 tw-top-0`}></div> */}
                </div>
                <div className="tw-flex grow tw-flex-col tw-text-sm">
                    {/* <p>Ini Nama</p> */}
                    <p className="tw-font-semibold">{dataKonsultasi?.terapis}</p>
                    {/* <p className="tw-font-semibold">{isOnline ? 'Sedang aktif' : 'Sedang tidak aktif'}</p> */}
                </div>
            </div>
            {/* chat room */}
            <div className="tw-flex-auto tw-min-h-0 tw-overflow-y-auto tw-py-4 tw-flex tw-gap-4 tw-flex-col tw-px-2">
                {/* chat item */}
                {
                    messages.map(function(message){
                        const isMe = message.role === auth.role
                        return <div key={message.id} className={`tw-flex ${isMe && 'tw-justify-end'}`}>
                            <div className={`tw-bg-${isMe ? 'green' : 'gray'}-200 tw-rounded-lg tw-p-3 tw-min-w-1/4 tw-max-w-3/4 tw-align-self-end`}>
                                <p>{message.message}</p>
                                {/* <p className="tw-mt-2 tw-text-sm tw-text-right tw-text-gray-500">{format(new Date(message.timestamp), 'HH:mm')}</p> */}
                            </div>
                        </div>
                    })
                }
                <div ref={messagesEndRef} />
            </div>

            {/* input section */}
            <form className={`tw-gap-2 tw-w-full tw-flex tw-mt-4 ${dataKonsultasi?.type !== "ongoing" && 'tw-hidden'}`} onSubmit={handleSendMessage}>
                <div className="tw-flex-grow">
                    <input onChange={(e) => setInputText(e.target.value)} value={inputText} className="tw-border tw-border-gray-500 tw-rounded-lg tw-p-2 tw-w-full" />
                </div>
                <button type="submit" className="tw-px-8 tw-rounded-lg tw-bg-primary tw-text-white">
                    <i className="bi bi-caret-right-fill" />
                </button>
            </form>
        </div>
    );
}
