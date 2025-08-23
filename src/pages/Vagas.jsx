import React, { useContext } from "react";
import { VagasContext } from "../App";
import { motion } from "framer-motion";

const whats = (phone, msg) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
const PHONE = "5516992221194";

export default function Vagas() {
  const { vagas } = useContext(VagasContext);
  const abertas = vagas.filter(v => v.status === "Disponível");

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--brand)] mb-6">Vagas disponíveis</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {abertas.map((v, i) => {
          const msg = `Olá! Tenho interesse na vaga ${v.titulo} (${v.local || ""}). Salário: ${v.salario}. Benefícios: ${v.beneficios}.`;
          return (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{v.titulo}</h2>
                <span className="text-xs text-slate-500">{v.modalidade || ""} {v.tipo ? "• " + v.tipo : ""}</span>
              </div>
              <p className="text-slate-700 mt-1">{v.descricao}</p>
              <div className="grid md:grid-cols-2 gap-3 text-sm mt-3">
                <p><strong>Competências:</strong> {v.competencias}</p>
                <p><strong>Salário:</strong> {v.salario}</p>
                <p><strong>Benefícios:</strong> {v.beneficios}</p>
                {v.local && <p><strong>Local:</strong> {v.local}</p>}
              </div>
              <a
                className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                href={whats(PHONE, msg)}
                target="_blank"
                rel="noreferrer"
              >
                Tenho interesse via WhatsApp
              </a>
            </motion.div>
          );
        })}
        {abertas.length === 0 && (
          <div className="col-span-full text-slate-600">Nenhuma vaga aberta no momento.</div>
        )}
      </div>
    </div>
  );
}
