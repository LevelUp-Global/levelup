import { useState, useEffect } from 'react';

import { faqItems } from '../../data/faq';


export default function FAQ() {
    useEffect(() => {
        document.title = "FAQ";
        }, []);

  const [expandedId, setExpandedId] = useState<number | null>(null);

  

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen py-16 px-6 bg-[var(--cor-primaria-clara)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-[var(--cor-texto-principal)] mb-4">
            FAQ - Dúvidas Frequentes
          </h1>
          <p className="text-base md:text-lg text-[var(--cor-texto-principal)] opacity-90 leading-relaxed max-w-4xl mx-auto">
            Entenda como funciona a The LevelUp, a plataforma certa para preparação de profissonais que desejam se adaptar ao futuro do mercado de trabalho.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-xl border border-[rgba(255,255,255,0.2)] overflow-hidden transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] "
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 md:px-8 py-4 md:py-5 flex items-start md:items-center gap-4 text-left hover:bg-[rgba(255,255,255,0.1)] transition-colors "
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
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedId === item.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 py-4 md:py-5 border-t border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.08)]">
                  <p className="text-sm md:text-base text-[var(--cor-texto-principal)] opacity-90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
