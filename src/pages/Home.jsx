import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-10"
    >
      <section className="relative rounded-xl overflow-hidden shadow">
        <img src="https://images.unsplash.com/photo-1529336953121-c9e3ff1e62a8?q=80&w=1920&auto=format&fit=crop" alt="Escritório" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black/50 grid place-items-center px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow">Contrat Gente e Gestão</h1>
            <motion.div
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block bg-[var(--brand)] text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Mais de 50 contratações de qualidade.
            </motion.div>
            <div>
              <Link to="/vagas" className="inline-block bg-[var(--brand)] hover:bg-blue-900 text-white px-6 py-3 rounded-lg shadow transition transform hover:scale-105">
                Ver Vagas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { t: "Atendimento próximo", d: "Unidade física para entrevistas, dinâmicas e treinamentos." },
          { t: "Especialistas em RH", d: "Foco em Recrutamento & Seleção e Departamento Pessoal." },
          { t: "Foco em resultados", d: "Conectamos pessoas e oportunidades com eficiência." },
        ].map((b, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-xl border p-5 text-left shadow-sm bg-white">
            <div className="font-semibold text-slate-800">{b.t}</div>
            <p className="text-slate-600 text-sm mt-1">{b.d}</p>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}
