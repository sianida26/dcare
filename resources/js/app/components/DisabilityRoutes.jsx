import React from 'react'
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import DisabilityDataProvider from '../providers/DisabilityDataProvider'
import { useAuth } from '../providers/AuthProvider'
import routes from '../routes/disability'
import NotFound from '../pages/NotFound'

export default function AdminRoutes() {

    const {auth} = useAuth()

    return auth.role !== 'disability' ? <Redirect to={{pathname: "/login", state: {from: location}}} /> : (
        <DisabilityDataProvider>
            <Switch>
                {routes.map((route, i) => <Route key={i} path={route.path} exact={!route.isNotExact} component={route.component} />)}
                <Redirect path="/login" to="/" />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </DisabilityDataProvider>
    )
}
