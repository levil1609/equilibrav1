import db from '../../../lib/db';

// API para obtener el perfil del profesional
export default async function handler(req, res) {
    const { id_profesional } = req.query;

    if (req.method === 'GET') {
        try {
            const profile = await db.query(`
                SELECT nombres, apellidos, identificacion 
                FROM profesional 
                WHERE id_profesional = $1
            `, [id_profesional]);

            res.status(200).json(profile.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error obteniendo el perfil' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
