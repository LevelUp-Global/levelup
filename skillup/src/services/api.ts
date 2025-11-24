const BASE = import.meta.env.VITE_API_BASE || "https://gs-java-ditp.onrender.com";

// --- INTERFACES NECESSÁRIAS ---
interface Usuario {
  id: string | number;
  email: string;
  nome: string;
}

interface RespostaAPI {
  data: Usuario;
  // Adicione outras propriedades se o 'r' tiver (como status, ok, etc),
  // mas para o seu uso atual, isso basta para o TS reconhecer 'data'.
}

// --- FUNÇÕES AUXILIARES ---

async function tryParseJson(text: string) {
  try { return text ? JSON.parse(text) : null; } catch { return text; }
}

async function fetchVerbose(url: string, opts?: RequestInit) {
  try {
    const res = await fetch(url, opts);
    const text = await res.text();
    const data = await tryParseJson(text);
    return { url, ok: res.ok, status: res.status, statusText: res.statusText, data, text };
  } catch (err) {
    return { url, ok: false, status: 0, statusText: String(err), data: null, text: String(err) };
  }
}

/* Helper para tentar várias variantes de path */
async function tryCandidates(candidates: string[], opts?: RequestInit) {
  for (const url of candidates) {
    const r = await fetchVerbose(url, opts);
    console.debug("[API] TRY", url, r.status, r.statusText);
    if (r.ok) return r;
  }
  return null;
}

// --- ENDPOINTS USUÁRIO ---

const usuarioCandidatesGET = [
  `${BASE}/usuarios`,
];

export async function getUsuarios() {
  const r = await tryCandidates(usuarioCandidatesGET);
  if (!r) throw new Error("Nenhum endpoint /usuarios disponível (tentei múltiplos paths).");
  return r.data;
}

const usuarioCandidatesPOST = [
  `${BASE}/usuarios`,
];

export async function createUsuario(payload: any) {
  const r = await tryCandidates(
    usuarioCandidatesPOST.map((u) => u),
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!r) throw new Error("Falha ao criar usuário — endpoints testados falharam.");

  // Correção: Tipagem aplicada AQUI, onde 'r' existe
  const response = r as RespostaAPI;

  // Correção: Adicionado o fechamento '}' do if
  if (response.data && (response.data.id || response.data.email || response.data.nome)) {
    return response.data;
  }

  try {
    const all = await getUsuarios();
    const found = (all || []).find((u: any) => u.email === payload.email);
    if (found) return found;
  } catch {
    // ignore fallback error
  }
}

// --- ENDPOINTS PROFESSOR ---

const professorCandidatesGET = [
  `${BASE}/professores`,
];

export async function getProfessores() {
  const r = await tryCandidates(professorCandidatesGET);
  if (!r) throw new Error("Nenhum endpoint /professores disponível.");
  return r.data;
}

const professorCandidatesPOST = [
  `${BASE}/professores`,
];

export async function createProfessor(payload: any) {
  const r = await tryCandidates(professorCandidatesPOST, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!r) throw new Error("Falha ao criar professor — endpoints testados falharam.");

  // Correção: Tipagem aplicada AQUI
  const response = r as RespostaAPI;

  // Correção: Adicionado o fechamento '}' do if
  if (response.data && (response.data.id || response.data.email || response.data.nome)) {
    return response.data;
  }

  try {
    const all = await getProfessores();
    const found = (all || []).find((p: any) => p.email === payload.email);
    if (found) return found;
  } catch {}
}


// --- OUTROS ENDPOINTS ---

const challengeCandidatesGET = [
  `${BASE}/challenge`,
  `${BASE}/challenges`,
  `${BASE}/api/challenge`,
  `${BASE}/api/challenges`,
];

export async function getChallenges() {
  const r = await tryCandidates(challengeCandidatesGET);
  if (!r) throw new Error("Nenhum endpoint /challenge disponível.");
  return r.data;
}

export async function getChallengesByUsuario(id: number | string) {
  const candidates = [
    `${BASE}/challenge/challengesPorUsuario/${id}`,
    `${BASE}/challenges/challengesPorUsuario/${id}`,
    `${BASE}/api/challenge/challengesPorUsuario/${id}`,
    `${BASE}/api/challenges/challengesPorUsuario/${id}`,
  ];
  const r = await tryCandidates(candidates);
  if (!r) throw new Error("Nenhum endpoint de challengesPorUsuario disponível.");
  return r.data;
}

const cursoCandidatesGET = [
  `${BASE}/curso`,
  `${BASE}/cursos`,
  `${BASE}/api/curso`,
  `${BASE}/api/cursos`,
];

export async function getCursos() {
  const r = await tryCandidates(cursoCandidatesGET);
  if (!r) throw new Error("Nenhum endpoint /curso disponível.");
  return r.data;
}