import { Course } from "../types/carreira";
import antropologoImg from '../assets/carreiras/antropólogo.png';
import auditorImg from '../assets/carreiras/auditor.png';
import designerImg from '../assets/carreiras/designer.png';
import engenheiroImg from '../assets/carreiras/engenheiro.png';
import mestreImg from '../assets/carreiras/mestre.png';


export const coursesData: Course[] = [
  {
    id: 1,
    title: "O Antropólogo Digital",
    image: antropologoImg,
    description: "Aprenda a ler os sinais culturais em ambientes virtuais. Entenda como a tecnologia molda o comportamento humano e desenvolva a 'empatia sistêmica' necessária para liderar equipes remotas e globais.",
    link: "/cursos/antropologo-digital",
    status: 'Disponível'
  },
  {
    id: 2,
    title: "O Auditor de Ética em IA",
    image: auditorImg,
    description: "Em um mundo automatizado, o diferencial é o julgamento humano. Aprenda a identificar vieses algorítmicos, auditar decisões de IA e garantir que a tecnologia sirva à ética e não apenas ao lucro.",
    link: "/cursos/auditor-ia",
    status: 'Disponível'
  },
  {
    id: 3,
    title: "O Designer de Futuros",
    image: designerImg,
    description: "Pare de reagir e comece a projetar. Domine metodologias de 'Futures Thinking' e 'Speculative Design' para criar cenários estratégicos e antecipar tendências décadas antes de elas acontecerem.",
    link: "/cursos/designer-futuros",
    status: 'Em Breve'
  },
  {
    id: 4,
    title: "O Engenheiro Antifrágil",
    image: engenheiroImg,
    description: "O caos é inevitável; sofrer com ele é opcional. Aprenda a prosperar na volatilidade, transformando erros e crises em combustível para inovação e fortalecimento profissional.",
    link: "/cursos/engenheiro-antifragil",
    status: 'Em Breve'
  },
  {
    id: 5,
    title: "O Mestre do Foco",
    image: mestreImg,
    description: "No mundo da distração, a atenção é o recurso mais valioso. Domine a neurociência cognitiva aplicada para realizar 'Deep Work', gerenciar sua energia mental e produzir com qualidade superior.",
    link: "/cursos/mestre-foco",
    status: 'Em Breve'
  }
];