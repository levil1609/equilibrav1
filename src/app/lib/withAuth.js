import { getSession } from 'next-auth/react';

export function withAuth(Component, allowedRoles = []) {
    return function AuthenticatedComponent(props) {
        const session = props.session;

        if (!session || !allowedRoles.includes(session.user.tipoUsuario)) {
            return <div>Acceso denegado</div>;
        }

        return <Component {...props} />;
    };
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: { session },
    };
}
