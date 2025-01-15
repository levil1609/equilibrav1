import { useState } from 'react';
import styles from './Registro.module.css';

export default function Register() {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        dni: '',
        usuario: '',
        contrasena: '',
        tipoUsuario: 'P', // Por defecto, 'P' (Paciente)
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Registro exitoso');
                setFormData({
                    nombres: '',
                    apellidos: '',
                    dni: '',
                    usuario: '',
                    contrasena: '',
                    tipoUsuario: 'P',
                });
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error registrando usuario:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombres"
                    value={formData.nombres}
                    onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Apellidos"
                    value={formData.apellidos}
                    onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="DNI"
                    value={formData.dni}
                    onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Usuario"
                    value={formData.usuario}
                    onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={formData.contrasena}
                    onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
                    required
                />
                <select
                    value={formData.tipoUsuario}
                    onChange={(e) => setFormData({ ...formData, tipoUsuario: e.target.value })}
                >
                    <option value="P">Paciente</option>
                    <option value="R">Profesional</option>
                </select>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}
