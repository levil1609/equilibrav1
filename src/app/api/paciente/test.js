import db from '../../../lib/db';

// API para manejar el test inicial
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { id_paciente, respuestas } = req.body;

        try {
            const resultado = calcularResultadoTest(respuestas);

            // Guardar el resultado en la base de datos
            await db.query(`
                INSERT INTO resultados_test (id_paciente, resultado) 
                VALUES ($1, $2)
            `, [id_paciente, resultado]);

            res.status(200).json({ resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error guardando el test' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}

// Función para calcular el resultado del test
function calcularResultadoTest(respuestas) {
    // Simulación de procesamiento de respuestas
    return respuestas.reduce((sum, value) => sum + value, 0) > 10 ? 'Ansiedad' : 'Estrés';
}
