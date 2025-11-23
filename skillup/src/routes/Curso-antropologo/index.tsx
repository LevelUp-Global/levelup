import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowLeft, 
  Award, 
  Zap, 
  AlertTriangle, 
  CheckCircle2,
  Terminal
} from 'lucide-react';

import { Option } from '../../types/antropologo';
import { scenariosData } from '../../data/c-antropologo';
const scenarios = scenariosData;

export default function AntropologoDigital() {
  useEffect(() => {
    document.title = "Curso: Antropólogo Digital | LevelUp";
  }, []);

  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [empathyLevel, setEmpathyLevel] = useState(50); // 0 a 100
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTheory, setShowTheory] = useState(false);

 

  const handleOptionSelect = (option: Option) => {
    if (selectedOption) return; // Evita múltiplos cliques

    setSelectedOption(option.id);
    setShowTheory(true);

    if (option.isCorrect) {
      setScore(prev => prev + 100);
      setEmpathyLevel(prev => Math.min(100, prev + 15));
    } else {
      setEmpathyLevel(prev => Math.max(0, prev - 15));
    }
  };

  const nextLevel = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
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
    setEmpathyLevel(50);
    setSelectedOption(null);
    setIsCompleted(false);
    setShowTheory(false);
  };

  const currentScenario = scenarios[currentScenarioIndex];

  return (
    <div className="min-h-screen bg-[var(--cor-fundo)] text-[var(--cor-texto-primaria)] font-sans selection:bg-[var(--cor-destaque)] selection:text-white pb-20 transition-colors duration-300">
      
      <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--cor-destaque)] opacity-5 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 opacity-5 blur-[100px]"></div>
      </div>

      <header className="border-b border-[var(--cor-texto-primaria)]/10 bg-[var(--cor-fundo)]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/carreira" className="flex items-center gap-2 text-[var(--cor-texto-primaria)]/60 hover:text-[var(--cor-texto-primaria)] transition-colors">
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Voltar para Carreiras</span>
          </Link>
          <div className="flex items-center gap-2 font-bold text-[var(--cor-texto-primaria)]">
            <Terminal className="text-[var(--cor-destaque)]" size={20} />
            <span>SIMULAÇÃO: <span className="text-[var(--cor-destaque)]">ANTROPÓLOGO DIGITAL</span></span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10">
              <Award size={16} className="text-yellow-500" />
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
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Brain size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--cor-texto-primaria)]/60">Nível de Coesão da Equipe</span>
                    <span className={empathyLevel > 70 ? "text-green-500" : empathyLevel < 30 ? "text-red-500" : "text-yellow-500"}>
                      {empathyLevel}%
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--cor-texto-primaria)]/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ease-out ${empathyLevel > 70 ? "bg-green-500" : empathyLevel < 30 ? "bg-red-500" : "bg-yellow-500"}`}
                      style={{ width: `${empathyLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10 rounded-xl p-4 flex flex-col justify-center items-center backdrop-blur-sm">
                <span className="text-xs text-[var(--cor-texto-primaria)]/60 uppercase tracking-wider mb-1">Cenário Atual</span>
                <span className="text-2xl font-bold text-[var(--cor-texto-primaria)]">{currentScenarioIndex + 1} <span className="text-[var(--cor-texto-primaria)]/40 text-lg">/ {scenarios.length}</span></span>
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
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--cor-texto-primaria)]">{currentScenario.title}</h2>
                  <div className="flex items-center gap-2 text-[var(--cor-destaque)] text-sm font-mono bg-[var(--cor-destaque)]/10 w-fit px-2 py-1 rounded">
                    <Zap size={14} />
                    SINAL DETECTADO
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-4 text-lg leading-relaxed text-[var(--cor-texto-primaria)]/80">
                  <p><strong className="text-[var(--cor-texto-primaria)]">CONTEXTO:</strong> {currentScenario.context}</p>
                  <p className="p-4 bg-red-500/10 border-l-4 border-red-500 text-[var(--cor-texto-primaria)] rounded-r">
                    <AlertTriangle className="inline mr-2 -mt-1 w-5 h-5 text-red-500" />
                    {currentScenario.problem}
                  </p>
                  <p className="text-sm text-[var(--cor-texto-primaria)]/50 italic">Como Antropólogo Digital, qual é sua intervenção?</p>
                </div>

                {/* Opções */}
                <div className="grid gap-4 mt-8">
                  {currentScenario.options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    const isRevealed = selectedOption !== null;
                    
                    let buttonStyle = "border-[var(--cor-texto-primaria)]/20 hover:bg-[var(--cor-texto-primaria)]/5 hover:border-[var(--cor-texto-primaria)]/40"; // Default
                    if (isRevealed) {
                      if (option.isCorrect) {
                        buttonStyle = "bg-green-500/20 border-green-500/50 text-[var(--cor-texto-primaria)]"; // Correct
                      } else if (isSelected && !option.isCorrect) {
                        buttonStyle = "bg-red-500/20 border-red-500/50 text-[var(--cor-texto-primaria)] opacity-70"; // Wrong & Selected
                      } else {
                        buttonStyle = "opacity-40 border-transparent cursor-not-allowed"; // Others
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

                {/* Feedback e Teoria (Aparece após escolha) */}
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
                          ? <><CheckCircle2 className="text-green-500" /> Análise Correta</> 
                          : <><AlertTriangle className="text-red-500" /> Falha na Leitura Cultural</>}
                      </h3>
                      <p className="text-[var(--cor-texto-primaria)]/80 mb-4">
                        {currentScenario.options.find(o => o.id === selectedOption)?.feedback}
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-[var(--cor-texto-primaria)]/10">
                        <h4 className="text-[var(--cor-destaque)] font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Brain size={16} />
                          Download de Conhecimento
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
                        {currentScenarioIndex < scenarios.length - 1 ? 'Próximo Desafio' : 'Ver Resultado Final'}
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
              <h2 className="text-4xl font-bold text-[var(--cor-texto-primaria)]">Simulação Concluída</h2>
              <p className="text-xl text-[var(--cor-texto-primaria)]/60">Você deu os primeiros passos na Antropologia Digital.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10 p-8 rounded-2xl">
              <div className="text-center border-r border-[var(--cor-texto-primaria)]/10">
                <p className="text-[var(--cor-texto-primaria)]/60 text-sm uppercase">XP Total</p>
                <p className="text-4xl font-bold text-yellow-500">{score}</p>
              </div>
              <div className="text-center">
                <p className="text-[var(--cor-texto-primaria)]/60 text-sm uppercase">Empatia Sistêmica</p>
                <p className={`text-4xl font-bold ${empathyLevel > 70 ? 'text-green-500' : 'text-orange-500'}`}>
                  {empathyLevel}%
                </p>
              </div>
            </div>

            <div className="p-6 bg-[var(--cor-destaque)]/10 border border-[var(--cor-destaque)]/30 rounded-xl text-left">
              <h3 className="font-bold text-[var(--cor-destaque)] mb-2">O que você aprendeu:</h3>
              <ul className="space-y-2 text-[var(--cor-texto-primaria)]/80 text-sm">
                <li className="flex gap-2"><CheckCircle2 size={16} className="mt-1 text-green-500 shrink-0" /> Ler contextos culturais (Alto vs. Baixo Contexto)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="mt-1 text-green-500 shrink-0" /> Entender a semiótica dos emojis e comunicação digital</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="mt-1 text-green-500 shrink-0" /> Proteger o bem-estar da equipe contra o "Always-on"</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <button 
                onClick={restartGame}
                className="px-6 py-3 rounded-lg border border-[var(--cor-texto-primaria)]/20 text-[var(--cor-texto-primaria)] hover:bg-[var(--cor-texto-primaria)]/10 transition-colors"
              >
                Jogar Novamente
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