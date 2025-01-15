"use client"
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import styles from './Login.module.css';

export default function Login() {
    const [credentials, setCredentials] = useState({ usuario: '', contrasena: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: true,
            usuario: credentials.usuario,
            contrasena: credentials.contrasena,
            callbackUrl: '/',
        });

        if (!result.ok) {
            alert('Error al iniciar sesión');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className='header'>Iniciar Sesión</h1>
            <form className='formulario' onSubmit={handleLogin}>
                <input
                    className='input'
                    type="text"
                    placeholder="Usuario"
                    value={credentials.usuario}
                    onChange={(e) => setCredentials({ ...credentials, usuario: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={credentials.contrasena}
                    onChange={(e) => setCredentials({ ...credentials, contrasena: e.target.value })}
                    required
                />
                <button className='button' type="submit">Ingresar</button>
            </form>
        </div>
    );
}
