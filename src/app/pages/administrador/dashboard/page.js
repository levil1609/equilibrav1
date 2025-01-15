import { withAuth, getServerSideProps } from '../../lib/withAuth';
import AdminDashboard from '../../components/AdminDashboard';

function AdminPage(props) {
    return <AdminDashboard />;
}

export default withAuth(AdminPage, ['A']); // Solo usuarios con rol 'A' (Administrador)

export { getServerSideProps };
