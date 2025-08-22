import React from "react";

export default function Sobre() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-brand">Quem Somos</h1>
      <p>
        A Contrat Gente e Gestão é uma agência especializada em Recrutamento e Seleção e Departamento Pessoal,
        oferecendo soluções completas e personalizadas para empresas que buscam otimizar seus processos e encontrar os talentos certos para seus times.
      </p>
      <h2 className="text-xl font-semibold">Nossos principais serviços</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>✔ Recrutamento e Seleção Personalizado</li>
        <li>✔ Departamento Pessoal Completo</li>
        <li>✔ Consultoria em RH</li>
        <li>✔ Terceirização de Serviços de RH</li>
      </ul>
      <h2 className="text-xl font-semibold">Por que uma nova unidade física?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Aproximação com clientes e candidatos</li>
        <li>Espaço para entrevistas e treinamentos</li>
        <li>Estrutura moderna para atendimento ágil</li>
      </ul>
      <div className="mt-6">
        <img src="https://source.unsplash.com/800x300/?team,people" alt="Equipe" className="rounded-lg shadow" />
      </div>
    </div>
  );
}
