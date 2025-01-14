import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/testimonios" className="hover:text-blue-400">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/colaboraciones" className="hover:text-blue-400">
                  Colaboraciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-blue-400">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-blue-400">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/plataforma" className="hover:text-blue-400">
                  Plataforma
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 2: Nuestras Redes */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nuestras Redes</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/entidades" className="hover:text-blue-400">
                  Entidades
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="hover:text-blue-400">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/mejores-practicas" className="hover:text-blue-400">
                  Mejores prácticas
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-blue-400">
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Apoyo */}
          <div>
            <h3 className="text-lg font-bold mb-4">Apoyo</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profesional" className="hover:text-blue-400">
                  Profesional
                </Link>
              </li>
              <li>
                <Link href="/biblioteca" className="hover:text-blue-400">
                  Biblioteca
                </Link>
              </li>
              <li>
                <Link href="/medios" className="hover:text-blue-400">
                  Medios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-blue-400">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/proyecto" className="hover:text-blue-400">
                  Proyecto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/creacion" className="hover:text-blue-400">
                  Creación
                </Link>
              </li>
              <li>
                <Link href="/equipo" className="hover:text-blue-400">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-blue-400">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/aviso-privacidad" className="hover:text-blue-400">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/ong" className="hover:text-blue-400">
                  ONG
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}