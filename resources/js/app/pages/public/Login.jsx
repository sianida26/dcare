import React, {useState} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import axios from 'axios'
import { useHistory } from 'react-router'

import {useAuth} from '../../providers/AuthProvider'
import db from '../../utils/DB'

import Header from '../../components/HeaderLanding'
import ornament1 from '../../assets/ornaments/1.png'
import ornament2 from '../../assets/ornaments/2.png'

export default function Login() {

    const {auth, setAuthState} = useAuth()

    const history = useHistory()

    const [isLogin, setLogin] = useState(true)
    const [formRegister, setFormRegister] = useState({
        fullname: '',
        email: '',
        password: '',
    })

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    })

    const [registerErrors, setRegisterErrors] = useState({
        fullname: '',
        email: '',
        password: '',
        role: '',
    })

    const [loginError, setLoginError] = useState('');

    const handleFormRegisterChange = (name, value) => {
        setFormRegister(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleFormLoginChange = (name, value) => {
        setFormLogin(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'api/register',
            data: formRegister,
        })
        .then(response => {
            console.log(response)
            setRegisterErrors({})
            history.replace('/dashboard')
        })
        .catch(err => {
            console.log(err.response)
            if (err.response?.status === 422) {
                setRegisterErrors(err.response.data.errors)
            }
        })
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'api/login',
            data: formLogin,
        })
        .then(response => {
            console.log(response) //todo remove console
            setLoginError('')
            let data = response.data
            setAuthState({
                name: data.name,
                role: data.role,
                username: data.username,
                token: data.token
            })
            localStorage.setItem('token',data.token)
            db.auth.put({key: 'auth_token', value: data.token})
            db.auth.put({key: 'name', value: data.name})
            db.auth.put({key: 'username', value: data.username})
            db.auth.put({key: 'role', value: data.role})
            history.replace('/dashboard')
        })
        .catch(err => {
            console.log(err)
            if (err.response?.status === 422) {
                setLoginError('Username atau password salah')
            }
        })
    }

    const renderLogin = () => {
        
        return (
            <form onSubmit={handleSubmitLogin} className="tw-flex tw-flex-col tw-gap-y-8 tw-relative">
                <span className="tw-text-red-500 tw-text-sm tw-font-semibold tw-absolute tw--top-10">{loginError}</span>
                <div className="">
                    <span className="tw-font-semibold">Email</span>
                    <input className={`tw-w-full focus:tw-outline-none tw-bg-gray-200 tw-py-1 tw-px-2 tw-rounded-lg`} type="email" value={formLogin.email} onChange={(e) => handleFormLoginChange('email', e.target.value)} />
                </div>
                <div className="">
                    <span className="tw-font-semibold">Password</span>
                    <input className={`tw-w-full focus:tw-outline-none tw-bg-gray-200 tw-py-1 tw-px-2 tw-rounded-lg`} type="password" value={formLogin.password} onChange={(e) => handleFormLoginChange('password', e.target.value)} />
                </div>

                <button className="tw-w-full tw-rounded-md tw-bg-primary tw-text-white tw-font-bold tw-py-3">Masuk</button>
            </form>
        )
    }

    const renderRegister = () => {

        return (
            <form onSubmit={handleSubmitRegister} className="tw-flex tw-flex-col tw-gap-y-8 tw-relative">
                <div className="">
                    <span className="tw-font-semibold">Nama Lengkap</span>
                    <input className={`tw-w-full focus:tw-outline-none tw-bg-gray-200 tw-py-1 tw-px-2 tw-rounded-lg ${registerErrors.fullname && 'tw-border tw-border-red-500'}`} type="" value={formRegister.fullname} onChange={(e) => handleFormRegisterChange('fullname', e.target.value)} />
                    <span className="tw-text-red-500 tw-text-sm tw-font-semibold">{registerErrors.fullname}</span>
                </div>
                <div className="">
                    <span className="tw-font-semibold">Email</span>
                    <input className={`tw-w-full focus:tw-outline-none tw-bg-gray-200 tw-py-1 tw-px-2 tw-rounded-lg ${registerErrors.email && 'tw-border tw-border-red-500'}`} type="email" value={formRegister.email} onChange={(e) => handleFormRegisterChange('email', e.target.value)} />
                    <span className="tw-text-red-500 tw-text-sm tw-font-semibold">{registerErrors.email}</span>
                </div>
                <div className="">
                    <span className="tw-font-semibold">Password</span>
                    <input className={`tw-w-full focus:tw-outline-none tw-bg-gray-200 tw-py-1 tw-px-2 tw-rounded-lg ${registerErrors.password && 'tw-border tw-border-red-500'}`} type="password" value={formRegister.password} onChange={(e) => handleFormRegisterChange('password', e.target.value)}/>
                    <span className="tw-text-red-500 tw-text-sm tw-font-semibold">{registerErrors.password}</span>
                </div>
                <button className="tw-w-full tw-rounded-md tw-bg-primary tw-text-white tw-font-bold tw-py-3" type="submit">Daftar Sekarang</button>
            </form>
        )
    }

    return (
        <div className="tw-relative tw-w-full tw-h-screen tw-flex tw-justify-center">
            <Header />
            {/* ornaments */}
            {/* <div className="absolute w-full h-full pt-8">
                <img className="w-full h-full transform absolute" src={ornament1} style={{WebkitTransform: "scaleY(-1)", transform: "scaleY(-1)"}} />
                <img className="absolute bottom-0 left-0" src={ornament2} />
            </div> */}
            <img className="tw-w-full tw-h-full tw-transform tw-absolute lg:tw-bottom-16" src={ornament1} style={{WebkitTransform: "scaleY(-1)", transform: "scaleY(-1)"}} />
            <img className="tw-absolute tw-bottom-0 tw-left-0 md:tw-max-w-2xl" src={ornament2} />
            <div className="tw-max-w-lg tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-px-8">
                <div className="tw-bg-white tw-max-h-96 tw-h-full tw-rounded-3xl tw-flex tw-flex-col tw-w-full tw-py-6 tw-px-2 tw-border-gray-600 tw-z-10"  style={{boxShadow: '0px 0px 24px 1px rgba(0, 0, 0, 0.25)'}}>
                    <PerfectScrollbar>
                        <div className="tw-px-10">
                            {/* login register */}
                            <div className="tw-flex tw-items-center tw-justify-between">
                                <span onClick={() => setLogin(false)} className={`tw-text-primary ${!isLogin ? "tw-border-b-2 tw-font-bold" : 'tw-font-semibold'} tw-border-primary`}>Mendaftar</span>
                                <span onClick={() => setLogin(true)} className={`tw-text-primary ${isLogin ? "tw-border-b-2 tw-font-bold" : 'tw-font-semibold'} tw-border-primary`}>Masuk</span>
                            </div>

                            <div className="tw-mt-16">
                                {
                                    isLogin ? renderLogin() : renderRegister()
                                }
                            </div>
                        </div>
                     </PerfectScrollbar>
                </div>
            </div>
        </div>
    )
}
