import Logout from "../pages/Logout";
import LandingPage from "../pages/public/LandingPage";

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/logout',
        component: Logout,
    }
]

export default routes;