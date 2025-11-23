
export type CourseStatus = 'Disponível' | 'Em Breve' | 'Concluído';

export interface Course {
  id: number;
  title: string;
  image: string; 
  description: string;
  link: string;
  status: CourseStatus; 
}