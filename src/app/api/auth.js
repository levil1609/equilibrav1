import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { usuario, contraseña } = req.body;
    
    const user = await prisma.usuario.findUnique({ where: { usuario } });

    if (user && bcrypt.compareSync(contraseña, user.contraseña)) {
      res.status(200).json({ id: user.id_usuario, tipo: user.tipo_usuario });
    } else {
      res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}