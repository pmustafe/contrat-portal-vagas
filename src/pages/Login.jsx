import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && pass === "admin2024") {
      navigate("/admin");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 border rounded shadow w-80 bg-white">
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
        <button onClick={handleLogin} className="w-full bg-brand text-white py-2 rounded">Entrar</button>
      </div>
    </div>
  );
}
