"use client"
import { useState } from 'react';
import '../../app/globals.css'; // Importa el CSS

export default function Login() {
  const [form, setForm] = useState({ usuario: '', contraseña: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    if (response.ok) {
      alert(`Bienvenido ${data.tipo_usuario}`);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
