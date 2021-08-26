import React from 'react'
import { Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

import { useAuth } from '../providers/AuthProvider'
import GuestRoutes from './GuestRoutes'
import Splash from '../pages/Splash'

export default function RouteSwitch() {

    // const adminRoutes = React.lazy(() => import('../routes/AdminRoutes'))
    const AdminRoutes = React.lazy(() => import('./AdminRoutes'))
    const DeveloperRoutes = React.lazy(() => import('./DeveloperRoutes'))
    const TerapistRoutes = React.lazy(() => import('./TerapistRoutes'))
    const DisabilityApp = React.lazy(() => import('./DisabilityApp'))
    const VolunteerRoutes = React.lazy(() => import('./VolunteerRoutes'))

    const {auth} = useAuth()

    console.log('role:'+auth.role)

    return (
        <Router>
            <React.Suspense fallback={<Splash />}>
                {
                    // auth.role === Roles.OPERATOR ? <OperatorRoutes />
                    // : auth.role === Roles.ADMIN || auth.role === Roles.DEVELOPER ? <AdminRoutes />
                    // : renderGuestRoutes()
                    // routes.map(route => <Route path={route.path} exact={route.exact} component={route.component} />)
                    auth.role === 'developer' ? <DeveloperRoutes />
                    : auth.role === 'admin' ? <AdminRoutes /> 
                    : auth.role === 'terapist' ? <TerapistRoutes />
                    : auth.role === 'disability' ? <DisabilityApp />
                    : auth.role === 'volunteer' ? <VolunteerRoutes /> : <GuestRoutes />
                }
            </React.Suspense>
        </Router>
    )
}