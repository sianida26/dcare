import LandingPage from "../pages/public/LandingPage";
import Login from '../pages/public/Login';
import RegisterTerapist from '../pages/public/RegisterTerapist'

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/terapis/register',
        component: RegisterTerapist,
    }
]

export default routes;