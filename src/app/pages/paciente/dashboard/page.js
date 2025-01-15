"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PacienteDashboard.module.css'; // CSS Module

export default function PatientDashboard({ id_paciente }) {
    const [testResult, setTestResult] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({ id_profesional: '', fecha: '', hora: '' });

    useEffect(() => {
        fetchRecommendations();
        fetchAppointments();
    }, [testResult]);

    const submitTest = async (respuestas) => {
        try {
            const { data } = await axios.post('/api/paciente/test.js', { id_paciente, respuestas });
            setTestResult(data.resultado);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchRecommendations = async () => {
        try {
            const { data } = await axios.get(`/api/patient/recommendations?id_paciente=${id_paciente}`);
            setRecommendations(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAppointments = async () => {
        try {
            const { data } = await axios.get(`/api/patient/appointments?id_paciente=${id_paciente}`);
            setAppointments(data);
        } catch (error) {
            console.error(error);
        }
    };

    const reserveAppointment = async () => {
        try {
            await axios.post('/api/patient/appointments', {
                id_paciente,
                ...newAppointment,
            });
            alert('Cita reservada correctamente');
            fetchAppointments();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className='header'>Panel del Paciente</h1>

            {!testResult && (
                <section className={styles.section}>
                    <h2>Test Inicial</h2>
                    <button onClick={() => submitTest([3, 2, 4])} className={styles.button}>
                        Realizar Test
                    </button>
                </section>
            )}

            {testResult && (
                <section className={styles.section}>
                    <h2>Recomendaciones</h2>
                    <ul className={styles.list}>
                        {recommendations.map((rec) => (
                            <li key={rec.id_profesional}>
                                <p>
                                    <strong>{rec.nombres} {rec.apellidos}</strong> - {rec.especialidad}
                                </p>
                                <button onClick={() => setNewAppointment({ id_profesional: rec.id_profesional })} className={styles.button}>
                                    Seleccionar
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <section className={styles.section}>
                <h2>Citas</h2>
                <ul className={styles.list}>
                    {appointments.map((appt) => (
                        <li key={appt.id_cita}>
                            <p>
                                <strong>Fecha:</strong> {appt.fecha} - <strong>Hora:</strong> {appt.hora}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
