import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-brand text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-lg">Contrat</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/sobre" className="hover:underline">Quem Somos</Link>
          <Link to="/vagas" className="hover:underline">Vagas</Link>
          <Link to="/contato" className="hover:underline">Contato</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
}
