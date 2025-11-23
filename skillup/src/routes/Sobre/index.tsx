import { useState, useEffect } from "react";

import { aboutSections } from "../../data/sobres";


export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre Nós";
  }, []);

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen py-16 px-6 bg-[var(--cor-primaria-clara)]">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl text-[var(--cor-texto-principal)] font-extrabold">
          Sobre Nós
        </h1>
        <p className="text-[var(--cor-texto-principal)]/90 mt-3 text-base md:text-lg max-w-4xl mx-auto">
          Conheça a equipe LevelUp e o projeto desenvolvido para a preparação
          do futuro do mercado de trabalho.
        </p>
      </header>

      <section
        className="space-y-4 max-w-5xl mx-auto"
        aria-label="Informações sobre o grupo LevelUp"
      >
        {aboutSections.map((item) => (
          <div
            key={item.id}
            className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-xl border border-[rgba(255,255,255,0.2)] overflow-hidden transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)]"
          >
            <button
              onClick={() => toggleExpanded(item.id)}
              className="w-full px-6 md:px-8 py-4 md:py-5 flex items-start md:items-center gap-4 text-left hover:bg-[rgba(255,255,255,0.1)] transition-colors"
            >
              <span className="text-3xl md:text-4xl flex-shrink-0 mt-1">{item.icon}</span>
              
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-lg md:text-xl text-[var(--cor-texto-principal)]">
                  {item.title}
                </h2>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 text-[var(--cor-texto-principal)] transition-transform duration-300 ${
                  expandedId === item.id ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedId === item.id ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 md:px-8 py-4 md:py-5 border-t border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.08)]">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </section>

      <div />
    </main>
  );
}