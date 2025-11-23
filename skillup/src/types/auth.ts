
export type AuthMode = 'login' | 'register';

export interface User {
  id: string;
  nome: string;
  email: string;
  senha?: string; 
  avatar?: string;
}

export interface LoginFormData {
  email: string;
  senha: string;
}

export interface RegisterFormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}