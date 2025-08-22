import React, { useContext } from "react";
import { VagasContext } from "../App";

export default function Vagas() {
  const { vagas } = useContext(VagasContext);
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand mb-4">Vagas Disponíveis</h1>
      <div className="space-y-4">
        {vagas.filter(v => v.status === "Disponível").map((vaga, i) => (
          <div key={i} className="border p-4 rounded shadow bg-white">
            <h2 className="font-bold text-lg">{vaga.titulo}</h2>
            <p>{vaga.descricao}</p>
            <p><strong>Competências:</strong> {vaga.competencias}</p>
            <p><strong>Salário:</strong> {vaga.salario}</p>
            <p><strong>Benefícios:</strong> {vaga.beneficios}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
