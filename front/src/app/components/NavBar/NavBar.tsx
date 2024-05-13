'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';
import { useRouter } from 'next/navigation';


interface NavbarProps {
    onRegisterClick?: () => void;
    onLoginClick?: () => void;
}


export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onLoginClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const userSession = localStorage.getItem('userSession');
        setIsAuthenticated(!!userSession); 
    }, []);

    useEffect(() => {
        // Agrega un event listener para cerrar el menú desplegado al hacer clic fuera de él
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
                setCategoriesDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userSession');
        setIsAuthenticated(false); 
    router.push('/');
    }

    const handleCartClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isAuthenticated) {
            e.preventDefault();
        
            toast.warn('Debes iniciar sesión para acceder al carrito.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

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

            <div className="xl:hidden flex relative" ref={menuRef}>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            
                {menuOpen && (
                    <div className="absolute right-0 top-12 bg-gray-800 text-white p-4 rounded-md w-64 z-10">
                        <div className="relative block p-2 hover:text-gray-300">
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="w-full bg-gray-700 p-2 rounded-md focus:outline-none text-white"
                            />
                            <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white" />
                        </div>

                        <Link href="/" className="block p-2 hover:text-gray-300">Home</Link>
                        <Link href="/ofertas" className="block p-2 hover:text-gray-300">Ofertas</Link>
                    
                        <div className="relative block p-2 hover:text-gray-300">
                            <button onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)} className="flex items-center">
                                Categorías <AiOutlineDown className="ml-2" />
                            </button>
                    
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

                        {isAuthenticated ? (
                            <Link href="/profile" className="block p-2 hover:text-gray-300">Mi perfil</Link>
                        ) : (
                            <Link href="#" className="block p-2 hover:text-gray-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (onLoginClick) {
                                        onLoginClick();
                                    }
                                }}>
                                Iniciar sesión
                            </Link>
                        )}

                        {isAuthenticated ? (
                            <button onClick={handleLogout} className="block p-2 hover:text-gray-300">
                                Cerrar sesión
                            </button>
                        ) : (
                            <Link href="#" className="block p-2 hover:text-gray-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (onRegisterClick) {
                                        onRegisterClick();
                                    }
                                }}>
                                Registrarme
                            </Link>
                        )}

                        <Link href="/cart" className="block p-2 hover:text-gray-300" onClick={handleCartClick}>
                            <AiOutlineShoppingCart className="text-2xl" />
                        </Link>
                    </div>
                )}
            </div>

            <div className="hidden xl:flex items-center justify-center flex-grow">
                <div className="flex items-center bg-gray-700 rounded-md p-2 mx-2" id='buscador'>
                    <AiOutlineSearch className="text-white mr-2" />
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="bg-transparent text-white border-none focus:outline-none"
                    />
                </div>
            
                <Link href="/" className="mx-2 hover:text-gray-300">Home</Link>
                <Link href="/ofertas" className="mx-2 hover:text-gray-300">Ofertas</Link>
            
                <div className="relative mx-2 hover:text-gray-300" onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}>
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

                {isAuthenticated ? (
                    <Link href="/profile" className="mx-2 hover:text-gray-300">Mi perfil</Link>
                ) : (
                    <Link href="#" className="mx-2 hover:text-gray-300"
                        onClick={(e) => {
                            e.preventDefault();
                            if (onLoginClick) {
                                onLoginClick();
                            }
                        }}>
                        Iniciar sesión
                    </Link>
                )}

                {isAuthenticated ? (
                    <button onClick={handleLogout} className="mx-2 hover:text-gray-300">
                        Cerrar sesión
                    </button>
                ) : (
                    <Link href="#" className="mx-2 hover:text-gray-300"
                        onClick={(e) => {
                            e.preventDefault();
                            if (onRegisterClick) {
                                onRegisterClick();
                            }
                        }}>
                        Registrarme
                    </Link>
                )}

                <Link href="/cart" className="mx-2 hover:text-gray-300" onClick={handleCartClick}>
                    <AiOutlineShoppingCart className="text-2xl" />
                </Link>
            </div>
        </div>
    </nav>
);
};