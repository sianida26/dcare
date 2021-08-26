import React from 'react'
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import NotFound from '../pages/NotFound'
import DisabilityDataProvider from '../providers/DisabilityDataProvider'
import DisabilityRouter from './DisabilityRouter'
import { useAuth } from '../providers/AuthProvider'
import routes from '../routes/disability'

export default function AdminRoutes() {

    const {auth, axios} = useAuth()

    return auth.role !== 'disability' ? <Redirect to={{pathname: "/login", state: {from: location}}} /> : (
        <DisabilityDataProvider>
            <DisabilityRouter />
        </DisabilityDataProvider>
    )
}
