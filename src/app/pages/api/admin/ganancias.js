import db from '../../../lib/db';

// Consolidado semanal
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const earnings = await db.query(`
                SELECT 
                    SUM(c.monto * (co.porcentaje / 100)) AS ganancias
                FROM cita c
                JOIN comisiones co ON c.id_comision = co.id_comision
                WHERE c.fecha >= NOW() - INTERVAL '7 days'
            `);
            res.status(200).json(earnings.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error calculando ganancias' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
