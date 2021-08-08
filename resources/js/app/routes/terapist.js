import Logout from "../pages/Logout";
import LandingPage from "../pages/public/LandingPage";
import Dashboard from '../pages/terapis/DashboardTerapis';


const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/logout',
        component: Logout,
    },
    {
        path: '/terapis/daftar',
        component: RegisterTerapist,
    },
]

export default routes;