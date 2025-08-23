import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand to-blue-900 text-white text-center p-6 mt-8">
      <p>© {new Date().getFullYear()} Contrat Gente e Gestão - Todos os direitos reservados.</p>
      <p className="mt-2">
        Desenvolvido por{" "}
        <a href="https://wa.me/5516994099752" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
          M.MKT
        </a>
      </p>
    </footer>
  );
}
