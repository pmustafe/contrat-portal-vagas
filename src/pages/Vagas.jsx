import React, { useContext } from "react";
import { VagasContext } from "../App";

export default function Vagas() {
  const { vagas } = useContext(VagasContext);
  const phone = "5516992221194";

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand mb-4">Vagas Disponíveis</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {vagas.filter(v => v.status === "Disponível").map((vaga, i) => (
          <div key={i} className="border p-4 rounded shadow bg-white">
            <h2 className="font-bold text-lg">{vaga.titulo}</h2>
            <p>{vaga.descricao}</p>
            <p><strong>Competências:</strong> {vaga.competencias}</p>
            <p><strong>Salário:</strong> {vaga.salario}</p>
            <p><strong>Benefícios:</strong> {vaga.beneficios}</p>
            <a
              href={`https://wa.me/${phone}?text=Olá, tenho interesse na vaga ${vaga.titulo}, salário ${vaga.salario}, benefícios: ${vaga.beneficios}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Tenho Interesse
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
