
import LandingPage from "../pages/public/LandingPage";
import Dashboard from "../pages/disability/DashboardDisability";
import Konsultasi from '../pages/disability/konsultasi/Konsultasi';
import PilihTanggal from "../pages/disability/konsultasi/PilihTanggal";
import PilihJam from "../pages/disability/konsultasi/PilihJam";
import MenungguPembayaranDikonfirmasi from "../pages/disability/konsultasi/MenungguPembayaranDikonfirmasi";
import Monitoring from '../pages/disability/monitoring/Monitoring'
import Inbox from "../pages/shared/inbox/Inbox";
import Chat from '../pages/shared/chat/Chat'
import Form from '../pages/disability/form/Form'
import Kurikulum from "../pages/disability/kurikulum/Kurikulum";
import Aspek from "../pages/disability/kurikulum/Aspek";
import Splash from '../pages/Splash';
import TerapisTerdekat from '../pages/disability/terapisTerdekat/TerapisTerdekat'
import FAQ from "../pages/public/FAQ";


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
        component: Kurikulum,
    },
    {
        path: '/kurikulum/aspek',
        component: Aspek,
    },
    {
        path: '/splash',
        component: Splash,
    },
    {
        path: '/terapis-terdekat',
        component: TerapisTerdekat,
    },
    {
        path: '/faq',
        component: FAQ,
    },
]

export default routes;