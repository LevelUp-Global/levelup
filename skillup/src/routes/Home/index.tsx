import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Brain, Trophy, ArrowRight, Target, Users, Star } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    document.title = "LevelUp - Home";
  }, []);

  return (
    <div className="min-h-screen text-[var(--cor-texto-primaria)] bg-[var(--cor-primaria-clara)] overflow-hidden transition-colors duration-300">
      
      <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--cor-destaque)] opacity-5 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600 opacity-5 blur-[100px]"></div>
      </div>

      <section className="relative pt-20 pb-16 px-6 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--cor-destaque)] animate-pulse"></span>
              <span className="text-sm font-medium text-[var(--cor-texto-primaria)]/80 tracking-wide">O Futuro do Trabalho Chegou</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Suba de Nível na <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cor-destaque)] via-pink-500 to-purple-600">
                Sua Carreira
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--cor-texto-primaria)]/70 max-w-xl leading-relaxed">
              A plataforma gamificada que transforma o aprendizado em conquista. 
              Desenvolva as Hard e Soft Skills mais requisitadas pelo mercado do amanhã.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/carreira"
                className="
                  flex items-center justify-center gap-2 px-8 py-4 rounded-lg
                  bg-[var(--cor-destaque)] text[var(--cor-texto-secundario)] font-bold text-lg
                  shadow-[0_0_20px_rgba(234,88,12,0.3)]
                  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]
                "
              >
                <Rocket size={24} />
                Explorar Carreiras
              </Link>
              
              <Link 
                to="/sobre"
                className="
                  flex items-center justify-center gap-2 px-8 py-4 rounded-lg
                  bg-[var(--cor-texto-primaria)]/5 text-[var(--cor-texto-primaria)] font-semibold text-lg
                  border border-[var(--cor-texto-primaria)]/10 backdrop-blur-sm
                  transition-all duration-300 hover:bg-[var(--cor-texto-primaria)]/10
                "
              >
                Saiba Mais
              </Link>
            </div>
            
            
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--cor-destaque)]/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 p-4 animate-float">
              <div className="space-y-4 mt-12">
                <CardFeature 
                  icon={<Brain className="text-purple-500" size={32} />}
                  title="Neurociência"
                  desc="Foco e produtividade"
                />
                <CardFeature 
                  icon={<Target className="text-blue-500" size={32} />}
                  title="Objetivos"
                  desc="Metas claras"
                />
              </div>
              <div className="space-y-4">
                <CardFeature 
                  icon={<Trophy className="text-yellow-500" size={32} />}
                  title="Gamificação"
                  desc="Aprenda jogando"
                />
                <CardFeature 
                  icon={<Users className="text-pink-500" size={32} />}
                  title="Comunidade"
                  desc="Networking global"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--cor-texto-primaria)]/10 bg-[var(--cor-texto-primaria)]/5 backdrop-blur-sm">
        
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--cor-texto-primaria)]">
              Por que escolher a <span className="text-[var(--cor-destaque)]">LevelUp</span>?
            </h2>
            <p className="text-[var(--cor-texto-primaria)]/60 text-lg max-w-2xl mx-auto">
              Não somos apenas uma escola. Somos um ecossistema de evolução contínua projetado para o profissional do século 21.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Trophy size={40} className="text-yellow-500" />}
              title="Sistema de Gamificação"
              description="Ganhe XP, suba de nível e desbloqueie conquistas reais enquanto aprende. O estudo se torna viciante."
            />
            <FeatureCard 
              icon={<Brain size={40} className="text-purple-500" />}
              title="Metodologia Ativa"
              description="Chega de aulas passivas. Aqui você resolve problemas reais e constrói portfólio desde o dia 1."
            />
            <FeatureCard 
              icon={<Star size={40} className="text-orange-500" />}
              title="Carreiras do Futuro"
              description="Conteúdo atualizado semanalmente focado em IA, Dados, Human Skills e Liderança Adaptativa."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl border border-[var(--cor-texto-primaria)]/20 bg-[var(--cor-texto-primaria)]/5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-[var(--cor-destaque)]/20 -z-10"></div>
          
          <div className="p-12 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cor-texto-primaria)]">Pronto para começar sua jornada?</h2>
            <p className="text-[var(--cor-texto-primaria)]/70 text-lg max-w-2xl mx-auto">
              Escolha seu plano hoje e garanta acesso ilimitado a todas as trilhas de conhecimento.
              O seu "eu do futuro" vai agradecer.
            </p>
            <Link 
              to="/planos"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[var(--cor-texto-primaria)] text-[var(--cor-texto-secundario)] font-bold text-lg rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Ver Planos Disponíveis
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


function CardFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl bg-[var(--cor-texto-primaria)]/5 border border-[var(--cor-texto-primaria)]/10 backdrop-blur-md hover:bg-[var(--cor-texto-primaria)]/10 transition-colors">
      <div className="mb-4 bg-[var(--cor-texto-primaria)]/5 w-fit p-3 rounded-lg">{icon}</div>
      <h3 className="text-xl font-bold mb-1 text-[var(--cor-texto-primaria)]">{title}</h3>
      <p className="text-sm text-[var(--cor-texto-primaria)]/60">{desc}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-gradient-to-b from-[var(--cor-texto-primaria)]/5 to-transparent border border-[var(--cor-texto-primaria)]/10 hover:border-[var(--cor-destaque)] transition-all duration-300 hover:-translate-y-2">
      <div className="mb-6 p-4 bg-[var(--cor-texto-primaria)]/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-[var(--cor-texto-primaria)]">{title}</h3>
      <p className="text-[var(--cor-texto-primaria)]/60 leading-relaxed">
        {description}
      </p>
    </div>
  );
}