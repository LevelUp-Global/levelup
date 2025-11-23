import jp from "../assets/integrantes/jp.jpeg";
import matsubara from "../assets/integrantes/matsubara.jpeg";
import pamella from "../assets/integrantes/pamella.jpeg";

import { Member } from "../types/integrante";



export const members: Member[] = [
    {
      id: 1,
      name: "João Pedro Pereira Camilo",
      rm: "562005",
      course: "1TDSPY",
      photo: jp,
      github: "https://github.com/Jppcamilo",
      linkedin: "https://linkedin.com/in/joãopedrocamilo910b83298/",
    },
    {
      id: 2,
      name: "Lucas Matsubara Reis",
      rm: "565020",
      course: "1TDSPY",
      photo: matsubara,
      github: "https://github.com/LucasMatsubara",
      linkedin: "https://www.linkedin.com/in/lucas-matsubara-reis-2179012a4",
    },
    {
      id: 3,
      name: "Pamella Christiny Chaves Brincando",
      rm: "565206",
      course: "1TDSPY",
      photo: pamella,
      github: "https://github.com/pamellachristiny",
      linkedin: "https://www.linkedin.com/in/pamella-christiny",
    },
  ];