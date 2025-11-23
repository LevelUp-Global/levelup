import { Users, Activity, Car } from 'lucide-react';
import { Scenario } from '../types/auditor';

export const scenariosData: Scenario[] = [
  {
    id: 1,
    title: "O Algoritmo de Contratação",
    systemType: "RH Automatizado v2.0",
    imageIcon: <Users className="w-16 h-16 text-[var(--cor-texto-primaria)]/80" />,
    context: "Uma grande tech treinou uma IA para filtrar currículos usando dados históricos dos últimos 10 anos de contratações bem-sucedidas.",
    risk: "Auditoria preliminar mostra que o modelo está penalizando currículos que contêm a palavra 'feminino' (ex: 'clube de xadrez feminino') ou nomes de faculdades historicamente negras.",
    options: [
      {
        id: 'A',
        text: "Remover apenas as variáveis explícitas de gênero e raça do dataset e relançar.",
        isCorrect: false,
        feedback: "Falha na Auditoria. Remover rótulos não basta, pois a IA encontra 'variáveis proxy' (padrões correlacionados, como código postal ou vocabulário) para manter o viés discriminatório.",
        concept: "Viés de Proxy: A IA pode discriminar indiretamente usando dados correlacionados a grupos protegidos."
      },
      {
        id: 'B',
        text: "Aplicar técnicas de 'Desbiasamento de Dados' e rebalancear o dataset histórico antes do treino.",
        isCorrect: true,
        feedback: "Aprovado. Dados históricos refletem preconceitos históricos. Como auditor, você exigiu que o dataset fosse curado para representar o futuro que queremos, não o passado que tivemos.",
        concept: "Justiça Algorítmica (Fairness): Intervenção proativa para corrigir desequilíbrios estatísticos em dados de treino."
      }
    ]
  },
  {
    id: 2,
    title: "A Caixa Preta Médica",
    systemType: "DeepLearning Diagnóstico Oncológico",
    imageIcon: <Activity className="w-16 h-16 text-[var(--cor-texto-primaria)]/80" />,
    context: "Um sistema de Deep Learning detecta câncer de pele com 99% de precisão, superando médicos humanos. Porém, ninguém sabe explicar QUAIS características da imagem a IA está olhando.",
    risk: "Médicos hesitam em usar a ferramenta pois não conseguem validar o raciocínio clínico em casos de falso-positivo.",
    options: [
      {
        id: 'A',
        text: "Aprovar o sistema baseando-se apenas na métrica de precisão superior.",
        isCorrect: false,
        feedback: "Risco Alto. Sem explicabilidade, não podemos saber se a IA está olhando para o tumor ou para uma régua na foto (caso real!). A confiança humana é quebrada.",
        concept: "Problema da Caixa Preta (Black Box): Modelos de alta performance muitas vezes são opacos, impedindo a validação de segurança."
      },
      {
        id: 'B',
        text: "Exigir a implementação de XAI (Explainable AI) com mapas de calor (SHAP/LIME).",
        isCorrect: true,
        feedback: "Excelente decisão. Ao exigir mapas de calor que mostram onde a IA 'olhou', você permite que médicos validem se a decisão tem fundamento clínico.",
        concept: "XAI (Explainable AI): Conjunto de métodos que torna os resultados de sistemas de IA compreensíveis para humanos."
      }
    ]
  },
  {
    id: 3,
    title: "O Carro Autônomo Utilitarista",
    systemType: "Módulo de Decisão de Emergência",
    imageIcon: <Car className="w-16 h-16 text-[var(--cor-texto-primaria)]/80" />,
    context: "Em um cenário inevitável de acidente, o carro autônomo deve escolher entre atropelar um pedestre ou colidir contra um muro, ferindo o passageiro.",
    risk: "A engenharia sugere um ajuste para sempre priorizar a vida do passageiro (o cliente pagante) para aumentar as vendas.",
    options: [
      {
        id: 'A',
        text: "Vetar a lógica de priorização comercial. Implementar diretrizes éticas universais.",
        isCorrect: true,
        feedback: "Integridade Mantida. A ética não pode ser um recurso premium. Decisões de vida ou morte devem seguir pactos sociais, não lógica de mercado.",
        concept: "Alinhamento de Valores: Garantir que objetivos da IA estejam alinhados com valores humanos amplos, não apenas métricas de negócio."
      },
      {
        id: 'B',
        text: "Permitir que o usuário configure a 'ética' do carro nas configurações.",
        isCorrect: false,
        feedback: "Perigoso. Transferir responsabilidade ética complexa para o usuário final ('Moral Crumple Zone') cria caos legal e social.",
        concept: "Responsabilidade Moral (Accountability): Quem é responsável quando a IA falha? O criador não pode lavar as mãos."
      }
    ]
  }
];