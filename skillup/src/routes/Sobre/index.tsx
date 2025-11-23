import { useEffect } from "react";
import { Check, X } from "lucide-react";
import { plans } from "../../data/planos";


export default function Planos() {
  useEffect(() => {
    document.title = "Nossos Planos";
  }, []);

  return (
    <main className="min-h-screen py-10 px-4 bg-[var(--cor-primaria-clara)]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl text-[var(--cor-texto-principal)] font-extrabold mb-4">
          Escolha sua Jornada
        </h1>
        <p className="text-[var(--cor-texto-principal)]/90 text-lg max-w-4xl mx-auto">
          Invista no seu futuro com o plano ideal para o seu momento profissional.
          Suba de nível com a LevelUp.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col 
              bg-white/90 backdrop-blur-sm 
              rounded-lg shadow-2xl 
              pt-24 pb-8 px-8
              transition-transform duration-300 hover:-translate-y-2
              ${plan.highlight ? 'ring-4 ring-[var(--cor-destaque)]/50 z-10 scale-105 md:scale-110' : ''}
            `}
          >
            <div
              className={`
                absolute -top-6 left-1/2 -translate-x-1/2 w-[85%]
                ${plan.colorTheme} 
                text-white text-center py-6 rounded-lg shadow-lg
              `}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest mb-1 opacity-90">
                {plan.name}
              </h3>
              <div className="flex justify-center items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <span className="text-xs opacity-80 font-medium uppercase">{plan.period}</span>
            </div>

            <div className="flex-1 space-y-4 mb-8 mt-10">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-700">
                  <div className="flex-shrink-0">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-teal-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-400/70" />
                    )}
                  </div>
                  <span className={`text-sm ${!feature.included ? 'text-gray-400 line-through decoration-gray-300' : ''}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              className={`
                w-full py-4 rounded text-white font-bold tracking-wide uppercase text-sm shadow-md transition-colors
                ${plan.buttonColor}
              `}
            >
              Escolher Plano
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}