import Logout from "../pages/Logout";
import LandingPage from "../pages/public/LandingPage";
import Dashboard from "../pages/disability/DashboardDisability";
import Konsultasi from '../pages/disability/konsultasi/Konsultasi';
import PilihTanggal from "../pages/disability/konsultasi/PilihTanggal";
import PilihJam from "../pages/disability/konsultasi/PilihJam";
import MenungguPembayaranDikonfirmasi from "../pages/disability/konsultasi/MenungguPembayaranDikonfirmasi";
import Monitoring from '../pages/disability/monitoring/Monitoring'

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
    },
    {
        path: '/konsultasi/pilih-jam',
        component: PilihJam,
    },
    {
        path: '/konsultasi/menunggu-pembayaran-dikonfirmasi',
        component: MenungguPembayaranDikonfirmasi,
    },
    {
        path: '/monitoring',
        component: Monitoring,
    },
]

export default routes;