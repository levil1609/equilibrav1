import db from '../../../lib/db';

// Endpoint para obtener, actualizar citas
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const appointments = await db.query(`
                SELECT c.id_cita, c.fecha, c.hora, 
                       p.nombres AS paciente, pr.nombres AS profesional
                FROM cita c
                JOIN paciente p ON c.id_paciente = p.id_paciente
                JOIN profesional pr ON c.id_profesional = pr.id_profesional
            `);
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
            res.status(200).json({ message: 'Cita actualizada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error actualizando la cita' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
