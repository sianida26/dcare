import Logout from "../pages/Logout";
import LandingPage from "../pages/public/LandingPage";
import Dashboard from "../pages/disability/DashboardDisability";
import Konsultasi from '../pages/disability/konsultasi/Konsultasi';
import PilihTanggal from "../pages/disability/konsultasi/PilihTanggal";

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
    {
        path: '/konsultasi',
        component: Konsultasi,
    },
    {
        path: '/konsultasi/pilih-tanggal',
        component: PilihTanggal,
    }
]

export default routes;