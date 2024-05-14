import { Link } from "react-router-dom";
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);  // Estado para controlar la visibilidad del menú

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo o título */}
                        <div className="px-4">
                            <Link to="/" className="flex items-center py-2 px-2 text-gray-200 hover:text-gray-400">
                                <span className="font-bold">G&G Smart Solutions</span>
                            </Link>
                        </div>
                    </div>

                    {/* Icono del menú mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12"></path>  // Icono de cruz para cerrar
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>  // Icono de hamburguesa
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Links del menú */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:space-x-4 px-6`}>
                <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Inicio</Link>
                <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-700">Acerca de</Link>
                <Link to="/services" className="block py-2 px-4 text-sm hover:bg-gray-700">Servicios</Link>
                <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-700">Contacto</Link>
                <Link to="/admon" className="block py-2 px-4 text-sm hover:bg-gray-700">Admon</Link>
            </div>
        </nav>
    );
};

export default NavBar;
