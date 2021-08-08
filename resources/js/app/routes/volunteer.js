import LandingPage from "../pages/public/LandingPage";
import Logout from '../pages/Logout';
import Dashboard from '../pages/volunteer/DashboardVolunteer'

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/logout',
        component: Logout,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
]

export default routes;