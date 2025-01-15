import db from '../../../lib/db'; // Aquí importamos la conexión a la BD

// Endpoint para obtener la lista de usuarios (pacientes y profesionales)
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const users = await db.query(`
                SELECT u.id_usuario, u.usuario, u.tipo_usuario, 
                       COALESCE(p.nombres, pr.nombres) AS nombres, 
                       COALESCE(p.apellidos, pr.apellidos) AS apellidos
                FROM usuario u
                LEFT JOIN paciente p ON u.id_usuario = p.id_usuario
                LEFT JOIN profesional pr ON u.id_usuario = pr.id_usuario
            `);
            res.status(200).json(users.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error obteniendo la lista de usuarios' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
