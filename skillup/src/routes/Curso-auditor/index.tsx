import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Scale, 
  ArrowLeft, 
  Award, 
  Lock, 
  AlertOctagon, 
  CheckCircle2,
  Binary,
  Brain,
  Terminal
} from 'lucide-react';

import { Option } from '../../types/auditor';
import { scenariosData } from '../../data/c-auditor';

export default function AuditorIA() {
  useEffect(() => {
    document.title = "Curso: Auditor de Ética em IA | LevelUp";
  }, []);

  // Estado do Jogo
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [integrityLevel, setIntegrityLevel] = useState(50); 
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTheory, setShowTheory] = useState(false);

  // Lógica do Jogo
  const handleOptionSelect = (option: Option) => {
    if (selectedOption) return;

    setSelectedOption(option.id);
    setShowTheory(true);

    if (option.isCorrect) {
      setScore(prev => prev + 100);
      setIntegrityLevel(prev => Math.min(100, prev + 15));
    } else {
      setIntegrityLevel(prev => Math.max(0, prev - 20));
    }
  };

  const nextLevel = () => {
    if (currentScenarioIndex < scenariosData.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowTheory(false);
    } else {
      setIsCompleted(true);
    }
  };

  const restartGame = () => {
    setCurrentScenarioIndex(0);
    setScore(0);
    setIntegrityLevel(50);
    setSelectedOption(null);
    setIsCompleted(false);
    setShowTheory(false);
  };

  const currentScenario = scenariosData[currentScenarioIndex];

  return (
    <div className="min-h-screen bg-[var(--cor-fundo)] text-[var(--cor-texto-primaria)] font-sans selection:bg-[var(--cor-destaque)] selection:text-white pb-20 transition-colors duration-300">
      
      {/* Background Decorativo */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-30">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 2px 2px, var(--cor-texto-primaria) 1px, transparent 0)`,
               backgroundSize: '40px 40px', 
               opacity: 0.1 
             }}>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[var(--cor-texto-primaria)]/10 bg-[var(--cor-fundo)]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/carreira" className="flex items-center gap-2 text-[var(--cor-texto-primaria)]/60 hover:text-[var(--cor-texto-primaria)] transition-colors">
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Voltar para Carreiras</span>
          </Link>
          <div className="flex items-center gap-2 font-bold text-[var(--cor-texto-primaria)]">
            <Terminal className="text-[var(--cor-destaque)]" size={20} />
            <span>SIMULAÇÃO: <span className="text-[var(--cor-destaque)]">AUDITOR DE ÉTICA</span></span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10">
              <Binary size={14} className="text-[var(--cor-destaque)]" />
              <span className="font-mono text-[var(--cor-texto-primaria)]">{score} XP</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {!isCompleted ? (
          <div className="grid gap-8 animate-fade-in">
            {/* HUD / Status Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10 rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Scale size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--cor-texto-primaria)]/60">Integridade do Sistema</span>
                    <span className={integrityLevel > 70 ? "text-green-500" : integrityLevel < 40 ? "text-red-500" : "text-yellow-500"}>
                      {integrityLevel}%
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--cor-texto-primaria)]/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ease-out ${integrityLevel > 70 ? "bg-green-500" : integrityLevel < 40 ? "bg-red-500" : "bg-yellow-500"}`}
                      style={{ width: `${integrityLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10 rounded-xl p-4 flex flex-col justify-center items-center backdrop-blur-sm">
                <span className="text-xs text-[var(--cor-texto-primaria)]/60 uppercase tracking-wider mb-1">Cenário Atual</span>
                <span className="text-2xl font-bold text-[var(--cor-texto-primaria)]">{currentScenarioIndex + 1} <span className="text-[var(--cor-texto-primaria)]/40 text-lg">/ {scenariosData.length}</span></span>
              </div>
            </div>

            {/* Área do Cenário */}
            <div className="relative bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
              {/* Visual do Cenário */}
              <div className="bg-[var(--cor-texto-primaria)]/5 p-8 border-b border-[var(--cor-texto-primaria)]/10 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="p-4 bg-[var(--cor-texto-primaria)]/10 rounded-2xl border border-[var(--cor-texto-primaria)]/5 shadow-inner">
                  {currentScenario.imageIcon}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-[var(--cor-texto-primaria)]/10 text-[var(--cor-texto-primaria)]/60 text-xs font-mono uppercase">
                      {currentScenario.systemType}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--cor-texto-primaria)]">{currentScenario.title}</h2>
                  <div className="flex items-center gap-2 text-[var(--cor-destaque)] text-sm font-mono bg-[var(--cor-destaque)]/10 w-fit px-2 py-1 rounded">
                    <AlertOctagon size={14} />
                    RISCO DETECTADO
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-4 text-lg leading-relaxed text-[var(--cor-texto-primaria)]/80">
                  <p><strong className="text-[var(--cor-texto-primaria)]">CONTEXTO:</strong> {currentScenario.context}</p>
                  <p className="p-4 bg-red-500/10 border-l-4 border-red-500 text-[var(--cor-texto-primaria)] rounded-r">
                    <ShieldAlert className="inline mr-2 -mt-1 w-5 h-5 text-red-500" />
                    {currentScenario.risk}
                  </p>
                  <p className="text-sm text-[var(--cor-texto-primaria)]/50 italic">Como Auditor Ético, qual é sua intervenção?</p>
                </div>

                {/* Opções */}
                <div className="grid gap-4 mt-8">
                  {currentScenario.options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    const isRevealed = selectedOption !== null;
                    
                    let buttonStyle = "border-[var(--cor-texto-primaria)]/20 hover:bg-[var(--cor-texto-primaria)]/5 hover:border-[var(--cor-texto-primaria)]/40"; 
                    if (isRevealed) {
                      if (option.isCorrect) {
                        buttonStyle = "bg-green-500/20 border-green-500/50 text-[var(--cor-texto-primaria)]"; 
                      } else if (isSelected && !option.isCorrect) {
                        buttonStyle = "bg-red-500/20 border-red-500/50 text-[var(--cor-texto-primaria)] opacity-70"; 
                      } else {
                        buttonStyle = "opacity-40 border-transparent cursor-not-allowed"; 
                      }
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleOptionSelect(option)}
                        disabled={isRevealed}
                        className={`
                          w-full text-left p-6 rounded-xl border transition-all duration-300
                          flex items-start gap-4 group
                          ${buttonStyle}
                        `}
                      >
                        <div className={`
                          w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold border
                          ${isRevealed && option.isCorrect ? 'bg-green-500 border-green-400 text-black' : 'bg-[var(--cor-texto-primaria)]/10 border-[var(--cor-texto-primaria)]/20 text-[var(--cor-texto-primaria)] group-hover:scale-110 transition-transform'}
                        `}>
                          {isRevealed && option.isCorrect ? <CheckCircle2 size={18} /> : option.id}
                        </div>
                        <span className="text-lg text-[var(--cor-texto-primaria)]">{option.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {showTheory && selectedOption && (
                  <div className="mt-8 animate-fade-in-up">
                    <div className={`
                      p-6 rounded-xl border 
                      ${currentScenario.options.find(o => o.id === selectedOption)?.isCorrect 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : 'bg-red-500/10 border-red-500/30'}
                    `}>
                      <h3 className="font-bold text-xl mb-2 flex items-center gap-2 text-[var(--cor-texto-primaria)]">
                        {currentScenario.options.find(o => o.id === selectedOption)?.isCorrect 
                          ? <><CheckCircle2 className="text-green-500" /> Decisão Aprovada</> 
                          : <><Lock className="text-red-500" /> Decisão Vetada</>}
                      </h3>
                      <p className="text-[var(--cor-texto-primaria)]/80 mb-4">
                        {currentScenario.options.find(o => o.id === selectedOption)?.feedback}
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-[var(--cor-texto-primaria)]/10">
                        <h4 className="text-[var(--cor-destaque)] font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Brain size={16} />
                          Protocolo Ético
                        </h4>
                        <p className="text-[var(--cor-texto-primaria)] font-medium italic">
                          "{currentScenario.options.find(o => o.id === selectedOption)?.concept}"
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button 
                        onClick={nextLevel}
                        className="
                          px-8 py-4 bg-[var(--cor-destaque)] text-white font-bold rounded-lg 
                          shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]
                          transition-all hover:scale-105 flex items-center gap-2
                        "
                      >
                        {currentScenarioIndex < scenariosData.length - 1 ? 'Próximo Caso' : 'Ver Resultado Final'}
                        <ArrowLeft className="rotate-180" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* TELA DE RESULTADO */
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up space-y-8 py-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[var(--cor-destaque)] blur-[80px] opacity-40"></div>
              <Award className="w-32 h-32 text-[var(--cor-destaque)] relative z-10 mx-auto drop-shadow-2xl" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-[var(--cor-texto-primaria)]">Auditoria Finalizada</h2>
              <p className="text-xl text-[var(--cor-texto-primaria)]/60">Você protegeu o futuro contra vieses digitais.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10 p-8 rounded-2xl">
              <div className="text-center border-r border-[var(--cor-texto-primaria)]/10">
                <p className="text-[var(--cor-texto-primaria)]/60 text-sm uppercase">XP Total</p>
                <p className="text-4xl font-bold text-yellow-500">{score}</p>
              </div>
              <div className="text-center">
                <p className="text-[var(--cor-texto-primaria)]/60 text-sm uppercase">Integridade</p>
                <p className={`text-4xl font-bold ${integrityLevel > 70 ? 'text-green-500' : 'text-orange-500'}`}>
                  {integrityLevel}%
                </p>
              </div>
            </div>

            <div className="p-6 bg-[var(--cor-destaque)]/10 border border-[var(--cor-destaque)]/30 rounded-xl text-left">
              <h3 className="font-bold text-[var(--cor-destaque)] mb-2">O que você aprendeu:</h3>
              <ul className="space-y-2 text-[var(--cor-texto-primaria)]/80 text-sm">
                <li className="flex gap-2"><CheckCircle2 size={16} className="mt-1 text-green-500 shrink-0" /> Identificar Vieses de Proxy em datasets</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="mt-1 text-green-500 shrink-0" /> Exigir XAI (Explainable AI) em sistemas críticos</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="mt-1 text-green-500 shrink-0" /> Priorizar valores éticos sobre métricas de lucro</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <button 
                onClick={restartGame}
                className="px-6 py-3 rounded-lg border border-[var(--cor-texto-primaria)]/20 text-[var(--cor-texto-primaria)] hover:bg-[var(--cor-texto-primaria)]/10 transition-colors"
              >
                Nova Auditoria
              </button>
              <Link 
                to="/carreira"
                className="px-8 py-3 rounded-lg bg-[var(--cor-destaque)] text-white font-bold hover:brightness-110 transition-all shadow-lg"
              >
                Continuar Jornada
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}