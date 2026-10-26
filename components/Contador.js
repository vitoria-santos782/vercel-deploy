"use client";

import { useEffect, useState } from "react";

const FIM = new Date(
  process.env.NEXT_PUBLIC_FIM_SEMESTRE || "2026-12-10T23:59:59-04:00"
);

const dois = (n) => String(n).padStart(2, "0");

function calcular(agora) {
  const total = Math.max(0, FIM.getTime() - agora.getTime());
  const s = Math.floor(total / 1000);
  return {
    encerrado: total === 0,
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    minutos: Math.floor((s % 3600) / 60),
    segundos: s % 60,
  };
}

export default function Contador() {
  const [agora, setAgora] = useState(null);

  useEffect(() => {
    setAgora(new Date());
    const id = setInterval(() => setAgora(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = agora ? calcular(agora) : null;
  const blocos = [
    ["dias", t ? String(t.dias).padStart(3, "0") : "---"],
    ["horas", t ? dois(t.horas) : "--"],
    ["minutos", t ? dois(t.minutos) : "--"],
    ["segundos", t ? dois(t.segundos) : "--"],
  ];

  return (
    <section className="relogio" aria-labelledby="titulo-relogio">
      <p className="hora-atual" suppressHydrationWarning>
        {agora
          ? agora.toLocaleTimeString("pt-BR", { timeZone: "America/Campo_Grande" })
          : "--:--:--"}
        <span> em Campo Grande, MS</span>
      </p>

      <h1 id="titulo-relogio">
        {t?.encerrado ? "O semestre acabou" : "Falta isto para o fim do semestre"}
      </h1>

      <div className="blocos" role="timer" aria-live="off">
        {blocos.map(([rotulo, valor], i) => (
          <div className={`bloco ${i === 3 ? "bloco-seg" : ""}`} key={rotulo}>
            <span className="digitos">{valor}</span>
            <span className="rotulo">{rotulo}</span>
          </div>
        ))}
      </div>

      <p className="fim-data">
        Fim do semestre:{" "}
        {FIM.toLocaleDateString("pt-BR", {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "America/Campo_Grande",
        })}
      </p>
    </section>
  );
}
