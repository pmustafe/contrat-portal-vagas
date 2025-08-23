import React from "react";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-6">
      <h1 className="text-3xl font-bold text-[var(--brand)]">Quem somos</h1>
      <p className="text-slate-700">
        Localizada estrategicamente para melhor atender empresas e profissionais de Franca e região, a nova sede marca um passo importante no nosso compromisso com a excelência em gestão de pessoas e soluções em RH.
      </p>
      <h2 className="text-xl font-semibold">A Contrat Gente e Gestão</h2>
      <p className="text-slate-700">
        A Contrat Gente e Gestão é uma agência especializada em Recrutamento e Seleção e Departamento Pessoal, oferecendo soluções completas e personalizadas para empresas que buscam otimizar seus processos e encontrar os talentos certos para seus times.
      </p>
      <h2 className="text-xl font-semibold">Nossos principais serviços</h2>
      <ul className="list-disc ml-6 space-y-1 text-slate-700">
        <li><strong>Recrutamento e Seleção Personalizado</strong> — Identificação e atração dos melhores profissionais.</li>
        <li><strong>Departamento Pessoal Completo</strong> — Admissões, demissões, folha, benefícios e obrigações legais.</li>
        <li><strong>Consultoria em RH</strong> — Apoio estratégico em gestão de pessoas, clima, cargos e salários.</li>
        <li><strong>Terceirização de Serviços de RH</strong> — Reduza custos e aumente a eficiência.</li>
      </ul>
      <h2 className="text-xl font-semibold">Por que uma nova unidade física?</h2>
      <ul className="list-disc ml-6 space-y-1 text-slate-700">
        <li>Aproximação com nossos clientes e candidatos</li>
        <li>Espaço para entrevistas, dinâmicas e treinamentos</li>
        <li>Mais estrutura para oferecer um atendimento humanizado e ágil</li>
        <li>Ambiente moderno e acolhedor, pensado para conectar talentos e oportunidades</li>
      </ul>
      <div className="rounded-xl overflow-hidden shadow">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop" alt="Equipe" className="w-full h-64 object-cover" />
      </div>
    </motion.div>
  );
}
