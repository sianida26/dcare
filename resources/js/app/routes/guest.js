import LandingPage from "../pages/public/LandingPage";
import Login from '../pages/public/Login';
import RegisterTerapist from '../pages/public/RegisterTerapist'
<<<<<<< HEAD
import WhatsNew from "../pages/public/WhatsNew";
=======
import FAQ from "../pages/public/FAQ";
>>>>>>> 2643c6427020f13cbac568f31747fa20be208a01

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
<<<<<<< HEAD
        path: '/apayangbaru',
        component: WhatsNew,
=======
        path: '/faq',
        component: FAQ,
>>>>>>> 2643c6427020f13cbac568f31747fa20be208a01
    },
]

export default routes;