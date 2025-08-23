import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Vagas from "./pages/Vagas";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

export const VagasContext = React.createContext();
const STORAGE_KEY = "contrat_jobs_v1";

const SEEDS = [
  { titulo: "Auxiliar Administrativo", area: "Administrativo", local: "Franca/SP", modalidade: "Presencial", tipo: "CLT", senioridade: "Júnior", descricao: "Atendimento e apoio a rotinas administrativas.", competencias: "Pacote Office, boa comunicação.", salario: "R$ 2.000", beneficios: "VT, VR", status: "Disponível" },
  { titulo: "Vendedor", area: "Comercial", local: "Franca/SP", modalidade: "Presencial", tipo: "CLT", senioridade: "Pleno", descricao: "Atendimento ao cliente, prospecção de novos negócios.", competencias: "Boa comunicação, técnicas de vendas.", salario: "A combinar", beneficios: "Comissão, bônus", status: "Disponível" },
  { titulo: "Analista de Marketing", area: "Marketing", local: "Remoto", modalidade: "Remoto", tipo: "CLT", senioridade: "Pleno", descricao: "Planejamento de campanhas digitais e redes sociais.", competencias: "Google Ads, Meta Ads", salario: "R$ 3.500", beneficios: "Plano de saúde, VR", status: "Disponível" },
  { titulo: "Desenvolvedor Frontend", area: "Tecnologia", local: "Híbrido", modalidade: "Híbrido", tipo: "PJ", senioridade: "Sênior", descricao: "Desenvolvimento de interfaces em React.", competencias: "React, Tailwind, Git", salario: "R$ 5.000", beneficios: "Home office, VR, plano de saúde", status: "Disponível" },
  { titulo: "Motorista", area: "Operacional", local: "Franca/SP", modalidade: "Presencial", tipo: "CLT", senioridade: "Júnior", descricao: "Transporte de pessoas e pequenas cargas.", competencias: "CNH B, experiência", salario: "R$ 2.200", beneficios: "VA, plano de saúde", status: "Indisponível" }
];

export default function App() {
  const [vagas, setVagas] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : SEEDS;
    } catch {
      return SEEDS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(vagas));
    } catch {}
  }, [vagas]);

  const ctx = useMemo(() => ({ vagas, setVagas }), [vagas]);

  return (
    <VagasContext.Provider value={ctx}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </VagasContext.Provider>
  );
}
