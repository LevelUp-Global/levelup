// src/services/gsAuth.ts
export interface UsuarioGSResponse {
  id_usuario: number
  nome_usuario: string
  email_usuario: string
  senha_usuario: string
  plano_usuario?: string
}

export interface ProfessorGSResponse {
  id_professor: number
  nome_professor: string
  email_professor: string
  senha_professor: string
  especialidade_professor?: string
}

export interface LoginGSCredentials {
  email: string
  senha: string
}

export interface LoginGSResponse {
  idUsuario: number
  nomeUsuario: string
  email: string
  planoUsuario?: string
  role?: 'aluno' | 'professor'
}

export interface RegisterGSPayload {
  nome: string
  email: string
  senha: string
  plano?: string
  especialidade?: string
}

const BASE = import.meta.env.VITE_API_BASE || 'https://gs-java-ditp.onrender.com';

/* ------------------ ALUNOS ------------------ */
export async function autenticarGSLogin(credentials: LoginGSCredentials): Promise<LoginGSResponse> {
  const url = `${BASE}/usuarios`;
  let res: Response;

  try {
    res = await fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' }, mode: 'cors' });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Erro desconhecido';
    throw new Error(`Não foi possível conectar à API (usuarios). Detalhes: ${msg}`);
  }

  if (!res.ok) {
    let backendMessage: string | undefined;
    try { const t = await res.text(); if (t && t.trim()) backendMessage = t.trim(); } catch {}
    try { const d = await res.clone().json() as any; backendMessage = backendMessage || d?.message || d?.error || d?.detalhe; } catch {}
    throw new Error(backendMessage || `Falha ao buscar usuários (status ${res.status} ${res.statusText || ''})`);
  }

  const usuarios: UsuarioGSResponse[] = await res.json();

  const usuarioEncontrado = usuarios.find(u =>
    u.email_usuario.toLowerCase().trim() === credentials.email.toLowerCase().trim() &&
    String(u.senha_usuario) === String(credentials.senha)
  );

  if (!usuarioEncontrado) throw new Error('Credenciais inválidas');

  return {
    idUsuario: usuarioEncontrado.id_usuario,
    nomeUsuario: usuarioEncontrado.nome_usuario,
    email: usuarioEncontrado.email_usuario,
    planoUsuario: usuarioEncontrado.plano_usuario,
    role: 'aluno'
  };
}

export async function cadastrarGSUsuario(payload: RegisterGSPayload): Promise<LoginGSResponse> {
  const endpoint = `${BASE}/usuarios`;
  const bodyToSend = {
    nome_usuario: payload.nome,
    email_usuario: payload.email,
    senha_usuario: payload.senha,
    ...(payload.plano ? { plano_usuario: payload.plano } : {})
  };

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(bodyToSend),
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Erro desconhecido';
    throw new Error(`Não foi possível conectar à API (usuarios). Detalhes: ${msg}`);
  }

  if (!res.ok) {
    let backendMessage: string | undefined;
    try { const t = await res.text(); if (t && t.trim()) backendMessage = t.trim(); } catch {}
    try { const d = await res.clone().json() as any; backendMessage = backendMessage || d?.message || d?.error || d?.detalhe; } catch {}
    throw new Error(backendMessage || `Falha ao criar usuário (status ${res.status} ${res.statusText || ''})`);
  }

  // se o POST retornou corpo JSON com o objeto criado, normalizamos e retornamos
  try {
    const created = await res.json() as Partial<UsuarioGSResponse> | Partial<LoginGSResponse> | null;
    // Verifica se o objeto retornado tem 'email_usuario' (da API) ou 'email' (padrão)
    if (created && ((created as any).email_usuario || (created as any).email)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const u = created as any;
      return {
        idUsuario: u.id_usuario ?? u.idUsuario,
        nomeUsuario: u.nome_usuario ?? u.nomeUsuario ?? '',
        email: u.email_usuario ?? u.email ?? '',
        planoUsuario: u.plano_usuario ?? u.planoUsuario ?? '',
        role: 'aluno'
      };
    }
  } catch (_) {
    // sem corpo -> fallback abaixo
  }

  // fallback: GET /usuarios e procurar pelo email
  try {
    const listRes = await fetch(`${BASE}/usuarios`, { method: 'GET', headers: { 'Accept': 'application/json' }, mode: 'cors' });
    if (!listRes.ok) {
      return { idUsuario: -1, nomeUsuario: payload.nome, email: payload.email, planoUsuario: payload.plano ?? '', role: 'aluno' };
    }
    const usuarios = await listRes.json() as UsuarioGSResponse[];
    const found = usuarios.find(u => u.email_usuario.toLowerCase().trim() === payload.email.toLowerCase().trim());
    if (!found) return { idUsuario: -1, nomeUsuario: payload.nome, email: payload.email, planoUsuario: payload.plano ?? '', role: 'aluno' };
    return { idUsuario: found.id_usuario, nomeUsuario: found.nome_usuario, email: found.email_usuario, planoUsuario: found.plano_usuario, role: 'aluno' };
  } catch (_) {
    return { idUsuario: -1, nomeUsuario: payload.nome, email: payload.email, planoUsuario: payload.plano ?? '', role: 'aluno' };
  }
}

/* ------------------ PROFESSORES ------------------ */
export async function autenticarGSProfessor(credentials: LoginGSCredentials): Promise<LoginGSResponse> {
  const url = `${BASE}/professores`;
  let res: Response;

  try {
    res = await fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' }, mode: 'cors' });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Erro desconhecido';
    throw new Error(`Não foi possível conectar à API (professores). Detalhes: ${msg}`);
  }

  if (!res.ok) {
    let backendMessage: string | undefined;
    try { const t = await res.text(); if (t && t.trim()) backendMessage = t.trim(); } catch {}
    try { const d = await res.clone().json() as any; backendMessage = backendMessage || d?.message || d?.error || d?.detalhe; } catch {}
    throw new Error(backendMessage || `Falha ao buscar professores (status ${res.status} ${res.statusText || ''})`);
  }

  const professores: ProfessorGSResponse[] = await res.json();

  const profEncontrado = professores.find(p =>
    p.email_professor.toLowerCase().trim() === credentials.email.toLowerCase().trim() &&
    String(p.senha_professor) === String(credentials.senha)
  );

  if (!profEncontrado) throw new Error('Credenciais inválidas');

  return {
    idUsuario: profEncontrado.id_professor,
    nomeUsuario: profEncontrado.nome_professor,
    email: profEncontrado.email_professor,
    planoUsuario: profEncontrado.especialidade_professor ?? '',
    role: 'professor'
  };
}

export async function cadastrarGSProfessor(payload: RegisterGSPayload): Promise<LoginGSResponse> {
  const endpoint = `${BASE}/professores`;
  const bodyToSend = {
    nome_professor: payload.nome,
    email_professor: payload.email,
    senha_professor: payload.senha,
    ...(payload.especialidade ? { especialidade_professor: payload.especialidade } : {})
  };

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(bodyToSend),
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Erro desconhecido';
    throw new Error(`Não foi possível conectar à API (professores). Detalhes: ${msg}`);
  }

  if (!res.ok) {
    let backendMessage: string | undefined;
    try { const t = await res.text(); if (t && t.trim()) backendMessage = t.trim(); } catch {}
    try { const d = await res.clone().json() as any; backendMessage = backendMessage || d?.message || d?.error || d?.detalhe; } catch {}
    throw new Error(backendMessage || `Falha ao criar professor (status ${res.status} ${res.statusText || ''})`);
  }

  // se retorno com corpo JSON
  try {
    const created = await res.json() as Partial<ProfessorGSResponse> | Partial<LoginGSResponse> | null;
    // Verifica se o objeto retornado tem 'email_professor' (da API) ou 'email' (padrão)
    if (created && ((created as any).email_professor || (created as any).email)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = created as any;
      return {
        idUsuario: p.id_professor ?? p.idUsuario,
        nomeUsuario: p.nome_professor ?? p.nomeUsuario ?? '',
        email: p.email_professor ?? p.email ?? '',
        planoUsuario: p.especialidade_professor ?? p.especialidade ?? '',
        role: 'professor'
      };
    }
  } catch (_) {
    // sem corpo ou erro no json -> fallback abaixo
  }

  // fallback: GET /professores e procurar por email
  try {
    const listRes = await fetch(`${BASE}/professores`, { method: 'GET', headers: { 'Accept': 'application/json' }, mode: 'cors' });
    if (!listRes.ok) return { idUsuario: -1, nomeUsuario: payload.nome, email: payload.email, planoUsuario: payload.especialidade ?? '', role: 'professor' };
    const professores = await listRes.json() as ProfessorGSResponse[];
    const found = professores.find(p => p.email_professor.toLowerCase().trim() === payload.email.toLowerCase().trim());
    if (!found) return { idUsuario: -1, nomeUsuario: payload.nome, email: payload.email, planoUsuario: payload.especialidade ?? '', role: 'professor' };
    return { idUsuario: found.id_professor, nomeUsuario: found.nome_professor, email: found.email_professor, planoUsuario: found.especialidade_professor ?? '', role: 'professor' };
  } catch (_) {
    return { idUsuario: -1, nomeUsuario: payload.nome, email: payload.email, planoUsuario: payload.especialidade ?? '', role: 'professor' };
  }
}