import React, { useState } from "react";

export default function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [vagas, setVagas] = useState([]);
  const [novaVaga, setNovaVaga] = useState("");

  const login = () => {
    if (user === "admin" && pass === "admin2024") {
      setLogged(true);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const adicionarVaga = () => {
    if (novaVaga.trim()) {
      setVagas([...vagas, novaVaga]);
      setNovaVaga("");
    }
  };

  const removerVaga = (index) => {
    setVagas(vagas.filter((_, i) => i !== index));
  };

  if (!logged) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="p-6 border rounded-lg shadow w-80 bg-white">
          <h1 className="text-xl font-bold text-brand mb-4">Login</h1>
          <input
            type="text"
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            type="password"
            placeholder="Senha"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
          />
          <button
            onClick={login}
            className="w-full bg-brand text-white py-2 rounded"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light p-6">
      <h1 className="text-2xl font-bold text-brand mb-4">Painel de Vagas</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nova vaga"
          value={novaVaga}
          onChange={(e) => setNovaVaga(e.target.value)}
          className="flex-grow border p-2 rounded-l"
        />
        <button
          onClick={adicionarVaga}
          className="bg-brand text-white px-4 rounded-r"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {vagas.map((vaga, i) => (
          <li
            key={i}
            className="flex justify-between items-center border p-2 rounded bg-white shadow"
          >
            <span>{vaga}</span>
            <button
              onClick={() => removerVaga(i)}
              className="text-red-600 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
