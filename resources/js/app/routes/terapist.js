import Logout from "../pages/Logout";
import LandingPage from "../pages/public/LandingPage";
import Dashboard from '../pages/terapis/DashboardTerapis';
import Jadwal from '../pages/terapis/Jadwal';

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
        path: '/jadwal',
        component: Jadwal,
    }
]

export default routes;