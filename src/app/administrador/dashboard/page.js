"use client"
// pages/admin/dashboard.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

/*type User = {
  id: number;
  name: string;
  role: string;
  email: string;
};

type Appointment = {
  id: number;
  patient: string;
  professional: string;
  date: string;
  status: string;
};

const Dashboard: React.FC = () => {
  const [patients, setPatients] = useState<User[]>([]);
  const [professionals, setProfessionals] = useState<User[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [patientsRes, professionalsRes, appointmentsRes] = await Promise.all([
        axios.get('/api/patients'),
        axios.get('/api/professionals'),
        axios.get('/api/appointments'),
      ]);

      setPatients(patientsRes.data);
      setProfessionals(professionalsRes.data);
      setAppointments(appointmentsRes.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Administrador - Panel de Control</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-600">Pacientes Registrados</h2>
          <p className="text-3xl font-bold text-blue-600">{patients.length}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-600">Profesionales Registrados</h2>
          <p className="text-3xl font-bold text-green-600">{professionals.length}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-600">Citas Programadas</h2>
          <p className="text-3xl font-bold text-red-600">{appointments.length}</p>
        </div>
      </div>

      <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold bg-gray-100 p-4">Citas Programadas</h2>
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Paciente</th>
              <th className="p-4">Profesional</th>
              <th className="p-4">Fecha</th>
              <th className="p-4">Estado</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-t">
                <td className="p-4">{appointment.patient}</td>
                <td className="p-4">{appointment.professional}</td>
                <td className="p-4">{appointment.date}</td>
                <td className="p-4">{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
*/