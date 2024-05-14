import Link from 'next/link'


export default function NotFound() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Not Found</h2>
          <p className="mb-4">Página en construcción</p>
          <Link href="/" passHref>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">Volver al home</button>
          </Link>
        </div>
      </div>
    )
}