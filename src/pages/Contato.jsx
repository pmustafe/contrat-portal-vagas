import React from "react";
import { motion } from "framer-motion";

export default function Contato() {
  return (
    <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-4">
      <h1 className="text-3xl font-bold text-[var(--brand)]">Contato</h1>
      <p><strong>Endereço:</strong> Rua Major Claudiano, 1640, centro, Franca/SP — em frente à Praça da Matriz.</p>
      <p><strong>Telefone:</strong> (16) 99222-1194</p>
      <p><strong>E-mail:</strong> contratrhdp@gmail.com.br</p>
      <p><strong>Redes sociais:</strong> @contratrhdp</p>
      <div className="rounded-xl overflow-hidden shadow">
        <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1400&auto=format&fit=crop" alt="Atendimento" className="w-full h-64 object-cover" />
      </div>
    </motion.div>
  );
}
