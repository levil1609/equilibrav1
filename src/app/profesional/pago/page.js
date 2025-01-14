"use client"
import { useState, useEffect } from 'react';

export default function GestionPagos() {
  const [pagos, setPagos] = useState([]);

  useEffect(() => {
    const fetchPagos = async () => {
      const res = await fetch('/api/pagos/profesional');
      const data = await res.json();
      setPagos(data);
    };
    fetchPagos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Historial de Pagos</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Fecha</th>
            <th className="border px-4 py-2">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago) => (
            <tr key={pago.id_pago}>
              <td className="border px-4 py-2">{new Date(pago.fecha).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{pago.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}