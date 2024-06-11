"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const iconSize = 30;
    return (
        <footer id="footer" className=" text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Información de la empresa */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-lg font-bold mb-2">Nuestra Empresa</h3>
                        <p className="text-white-400">Este es un proyecto para Henry</p>
                    </div>

                    {/* Enlaces útiles */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-lg font-bold mb-2">Enlaces Útiles</h3>
                        <ul>
                            <li><a href="/" className="text-white-400 hover:text-black">Inicio</a></li>
                            <li><a href="#" className="text-thite-400 hover:text-black">Sobre Nosotros</a></li>
                            <li><a href="#" className="text-white-400 hover:text-black">Contacto</a></li>
                            <li><a href="#" className="text-white-400 hover:text-black">Términos y Condiciones</a></li>
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-bold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
                <a href="#" className="text-white-400 hover:text-black">
                    <FaFacebookF size={iconSize} />
                </a>
                <a href="#" className="text-white-400 hover:text-black">
                    <FaTwitter size={iconSize}/>
                </a>
                <a href="#" className="text-white-400 hover:text-black">
                    <FaInstagram size={iconSize} />
                </a>
                <a href="#" className="text-white-400 hover:text-black">
                    <FaLinkedinIn size={iconSize}/>
                </a>
            </div>
             </div>
                </div>

                {/* Pie de página */}
                <div className="mt-6 text-center text-black-500">
                    &copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
