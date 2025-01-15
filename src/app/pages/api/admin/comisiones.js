import db from '../../../lib/db';

// Endpoint para manejar comisiones
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const commissions = await db.query(`
                SELECT * FROM comisiones
            `);
            res.status(200).json(commissions.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error obteniendo las comisiones' });
        }
    } else if (req.method === 'POST') {
        const { porcentaje } = req.body;
        try {
            await db.query(`
                INSERT INTO comisiones (porcentaje) VALUES ($1)
            `, [porcentaje]);
            res.status(200).json({ message: 'Comisión configurada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error configurando la comisión' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
