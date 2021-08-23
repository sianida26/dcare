import React, {useEffect, useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import db from './utils/DB'

import LandingPage from './pages/public/LandingPage'
import Login from './pages/public/Login'

import RouteSwitch from './components/RouteSwitch'
import Splash from './pages/Splash'

import AuthProvider, {useAuth} from './providers/AuthProvider'

export default function App() {

    const {auth, setAuthState} = useAuth()

    const [isBooting, setBooting] = useState(true)

    useEffect(() => {
        boot()
    }, [])

    const boot = async () => {
        db.auth.bulkGet(['auth_token', 'name', 'username', 'role'])
            .then(([token, name, username, role]) => {
                setAuthState({
                    name: name?.value || '',
                    username: username?.value || '',
                    role: role?.value || undefined,
                    token: token?.value || ''
                })
                setBooting(false)
                console.log(role)
            })
    }

    return isBooting? <Splash /> : <RouteSwitch />
}
