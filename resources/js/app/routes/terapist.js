import Logout from "../pages/Logout";
import LandingPage from "../pages/public/LandingPage";
import Dashboard from '../pages/terapis/DashboardTerapis';
import Jadwal from '../pages/terapis/Jadwal';
import Chat from '../pages/shared/chat/Chat'

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
    },
    {
        path: '/chat',
        component: Chat,
    }
]

export default routes;