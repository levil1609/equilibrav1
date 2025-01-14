import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo y enlaces */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Equilibra
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/nosotros" className="text-gray-700 hover:text-blue-600">
                NOSOTROS
              </Link>
              <Link href="/test" className="text-gray-700 hover:text-blue-600">
                TEST
              </Link>
              <Link href="/profesionales" className="text-gray-700 hover:text-blue-600">
                PROFESIONALES
              </Link>
              <Link href="/recursos" className="text-gray-700 hover:text-blue-600">
                RECURSOS
              </Link>
              <Link href="/contactanos" className="text-gray-700 hover:text-blue-600">
                CONTACTANOS
              </Link>
            </div>
          </div>

          {/* Botones de Sign in y Register */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}