"use client"
import { useState } from 'react';
import '../../app/globals.css'; // Importa el CSS


export default function Register() {
  const [form, setForm] = useState({
    usuario: '',
    contraseña: '',
    tipo_usuario: '',
    datos_personales: { nombres: '', apellidos: '', dni: '' },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={form.usuario}
          onChange={(e) => setForm({ ...form, usuario: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={form.contraseña}
          onChange={(e) => setForm({ ...form, contraseña: e.target.value })}
        />
        <select
          value={form.tipo_usuario}
          onChange={(e) => setForm({ ...form, tipo_usuario: e.target.value })}
        >
          <option value="">Tipo de Usuario</option>
          <option value="A">Administrador</option>
          <option value="P">Paciente</option>
          <option value="R">Profesional</option>
        </select>
        <input
          type="text"
          placeholder="Nombres"
          value={form.datos_personales.nombres}
          onChange={(e) =>
            setForm({ ...form, datos_personales: { ...form.datos_personales, nombres: e.target.value } })
          }
        />
        <input
          type="text"
          placeholder="Apellidos"
          value={form.datos_personales.apellidos}
          onChange={(e) =>
            setForm({ ...form, datos_personales: { ...form.datos_personales, apellidos: e.target.value } })
          }
        />
        <input
          type="text"
          placeholder="DNI"
          value={form.datos_personales.dni}
          onChange={(e) =>
            setForm({ ...form, datos_personales: { ...form.datos_personales, dni: e.target.value } })
          }
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
