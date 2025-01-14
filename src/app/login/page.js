"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; // Importa signIn para la autenticación

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProfesional, setIsProfesional] = useState(true); // Estado para el tipo de usuario
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await signIn('credentials', { // Usa el proveedor 'credentials'
        redirect: false, // Evita la redirección automática
        email,
        password,
        tipoUsuario: isProfesional ? 'S' : 'P', // Envía el tipo de usuario
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push(isProfesional ? '/profesionales/dashboard' : '/pacientes/dashboard'); // Redirige según el tipo de usuario
      }
    } catch (err) {
      setError('Error al iniciar sesión.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: 'url("/background.jpg")' }}>{/* Imagen de fondo */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <img src="/logo.png" alt="Logo" className="h-12 mx-auto mb-6" />{/* Logo */}
          <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Ingrese su correo
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Ingrese su correo"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Ingrese su contraseña
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Ingrese su contraseña"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Iniciar Sesión
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
