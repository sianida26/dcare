import LandingPage from "../pages/public/LandingPage";
import Login from '../pages/public/Login';
import RegisterTerapist from '../pages/public/RegisterTerapist'
import WhatsNew from "../pages/public/WhatsNew";
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
        path: '/apayangbaru',
        component: WhatsNew,
    },{
        path: '/faq',
        component: FAQ,
    },
]

export default routes;