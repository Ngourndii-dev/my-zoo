import { AnimalTemplate } from './animalTemplate';

export interface Animal {
  id: number;
  animalTemplate: AnimalTemplate;
  sexe?: string;
  sex?: string;
  origine?: string;
  origin?: string;
  prix?: number;
  price?: number;
  loyer?: number;
  rent?: number;
  status: string;
  couleur?: string;
  color?: string;
  imageUrl: string;
} 