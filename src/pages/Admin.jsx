import React, { useContext, useState } from "react";
import { VagasContext } from "../App";
import { motion } from "framer-motion";

export default function Admin() {
  const { vagas, setVagas } = useContext(VagasContext);
  const [nova, setNova] = useState({
    titulo: "", area: "", local: "", modalidade: "Presencial", tipo: "CLT", senioridade: "Júnior",
    descricao: "", competencias: "", salario: "", beneficios: "", status: "Disponível"
  });

  const handle = (k, v) => setNova(n => ({ ...n, [k]: v }));
  const add = () => {
    if (!nova.titulo || !nova.descricao) return alert("Informe pelo menos título e descrição.");
    setVagas([...vagas, nova]);
    setNova({ titulo: "", area: "", local: "", modalidade: "Presencial", tipo: "CLT", senioridade: "Júnior", descricao: "", competencias: "", salario: "", beneficios: "", status: "Disponível" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const removeAt = (i) => setVagas(vagas.filter((_, idx) => idx !== i));
  const toggleStatus = (i) => setVagas(vagas.map((v, idx) => idx === i ? { ...v, status: v.status === "Disponível" ? "Indisponível" : "Disponível" } : v));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className="text-3xl font-bold text-[var(--brand)] mb-4">Painel de Administração</h1>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <input className="border rounded p-2" placeholder="Título" value={nova.titulo} onChange={e => handle("titulo", e.target.value)} />
        <input className="border rounded p-2" placeholder="Área" value={nova.area} onChange={e => handle("area", e.target.value)} />
        <input className="border rounded p-2" placeholder="Local" value={nova.local} onChange={e => handle("local", e.target.value)} />
        <div className="grid grid-cols-3 gap-2">
          <select className="border rounded p-2" value={nova.modalidade} onChange={e => handle("modalidade", e.target.value)}>
            <option>Presencial</option><option>Híbrido</option><option>Remoto</option>
          </select>
          <select className="border rounded p-2" value={nova.tipo} onChange={e => handle("tipo", e.target.value)}>
            <option>CLT</option><option>PJ</option><option>Estágio</option><option>Temporário</option>
          </select>
          <select className="border rounded p-2" value={nova.senioridade} onChange={e => handle("senioridade", e.target.value)}>
            <option>Júnior</option><option>Pleno</option><option>Sênior</option><option>Liderança</option>
          </select>
        </div>
        <textarea className="border rounded p-2 md:col-span-2" placeholder="Descrição" rows="4" value={nova.descricao} onChange={e => handle("descricao", e.target.value)} />
        <input className="border rounded p-2" placeholder="Competências (livre)" value={nova.competencias} onChange={e => handle("competencias", e.target.value)} />
        <input className="border rounded p-2" placeholder="Faixa salarial (ex.: R$ 3.000 ou A combinar)" value={nova.salario} onChange={e => handle("salario", e.target.value)} />
        <input className="border rounded p-2" placeholder="Benefícios (livre)" value={nova.beneficios} onChange={e => handle("beneficios", e.target.value)} />
        <select className="border rounded p-2" value={nova.status} onChange={e => handle("status", e.target.value)}>
          <option>Disponível</option><option>Indisponível</option>
        </select>
        <button onClick={add} className="bg-[var(--brand)] hover:bg-blue-900 text-white rounded p-2 transition">Adicionar Vaga</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Vagas cadastradas</h2>
      <div className="grid gap-3">
        {vagas.map((v, i) => (
          <div key={i} className="rounded-xl border bg-white p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{v.titulo} <span className="text-xs text-slate-500">({v.status})</span></div>
              <div className="text-sm text-slate-600">{v.area ? v.area + " • " : ""}{v.local || ""}{v.modalidade ? " • " + v.modalidade : ""}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => toggleStatus(i)} className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-600 text-white text-sm">Alternar</button>
              <button onClick={() => removeAt(i)} className="px-3 py-1 rounded bg-rose-600 hover:bg-rose-700 text-white text-sm">Remover</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
