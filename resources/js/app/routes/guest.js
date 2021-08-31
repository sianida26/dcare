import LandingPage from "../pages/public/LandingPage";
import Login from '../pages/public/Login';
import RegisterTerapist from '../pages/public/RegisterTerapist'
import FAQ from "../pages/public/FAQ";

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
    },
    {
        path: '/faq',
        component: FAQ,
    },
]

export default routes;