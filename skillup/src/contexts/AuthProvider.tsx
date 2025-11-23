// src/contexts/AuthProvider.tsx
import React, { createContext, useEffect, useState } from "react";
import {
  autenticarGSLogin,
  cadastrarGSUsuario,
  autenticarGSProfessor,
  cadastrarGSProfessor,
  LoginGSResponse
} from "../services/gsAuth";

type Role = "aluno" | "professor";

interface User {
  id: number | string;
  nome: string;
  email: string;
  plano?: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, senha: string, isProfessor?: boolean) => Promise<void>;
  register: (data: { nome: string; email: string; senha: string; isProfessor?: boolean; especialidade?: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("levelup_user");
    if (saved) {
      try { setUser(JSON.parse(saved)); } catch {}
    }
  }, []);

  async function login(email: string, senha: string, isProfessor = false) {
    setLoading(true);
    try {
      const res: LoginGSResponse = isProfessor
        ? await autenticarGSProfessor({ email, senha })
        : await autenticarGSLogin({ email, senha });

      const normalized: User = {
        id: res.idUsuario,
        nome: res.nomeUsuario,
        email: res.email,
        plano: res.planoUsuario,
        role: (res.role ?? (isProfessor ? "professor" : "aluno")) as Role,
      };

      localStorage.setItem("levelup_user", JSON.stringify(normalized));
      setUser(normalized);
    } finally {
      setLoading(false);
    }
  }

  async function register(data: { nome: string; email: string; senha: string; isProfessor?: boolean; especialidade?: string }) {
    setLoading(true);
    try {
      const res: LoginGSResponse = data.isProfessor
        ? await cadastrarGSProfessor({ nome: data.nome, email: data.email, senha: data.senha, especialidade: data.especialidade })
        : await cadastrarGSUsuario({ nome: data.nome, email: data.email, senha: data.senha, plano: undefined });

      const normalized: User = {
        id: res.idUsuario,
        nome: res.nomeUsuario,
        email: res.email,
        plano: res.planoUsuario,
        role: (res.role ?? (data.isProfessor ? "professor" : "aluno")) as Role,
      };

      localStorage.setItem("levelup_user", JSON.stringify(normalized));
      setUser(normalized);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("levelup_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}