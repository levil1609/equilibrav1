import db from '../../../lib/db';

// API para obtener historial de pagos
export default async function handler(req, res) {
    const { id_profesional } = req.query;

    if (req.method === 'GET') {
        try {
            const payments = await db.query(`
                SELECT fecha_pago, monto 
                FROM pagos 
                WHERE id_profesional = $1
                ORDER BY fecha_pago DESC
            `, [id_profesional]);

            res.status(200).json(payments.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error obteniendo el historial de pagos' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
