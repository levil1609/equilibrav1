import prisma from '../../../lib/prisma'; // Prisma Client

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { usuario, contraseña } = req.body;

    try {
      const user = await prisma.usuario.findUnique({
        where: { usuario },
      });

      if (!user || user.contraseña !== contraseña) {
        return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
      }

      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        tipo_usuario: user.tipo_usuario,
        id_usuario: user.id_usuario,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
