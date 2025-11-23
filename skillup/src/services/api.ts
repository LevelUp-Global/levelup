// src/services/api.ts
const BASE = import.meta.env.VITE_API_BASE || "https://gs-java-ditp.onrender.com";

/* Helper para tentar várias variantes de path */
async function tryCandidates(candidates: string[], opts?: RequestInit) {
  for (const url of candidates) {
    const r = await fetch(url, opts);
    console.debug("[API] TRY", url, r.status, r.statusText);
    if (r.ok) return r;
  }
  return null;
}

/* ---------- CHALLENGES ---------- */
const challengeCandidatesGET = [
  `${BASE}/challenge`,
  `${BASE}/challenges`,
  `${BASE}/api/challenge`,
  `${BASE}/api/challenges`,
];

export async function getChallenges() {
  const r = await tryCandidates(challengeCandidatesGET);
  if (!r) throw new Error("Nenhum endpoint /challenge disponível.");
  return r.json();
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
  return r.json();
}

/* ---------- CURSOS ---------- */
const cursoCandidatesGET = [
  `${BASE}/curso`,
  `${BASE}/cursos`,
  `${BASE}/api/curso`,
  `${BASE}/api/cursos`,
];

export async function getCursos() {
  const r = await tryCandidates(cursoCandidatesGET);
  if (!r) throw new Error("Nenhum endpoint /curso disponível.");
  return r.json();
}