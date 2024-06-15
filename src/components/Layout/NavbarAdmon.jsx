import { Link } from "react-router-dom";
import { useState } from "react";

const NavBarAdmon = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú

  return (
    <nav className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Icono del menú mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path> // Icono de cruz para cerrar
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path> // Icono de hamburguesa
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Links del menú */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:space-x-4 px-6`}
      >
        <Link
          to="/admon/newuser"
          className="block py-2 px-4 text-sm hover:bg-gray-500"
        >
          Nuevo Cliente
        </Link>
        <Link
          to="/admon/usersearch"
          className="block py-2 px-4 text-sm hover:bg-gray-500"
        >
          Buscar Cliente
        </Link>
        <Link
          to="/admon/userlist"
          className="block py-2 px-4 text-sm hover:bg-gray-500"
        >
          Lista de Clientes
        </Link>
      </div>
    </nav>
  );
};

export default NavBarAdmon;
