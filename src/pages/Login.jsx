import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-center items-center min-h-[60vh]">
      <div className="p-6 border rounded-xl shadow w-full max-w-sm bg-white">
        <h1 className="text-xl font-bold text-[var(--brand)] mb-4">Login Admin</h1>
        <input type="text" placeholder="Usuário" value={user} onChange={(e) => setUser(e.target.value)} className="w-full border p-2 mb-2 rounded" />
        <input type="password" placeholder="Senha" value={pass} onChange={(e) => setPass(e.target.value)} className="w-full border p-2 mb-4 rounded" />
        <button onClick={handleLogin} className="w-full bg-[var(--brand)] hover:bg-blue-900 text-white py-2 rounded transition">Entrar</button>
      </div>
    </motion.div>
  );
}
