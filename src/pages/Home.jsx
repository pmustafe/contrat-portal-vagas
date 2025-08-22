import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold text-brand">Contrat Gente e Gestão</h1>
      <p className="max-w-2xl mx-auto text-lg">
        Localizada estrategicamente para melhor atender empresas e profissionais de Franca e região, nossa nova sede marca um passo importante no compromisso com a excelência em gestão de pessoas e soluções em RH.
      </p>
      <Link to="/vagas" className="bg-brand text-white px-6 py-3 rounded-lg shadow hover:bg-blue-900">Ver Vagas</Link>
      <div className="mt-8">
        <img src="https://source.unsplash.com/1200x400/?office,team" alt="Escritório" className="rounded-lg shadow mx-auto" />
      </div>
    </div>
  );
}
