'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';

interface NavbarProps {
    onRegisterClick?: () => void;
    onLoginClick?: () => void;
  }


export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onLoginClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center rounded-xl m-4" id='navBar'>
            <div className="container mx-auto flex justify-between items-center sm:p-6">
                <div className="flex items-center">
                    <img
                        src="https://i.pinimg.com/564x/06/af/8f/06af8fff2c908216b054152fd7454115.jpg"
                        alt="Techno"
                        id="logo"
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mr-4 rounded-sm"
                    />
                    <a href="/" className="text-4xl font-bold">
                        Techno
                    </a>
                </div>

                {/* Contenedor para el botón del menú hamburguesa */}
                <div className="xl:hidden flex relative">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                    {/* Menú desplegable */}
                    {menuOpen && (
                        <div className="absolute right-0 top-12 bg-gray-800 text-white p-4 rounded-md w-64 z-10">
                            {/* Buscador */}
                            <div className="flex items-center bg-gray-700 rounded-md p-2 mb-4">
                                <AiOutlineSearch className="text-white mr-2" />
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    className="bg-transparent text-white border-none focus:outline-none"
                                />
                            </div>

                            {/* Menú de navegación */}
                            <Link href="/" className="block p-2 hover:text-gray-300">Home</Link>
                            <Link href="/ofertas" className="block p-2 hover:text-gray-300">Ofertas</Link>
                            {/* Menú desplegable de categorías en menú hamburguesa */}
                            <div className="relative block p-2 hover:text-gray-300">
                                <button onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)} className="flex items-center">
                                    Categorías <AiOutlineDown className="ml-2" />
                                </button>
                                {/* Submenú de categorías */}
                                {categoriesDropdownOpen && (
                                    <div className="absolute left-0 mt-2 bg-gray-700 text-white rounded-md p-2">
                                        <Link href="/categorias/smartphones" className="block p-2 hover:text-gray-300">Smartphones</Link>
                                        <Link href="/categorias/laptops" className="block p-2 hover:text-gray-300">Laptops</Link>
                                        <Link href="/categorias/tablets" className="block p-2 hover:text-gray-300">Tablets</Link>
                                        <Link href="/categorias/headphones" className="block p-2 hover:text-gray-300">Headphones</Link>
                                        <Link href="/categorias/cameras" className="block p-2 hover:text-gray-300">Cámaras</Link>
                                        <Link href="/categorias/printers" className="block p-2 hover:text-gray-300">Impresoras</Link>
                                        <Link href="/categorias/monitors" className="block p-2 hover:text-gray-300">Monitores</Link>
                                        <Link href="/categorias/storage" className="block p-2 hover:text-gray-300">Almacenamiento</Link>
                                        <Link href="/categorias/accessories" className="block p-2 hover:text-gray-300">Accesorios</Link>
                                    </div>
                                )}
                            </div>
                            <Link 
                            href="#" 
                            className="block p-2 hover:text-gray-300"
                            onClick={(e) => {
                            e.preventDefault(); // Evita el comportamiento por defecto de la navegación
                            if (onLoginClick) {
            onLoginClick(); // Llama a la función cuando se hace clic
        }
    }}
>
    Iniciar sesión
</Link>
                            <Link 
    href="#" 
    className="block p-2 hover:text-gray-300" 
    onClick={(e) => {
        e.preventDefault(); // Evita el comportamiento por defecto de la navegación
        if (onRegisterClick) {
            onRegisterClick(); // Llama a la función cuando se hace clic
        }
    }}
>
    Registrarme
</Link>
                            <Link href="/cart" className="block p-2 hover:text-gray-300">
                                <AiOutlineShoppingCart className="text-2xl" />
                            </Link>
                        </div>
                    )}
                </div>

                {/* Barra de búsqueda y menú de navegación para dispositivos de escritorio */}
                <div className="hidden xl:flex items-center justify-center flex-grow">
                    {/* Contenedor flex para la barra de búsqueda */}
                    <div className="flex items-center bg-gray-700 rounded-md p-2 mx-2" id='buscador'>
                        <AiOutlineSearch className="text-white mr-2" />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            className="bg-transparent text-white border-none focus:outline-none"
                        />
                    </div>

                    {/* Menú de navegación */}
                <Link href="/" className="mx-2 hover:text-gray-300">Home</Link>
                <Link href="/ofertas" className="mx-2 hover:text-gray-300">Ofertas</Link>
                {/* Menú desplegable de categorías en el menú de navegación */}
                <div
                className="relative mx-2 hover:text-gray-300"
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}>
                <div className="flex items-center">
                <span>Categorías</span>
                <AiOutlineDown className="ml-1" />
                </div>
                {categoriesDropdownOpen && (
            <div className="absolute bg-gray-800 text-white p-2 rounded-md mt-2" style={{ zIndex: 1000 }}>
            <Link href="/categorias/smartphones" className="block p-2 hover:text-gray-300">Smartphones</Link>
            <Link href="/categorias/laptops" className="block p-2 hover:text-gray-300">Laptops</Link>
            <Link href="/categorias/tablets" className="block p-2 hover:text-gray-300">Tablets</Link>
            <Link href="/categorias/headphones" className="block p-2 hover:text-gray-300">Headphones</Link>
            <Link href="/categorias/cameras" className="block p-2 hover:text-gray-300">Cámaras</Link>
            <Link href="/categorias/printers" className="block p-2 hover:text-gray-300">Impresoras</Link>
            <Link href="/categorias/monitors" className="block p-2 hover:text-gray-300">Monitores</Link>
            <Link href="/categorias/storage" className="block p-2 hover:text-gray-300">Almacenamiento</Link>
            <Link href="/categorias/accessories" className="block p-2 hover:text-gray-300">Accesorios</Link>
            </div>
            )}
            </div>

            <Link 
                href="#" 
                className="block p-2 hover:text-gray-300"
                onClick={(e) => {
                e.preventDefault(); // Evita el comportamiento por defecto de la navegación
                if (onLoginClick) {
                onLoginClick(); // Llama a la función cuando se hace clic
                }
            }}>Iniciar sesión</Link>
            <Link 
            href="#" 
            className="mx-2 hover:text-gray-300"
            onClick={(e) => {
            e.preventDefault(); // Evita el comportamiento por defecto de la navegación
            if (onRegisterClick) {
            onRegisterClick(); // Llama a la función cuando se hace clic
        }
            }}>Registrarme</Link>
        <Link href="/carrito" className="mx-2 hover:text-gray-300">
        <AiOutlineShoppingCart className="text-2xl" />
        </Link>

                </div>
            </div>
        </nav>
    );
};
