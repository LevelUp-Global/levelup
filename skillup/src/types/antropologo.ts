import { ReactNode } from 'react';

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
  concept: string;
}

export interface Scenario {
  id: number;
  title: string;
  context: string;
  problem: string;
  imageIcon: ReactNode;
  options: Option[];
}