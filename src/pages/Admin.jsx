import React, { useContext, useState } from "react";
import { VagasContext } from "../App";

export default function Admin() {
  const { vagas, setVagas } = useContext(VagasContext);
  const [novaVaga, setNovaVaga] = useState({
    titulo: "",
    descricao: "",
    competencias: "",
    salario: "",
    beneficios: "",
    status: "Disponível",
  });

  const adicionarVaga = () => {
    if (!novaVaga.titulo) return alert("Preencha o título");
    setVagas([...vagas, novaVaga]);
    setNovaVaga({ titulo: "", descricao: "", competencias: "", salario: "", beneficios: "", status: "Disponível" });
  };

  const removerVaga = (i) => {
    setVagas(vagas.filter((_, idx) => idx !== i));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand mb-4">Painel de Administração</h1>
      <div className="mb-6 space-y-2">
        <input type="text" placeholder="Título" value={novaVaga.titulo} onChange={(e) => setNovaVaga({ ...novaVaga, titulo: e.target.value })} className="w-full border p-2 rounded" />
        <textarea placeholder="Descrição" value={novaVaga.descricao} onChange={(e) => setNovaVaga({ ...novaVaga, descricao: e.target.value })} className="w-full border p-2 rounded" />
        <input type="text" placeholder="Competências" value={novaVaga.competencias} onChange={(e) => setNovaVaga({ ...novaVaga, competencias: e.target.value })} className="w-full border p-2 rounded" />
        <input type="text" placeholder="Salário" value={novaVaga.salario} onChange={(e) => setNovaVaga({ ...novaVaga, salario: e.target.value })} className="w-full border p-2 rounded" />
        <input type="text" placeholder="Benefícios" value={novaVaga.beneficios} onChange={(e) => setNovaVaga({ ...novaVaga, beneficios: e.target.value })} className="w-full border p-2 rounded" />
        <select value={novaVaga.status} onChange={(e) => setNovaVaga({ ...novaVaga, status: e.target.value })} className="w-full border p-2 rounded">
          <option>Disponível</option>
          <option>Indisponível</option>
        </select>
        <button onClick={adicionarVaga} className="bg-brand text-white px-4 py-2 rounded">Adicionar Vaga</button>
      </div>

      <h2 className="text-xl font-bold mb-2">Vagas Cadastradas</h2>
      <ul className="space-y-2">
        {vagas.map((vaga, i) => (
          <li key={i} className="border p-4 rounded bg-white shadow flex justify-between items-center">
            <span>{vaga.titulo} - {vaga.status}</span>
            <button onClick={() => removerVaga(i)} className="bg-red-600 text-white px-3 py-1 rounded">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
