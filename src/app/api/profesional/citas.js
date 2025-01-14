import db from '../../../lib/db';

// API para manejar citas pendientes y reprogramación
export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { id_profesional } = req.query;

        try {
            const appointments = await db.query(`
                SELECT c.id_cita, c.fecha, c.hora, 
                       p.nombres AS paciente
                FROM cita c
                JOIN paciente p ON c.id_paciente = p.id_paciente
                WHERE c.id_profesional = $1 AND c.fecha >= CURRENT_DATE
                ORDER BY c.fecha ASC
            `, [id_profesional]);

            res.status(200).json(appointments.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error obteniendo las citas' });
        }
    } else if (req.method === 'PUT') {
        const { id_cita, fecha, hora } = req.body;

        try {
            await db.query(`
                UPDATE cita SET fecha = $1, hora = $2 WHERE id_cita = $3
            `, [fecha, hora, id_cita]);

            res.status(200).json({ message: 'Cita reprogramada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error reprogramando la cita' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
