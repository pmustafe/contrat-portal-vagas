import React, { useState } from "react";
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

export default function App() {
  const [vagas, setVagas] = useState([
    {
      titulo: "Auxiliar Administrativo",
      descricao: "Atendimento, organização de documentos, apoio a rotinas administrativas.",
      competencias: "Pacote Office, boa comunicação.",
      salario: "R$ 2.000",
      beneficios: "Vale Transporte, Vale Refeição.",
      status: "Disponível"
    },
    {
      titulo: "Vendedor",
      descricao: "Atendimento ao cliente, prospecção de novos negócios, metas de vendas.",
      competencias: "Boa comunicação, técnicas de vendas.",
      salario: "A combinar",
      beneficios: "Comissão, bônus de desempenho.",
      status: "Disponível"
    },
    {
      titulo: "Analista de Marketing",
      descricao: "Planejamento de campanhas digitais, redes sociais e relatórios.",
      competencias: "Google Ads, Meta Ads, análise de métricas.",
      salario: "R$ 3.500",
      beneficios: "Plano de saúde, VR.",
      status: "Disponível"
    },
    {
      titulo: "Desenvolvedor Frontend",
      descricao: "Desenvolvimento de interfaces responsivas em React.",
      competencias: "React, Tailwind, Git.",
      salario: "R$ 5.000",
      beneficios: "Home office, VR, plano de saúde.",
      status: "Disponível"
    },
    {
      titulo: "Motorista",
      descricao: "Transporte de pessoas e pequenas cargas.",
      competencias: "CNH categoria B, experiência prévia.",
      salario: "R$ 2.200",
      beneficios: "Vale Alimentação, plano de saúde.",
      status: "Indisponível"
    }
  ]);

  return (
    <VagasContext.Provider value={{ vagas, setVagas }}>
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
