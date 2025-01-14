"use client"

import { useState } from 'react';

export default function GestionPerfil() {
  const [formData, setFormData] = useState({ nombres: '', apellidos: '', identificacion: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/profesionales/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) alert('Perfil actualizado');
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombres"
          value={formData.nombres}
          onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Apellidos"
          value={formData.apellidos}
          onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Identificación"
          value={formData.identificacion}
          onChange={(e) => setFormData({ ...formData, identificacion: e.target.value })}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Actualizar Perfil</button>
      </form>
    </div>
  );
}