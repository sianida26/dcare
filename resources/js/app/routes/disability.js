
import LandingPage from "../pages/public/LandingPage";
import Dashboard from "../pages/disability/DashboardDisability";
import Konsultasi from '../pages/disability/konsultasi/Konsultasi';
import PilihTanggal from "../pages/disability/konsultasi/PilihTanggal";
import PilihJam from "../pages/disability/konsultasi/PilihJam";
import MenungguPembayaranDikonfirmasi from "../pages/disability/konsultasi/MenungguPembayaranDikonfirmasi";
import Monitoring from '../pages/disability/monitoring/Monitoring'
import Inbox from "../pages/shared/inbox/Inbox";
import PilihKurikulum from "../pages/disability/kurikulum/PilihKurikulum";
import Chat from '../pages/shared/chat/Chat'
import Form from '../pages/disability/form/Form'

const routes = [
    // {
    //     path: '/',
    //     component: LandingPage,
    // },
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
    {
        path: '/chat',
        component: Chat,
    },
    {
        path: '/inbox',
        component: Inbox,
    },
    {
        path: '/kurikulum',
        component: PilihKurikulum,
    },
]

export default routes;