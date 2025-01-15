import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nombres, apellidos, dni, usuario, contrasena, tipoUsuario } = req.body;

        try {
            const newUser = await prisma.usuario.create({
                data: {
                    usuario,
                    contrasena,
                    tipoUsuario,
                    ...(tipoUsuario === 'P' && {
                        Paciente: {
                            create: { nombres, apellidos, dni },
                        },
                    }),
                    ...(tipoUsuario === 'R' && {
                        Profesional: {
                            create: { nombres, apellidos, identificacion: dni },
                        },
                    }),
                },
            });

            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error registrando usuario:', error);
            res.status(500).json({ message: 'Error registrando usuario' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
