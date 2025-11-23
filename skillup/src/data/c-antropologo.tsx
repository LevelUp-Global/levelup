import { Users, MessageSquare, Globe } from 'lucide-react';
import { Scenario } from '../types/antropologo';

export const scenariosData: Scenario[] = [
  {
    id: 1,
    title: "O Silêncio no Zoom",
    imageIcon: <Users className="w-16 h-16 text-blue-500" />,
    context: "Você está observando uma reunião de sprint entre um gerente de produto de Nova York (cultura de baixo contexto) e desenvolvedores de Tóquio (cultura de alto contexto).",
    problem: "O gerente pergunta: 'Alguém vê algum problema neste prazo?'. Ouve-se um silêncio absoluto de 10 segundos. O gerente assume que todos concordaram e encerra a chamada satisfeito.",
    options: [
      {
        id: 'A',
        text: "Intervir e dizer ao gerente que o silêncio significa concordância absoluta.",
        isCorrect: false,
        feedback: "Erro Crítico. Em culturas de alto contexto, o silêncio muitas vezes indica desacordo ou a necessidade de reflexão coletiva antes de expor uma opinião contrária à hierarquia.",
        concept: "Contexto Cultural (Hall): Em culturas de alto contexto, a comunicação é implícita. O silêncio é uma resposta ativa, não ausência de resposta."
      },
      {
        id: 'B',
        text: "Sugerir um canal assíncrono anônimo para feedback pós-reunião.",
        isCorrect: true,
        feedback: "Excelente! Você criou um espaço seguro ('Psychological Safety') para que opiniões divergentes surjam sem causar constrangimento público ('Saving Face').",
        concept: "Empatia Sistêmica: Adaptar a ferramenta (tecnologia) para acomodar diferentes normas sociais, em vez de forçar comportamentos."
      }
    ]
  },
  {
    id: 2,
    title: "A Guerra dos Emojis",
    imageIcon: <MessageSquare className="w-16 h-16 text-yellow-500" />,
    context: "No Slack da empresa, um desenvolvedor Sênior responde a um pedido urgente de um estagiário apenas com um emoji de 'Joinha' (👍).",
    problem: "O estagiário se sente ofendido e desvalorizado, achando a resposta sarcástica e dismissiva. O clima na equipe azeda.",
    options: [
      {
        id: 'A',
        text: "Proibir o uso de emojis para assuntos sérios na empresa.",
        isCorrect: false,
        feedback: "Abordagem reativa. Remover a expressividade digital torna a comunicação fria e não resolve o problema da interpretação.",
        concept: "Semiótica Digital: Sinais visuais carregam significados diferentes dependendo da geração e da cultura organizacional."
      },
      {
        id: 'B',
        text: "Criar um 'Glossário Semiótico da Equipe' definindo tons e intenções.",
        isCorrect: true,
        feedback: "Perfeito. Como antropólogo, você não julga o sinal, mas ajuda o grupo a concordar sobre o significado compartilhado daquele símbolo na tribo digital.",
        concept: "Cultura de Tribo: Grupos virtuais precisam criar seus próprios rituais e significados para gerar coesão."
      }
    ]
  },
  {
    id: 3,
    title: "O Burnout Invisível",
    imageIcon: <Globe className="w-16 h-16 text-purple-500" />,
    context: "A equipe é distribuída globalmente. O líder elogia constantemente quem responde mensagens às 3h da manhã, chamando-os de 'heróis'.",
    problem: "Membros da equipe começam a competir para ver quem fica online até mais tarde, mas a produtividade real está caindo.",
    options: [
      {
        id: 'A',
        text: "Implementar a regra de 'Horas Douradas' e comunicação assíncrona por padrão.",
        isCorrect: true,
        feedback: "Visão Sistêmica! Você identificou que a tecnologia (notificações) estava moldando um comportamento biológico destrutivo e interviu na estrutura.",
        concept: "Tecnologia e Comportamento: Ferramentas 'always-on' criam ansiedade. O Antropólogo Digital desenha rituais de desconexão."
      },
      {
        id: 'B',
        text: "Oferecer bônus financeiro para quem trabalha fora do horário.",
        isCorrect: false,
        feedback: "Isso apenas incentiva o comportamento tóxico que leva ao colapso da equipe a longo prazo.",
        concept: "Sustentabilidade Humana: Liderança global exige respeito aos ritmos circadianos e contextos locais."
      }
    ]
  }
];