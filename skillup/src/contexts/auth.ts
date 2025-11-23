// src/contexts/auths.ts
import { createContext } from 'react';
import type { Aluno } from '../types/aluno';

export type AuthUser = {
  id_usuario?: number;
  nome_usuario: string;
  email_usuario: string;
  senha_usuario?: string;
  papel?: 'USER' | 'PROFESSOR';
} | null;

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; nome: string } | null;
  aluno: Aluno | null;
  loading: boolean;
  login: (email: string, senha: string, isProfessor?: boolean) => Promise<void>;
  register: (payload: { nome: string; email: string; senha: string; isProfessor?: boolean }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  aluno: null,
  loading: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});