"use client"
import { useState, useEffect } from 'react';

export default function GestionCitas() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const fetchCitas = async () => {
      const res = await fetch('/api/citas/profesional');
      const data = await res.json();
      setCitas(data);
    };
    fetchCitas();
  }, []);

  const handleReprogramar = async (id, nuevaFecha) => {
    const res = await fetch(`/api/citas/reprogramar/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fecha: nuevaFecha }),
    });
    if (res.ok) alert('Cita reprogramada');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Gestión de Citas</h1>
      <ul className="space-y-4">
        {citas.map((cita) => (
          <li key={cita.id_cita} className="border p-4">
            <p>Paciente: {cita.pacienteNombre}</p>
            <p>Fecha: {new Date(cita.fecha).toLocaleString()}</p>
            <button
              onClick={() => handleReprogramar(cita.id_cita, prompt('Nueva fecha (YYYY-MM-DD):'))}
              className="bg-green-500 text-white px-4 py-2 mt-2"
            >
              Reprogramar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}