import { Animal } from './animal';

export interface Event {
  id: number;
  animal: Animal;
  image: string;
  situationDate: string;
  descriptionEvent: string;
}