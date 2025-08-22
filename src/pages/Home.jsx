import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-brand mb-4">Bem-vindo à Contrat</h1>
      <p className="mb-6">Conectando talentos às melhores oportunidades.</p>
      <Link to="/vagas" className="bg-brand text-white px-6 py-2 rounded">Ver Vagas</Link>
    </div>
  );
}
