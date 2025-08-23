import React from "react";
import { Link, useLocation } from "react-router-dom";

const linkCls = (active) =>
  "px-3 py-2 rounded-md transition " +
  (active ? "bg-white/10" : "hover:bg-white/10");

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="bg-gradient-to-r from-brand to-blue-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <img src="https://i.ibb.co/R5pm9P0/Logo.png" alt="Logo Contrat" className="h-10 w-auto" />
        </a>
        <div className="flex gap-1 font-medium">
          <Link to="/" className={linkCls(pathname === "/")}>Início</Link>
          <Link to="/sobre" className={linkCls(pathname === "/sobre")}>Quem Somos</Link>
          <Link to="/vagas" className={linkCls(pathname === "/vagas")}>Vagas</Link>
          <Link to="/contato" className={linkCls(pathname === "/contato")}>Contato</Link>
          <Link to="/login" className={linkCls(pathname === "/login")}>Admin</Link>
        </div>
      </div>
    </nav>
  );
}
