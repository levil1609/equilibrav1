import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { usuario, contraseña, tipo_usuario, datos_personales } = req.body;

    try {
      const newUser = await prisma.usuario.create({
        data: {
          usuario,
          contraseña,
          tipo_usuario,
        },
      });

      if (tipo_usuario === 'A') {
        await prisma.administrador.create({
          data: {
            ...datos_personales,
            id_usuario: newUser.id_usuario,
          },
        });
      } else if (tipo_usuario === 'P') {
        await prisma.paciente.create({
          data: {
            ...datos_personales,
            id_usuario: newUser.id_usuario,
          },
        });
      } else if (tipo_usuario === 'R') {
        await prisma.profesional.create({
          data: {
            ...datos_personales,
            id_usuario: newUser.id_usuario,
          },
        });
      }

      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
