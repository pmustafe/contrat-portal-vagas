import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-brand text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Contrat</span>
        </div>
        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/sobre" className="hover:text-gray-300">Quem Somos</Link>
          <Link to="/vagas" className="hover:text-gray-300">Vagas</Link>
          <Link to="/contato" className="hover:text-gray-300">Contato</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
}
