import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, Info, Lock } from 'lucide-react';

import { coursesData } from '../../data/carreira'; 

export default function Carreira() {
  useEffect(() => {
    document.title = "Carreira | LevelUp";
  }, []);

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen py-16 px-6 bg-[var(--cor-primaria-clara)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-[var(--cor-texto-primaria)] mb-4">
            Construa sua própria história
          </h1>
          <p className="text-lg md:text-xl text-[var(--cor-texto-primaria)] opacity-90 max-w-4xl mx-auto">
            Escolha uma das carreiras do futuro abaixo para começar sua jornada de especialização.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {coursesData.map((course) => (
            <div 
              key={course.id}
              className={`
                bg-[var(--cor-texto-primaria)]/5 backdrop-blur-md 
                border border-[var(--cor-texto-primaria)]/10 rounded-xl overflow-hidden 
                transition-all duration-300 hover:bg-[var(--cor-texto-primaria)]/10
                ${expandedId === course.id ? 'ring-2 ring-[var(--cor-destaque)] shadow-lg' : ''}
              `}
            >
              <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[var(--cor-texto-primaria)]/10 rounded-full flex items-center justify-center p-2 shadow-inner">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className={`w-full h-full object-contain drop-shadow-md ${course.status === 'Em Breve' ? 'grayscale opacity-80' : ''}`}
                    />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-[var(--cor-texto-primaria)] mb-2">
                    {course.title}
                  </h2>
                  <span className="text-sm text-[var(--cor-texto-primaria)]/70 uppercase tracking-wider font-semibold">
                    {course.status === 'Em Breve' ? 'Em Desenvolvimento' : 'Carreira do Futuro'}
                  </span>
                </div>

                <button
                  onClick={() => toggleExpanded(course.id)}
                  className="
                    flex items-center gap-2 px-6 py-3 rounded-lg
                    bg-[var(--cor-texto-primaria)]/10 hover:bg-[var(--cor-texto-primaria)]/20 
                    text-[var(--cor-texto-primaria)]
                    font-semibold transition-colors border border-[var(--cor-texto-primaria)]/10
                    whitespace-nowrap
                  "
                >
                  {expandedId === course.id ? 'Fechar' : 'Conhecer'}
                  {expandedId === course.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              <div 
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${expandedId === course.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 border-t border-[var(--cor-texto-primaria)]/10 bg-[var(--cor-fundo)]/30">
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-[var(--cor-destaque)] flex-shrink-0 mt-1" />
                      <p className="text-lg text-[var(--cor-texto-primaria)]/90 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div className="flex justify-end mt-4">
                      {course.status === 'Em Breve' ? (
                        <button 
                          disabled
                          className="
                            flex items-center gap-2 px-8 py-4 rounded-lg
                            bg-gray-500/50 text-[var(--cor-texto-primaria)]/50 
                            font-bold text-lg cursor-not-allowed border border-[var(--cor-texto-primaria)]/10
                          "
                        >
                          Em Breve
                          <Lock size={20} className="opacity-70" />
                        </button>
                      ) : (
                        <Link 
                          to={course.link}
                          className="
                            flex items-center gap-2 px-8 py-4 rounded-lg
                            bg-[var(--cor-destaque)] text-white 
                            font-bold text-lg shadow-lg
                            transition-transform duration-300 hover:scale-105 hover:shadow-xl
                          "
                        >
                          Começar Jornada
                          <ArrowRight size={24} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}