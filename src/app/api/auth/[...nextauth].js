import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../lib/prisma';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                usuario: { label: 'Usuario', type: 'text' },
                contrasena: { label: 'Contraseña', type: 'password' },
            },
            async authorize(credentials) {
                const user = await prisma.usuario.findFirst({
                    where: { usuario: credentials.usuario, contrasena: credentials.contrasena },
                });
                if (user) {
                    return { id: user.id, tipoUsuario: user.tipoUsuario };
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub;
            session.user.tipoUsuario = token.tipoUsuario;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
                token.tipoUsuario = user.tipoUsuario;
            }
            return token;
        },
    },
    secret: 'my-secret',
});
