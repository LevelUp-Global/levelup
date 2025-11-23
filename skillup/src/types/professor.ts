export interface Professor {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
  descricao?: string;
  foto?: string | null;
}