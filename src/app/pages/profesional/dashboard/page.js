"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProfesionalDashboard.module.css'; // CSS Module

export default function ProfessionalDashboard({ id_profesional }) {
    const [appointments, setAppointments] = useState([]);
    const [profile, setProfile] = useState(null);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetchProfile();
        fetchAppointments();
        fetchPayments();
    }, []);

    const fetchProfile = async () => {
        try {
            const { data } = await axios.get(`/api/professional/profile?id_profesional=${id_profesional}`);
            setProfile(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchAppointments = async () => {
        try {
            const { data } = await axios.get(`/api/professional/appointments?id_profesional=${id_profesional}`);
            setAppointments(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPayments = async () => {
        try {
            const { data } = await axios.get(`/api/professional/payments?id_profesional=${id_profesional}`);
            setPayments(data);
        } catch (error) {
            console.error(error);
        }
    };

    const reprogramAppointment = async (id_cita, nuevaFecha, nuevaHora) => {
        try {
            await axios.put('/api/profesional/citas', {
                id_cita,
                fecha: nuevaFecha,
                hora: nuevaHora,
            });
            alert('Cita reprogramada correctamente');
            fetchAppointments();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className='style.header'>Panel del Profesional</h1>

            <section className={styles.section}>
                <h2>Perfil</h2>
                {profile && (
                    <div>
                        <p><strong>Nombre:</strong> {profile.nombres} {profile.apellidos}</p>
                        <p><strong>Identificación:</strong> {profile.identificacion}</p>
                    </div>
                )}
            </section>

            <section className={styles.section}>
                <h2>Citas Pendientes</h2>
                <ul className={styles.list}>
                    {appointments.map(appointment => (
                        <li key={appointment.id_cita}>
                            <p><strong>Paciente:</strong> {appointment.paciente}</p>
                            <p><strong>Fecha:</strong> {appointment.fecha}</p>
                            <p><strong>Hora:</strong> {appointment.hora}</p>
                            <button
                                className={styles.button}
                                onClick={() => reprogramAppointment(
                                    appointment.id_cita,
                                    prompt('Nueva Fecha (YYYY-MM-DD):', appointment.fecha),
                                    prompt('Nueva Hora (HH:MM):', appointment.hora)
                                )}
                            >
                                Reprogramar
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Historial de Pagos</h2>
                <ul className={styles.list}>
                    {payments.map((payment, index) => (
                        <li key={index}>
                            <p><strong>Fecha:</strong> {payment.fecha_pago}</p>
                            <p><strong>Monto:</strong> ${payment.monto}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
