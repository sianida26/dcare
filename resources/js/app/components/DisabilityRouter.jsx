import React from 'react'

import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import NotFound from '../pages/NotFound'
import { useAuth } from '../providers/AuthProvider'
import { useData } from '../providers/DisabilityDataProvider'
import routes from '../routes/disability'
import Logout from "../pages/Logout";
import db from '../utils/DB';
import Form from '../pages/disability/form/Form'

export default function DisabilityRouter() {

    const { axios } = useAuth()
    const { data, setData } = useData()

    React.useEffect(() => {

        boot()

        requestInitData()
    }, [])

    const boot = async () => {
        db.disability.bulkGet(['showModalForm'])
            .then(([showModalForm]) => {
                setData({
                    disabilityForm: {
                        ...data.disabilityForm,
                        openForm: showModalForm.value
                    }
                })
                // setBooting(false)
            })
    }

    const requestInitData = () => {
        axios({
            url: '/init',
            method: 'post',
        })
        .then(result => { //handle success response 
            let data = result.data
            console.log(data) //todo remove log
            db.disability.put({key: 'showModalForm', value: data.showModalForm})
            setData({
                disabilityForm: {
                    ...data.disabilityForm,
                    openForm: data.showModalForm
                }
            })
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
        <Switch>
            {
                data.disabilityForm.openForm ? <Route path="/welcome" exact={true} component={Form} />
                : routes.map((route, i) => <Route key={i} path={route.path} exact={!route.isNotExact} component={route.component} />)
            }
            { data.disabilityForm.openForm && <Redirect path="/dashboard" to="/welcome" />}
            { !data.disabilityForm.openForm && <Redirect path="/welcome" to="/dashboard" />}
            <Redirect path="/login" to="/dashboard" />
            <Redirect path="/" to="/dashboard" exact />
            <Route path={'/logout'} exact={true} component={Logout} />
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}
