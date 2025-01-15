import db from '../../../lib/db';

// API para manejar reservas y modificación de citas
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { id_paciente, id_profesional, fecha, hora } = req.body;

        try {
            await db.query(`
                INSERT INTO cita (id_paciente, id_profesional, fecha, hora) 
                VALUES ($1, $2, $3, $4)
            `, [id_paciente, id_profesional, fecha, hora]);

            res.status(200).json({ message: 'Cita reservada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error reservando la cita' });
        }
    } else if (req.method === 'PUT') {
        const { id_cita, nueva_fecha, nueva_hora } = req.body;

        try {
            await db.query(`
                UPDATE cita SET fecha = $1, hora = $2 WHERE id_cita = $3
            `, [nueva_fecha, nueva_hora, id_cita]);

            res.status(200).json({ message: 'Cita actualizada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error actualizando la cita' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
