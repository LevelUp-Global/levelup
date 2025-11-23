import { AboutSection } from "../types/sobre";



export const aboutSections: AboutSection[] = [
    {
      id: 1,
      icon: "👥",
      title: "Grupo LevelUp",
      content: (
        <>
          <p className="text-sm md:text-base text-[var(--cor-texto-principal)] opacity-90 leading-relaxed">
            Nós somos a <strong>LevelUp</strong>, uma equipe de alunos da FIAP
            unidos por uma paixão: usar a tecnologia para impulsionar o potencial
            humano. Nosso nome reflete nossa missão central: criar ferramentas que
            ajudem as pessoas a "subir de nível" em suas vidas e carreiras,
            transformando os desafios do futuro em oportunidades de crescimento.
          </p>
          <p className="mt-3 text-sm md:text-base text-[var(--cor-texto-principal)] opacity-90 leading-relaxed">
            Em 2025, unimos forças para encarar a{" "}
            <strong>Global Solutions FIAP</strong>, um desafio que nos motivou a
            repensar o futuro do mercado de trabalho e como ele influenciará so
            indivíduos de nossa sociedade.
          </p>
        </>
      ),
    },
    {
      id: 2,
      icon: "🎯",
      title: "Nosso Desafio",
      content: (
        <p className="text-sm md:text-base text-[var(--cor-texto-principal)] opacity-90 leading-relaxed">
          O objetivo proposto é claro e ambicioso:{" "}
          Vivemos em um ponto de inflexão.
          <strong>
            {" "}
            A Inteligência Artificial e a automação estão redesenhando o mercado
            de trabalho em uma velocidade sem precedentes.
          </strong>{" "}
          O modelo educacional tradicional não consegue acompanhar, criando uma
          "lacuna de habilidades" (skills gap). O desafio não é apenas ensinar a
          usar novas ferramentas, mas preparar os profissionais para um futuro
          onde o diferencial humano — como o pensamento crítico, a ética em IA e
          a adaptabilidade — será o ativo mais valioso.
        </p>
      ),
    },
    {
      id: 3,
      icon: "💡",
      title: "Nossa Proposta",
      content: (
        <>
          <p className="text-sm md:text-base text-[var(--cor-texto-principal)] opacity-90 leading-relaxed">
            Para enfrentar esse cenário, desenvolvemos a proposta de uma
            plataforma de aprendizado gamificado.{" "}
            <strong>Nossa resposta a esse desafio é a LevelUp:</strong> Em vez de
            aulas passivas, propomos um ecossistema de "missões" interativas,
            trilhas de conhecimento e recompensas virtuais. A LevelUp foca nas
            competências essenciais para as próximas décadas,{" "}
            <strong>
              transformando o aprendizado de habilidades complexas
            </strong>{" "}
            (como "Auditoria de Viés em IA" ou "Design de Futuros") em uma
            jornada engajadora, acessível e contínua.
          </p>
          <p className="mt-3 text-sm md:text-base text-[var(--cor-texto-principal)] opacity-90 leading-relaxed">
            Essa solução é voltada especially para quem quer se adaptar ao
            futuro, mas não só isso, é para quem quer se destacar em um cenário
            em que a tecnologia e inovação estão tomando conta.
          </p>
        </>
      ),
    },
    {
      id: 4,
      icon: "🌍",
      title: "Objetivo Social",
      content: (
        <>
          <p className="text-sm md:text-base text-[var(--cor-texto-principal)] opacity-90 leading-relaxed">
            Nosso foco vai além da tecnologia. O projeto LevelUp busca{" "}
            <strong>democratizar o acesso às competências do futuro</strong>.
            Acreditamos que ninguém deve ser deixado para trás pela revolução
            tecnológica. A LevelUp foi projetada para ser uma{" "}
            <strong>ferramenta de inclusão</strong>, capacitando indivíduos de
            todas as origens a não apenas sobreviverem, mas a prosperarem na
            nova economia digital.{" "}
            <strong>
              Queremos preparar uma geração de profissionais mais críticos,
              éticos e "antifrágeis"
            </strong>
            , prontos para construir um futuro mais justo.
          </p>
          <p className="mt-2 text-sm md:text-base text-[var(--cor-texto-principal)] opacity-90 leading-relaxed">
            Acreditamos que pequenas inovações podem gerar grandes
            transformações — e o nosso compromisso é tornar isso realidade.
          </p>
        </>
      ),
    },
  ];