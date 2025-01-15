import db from '../../../lib/db';

// API para obtener profesionales basados en el resultado del test
export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { id_paciente } = req.query;

        try {
            const result = await db.query(`
                SELECT r.resultado, pr.id_profesional, pr.nombres, pr.apellidos, pr.especialidad
                FROM resultados_test r
                JOIN profesional pr ON pr.especialidad = r.resultado
                WHERE r.id_paciente = $1
            `, [id_paciente]);

            res.status(200).json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error obteniendo recomendaciones' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
