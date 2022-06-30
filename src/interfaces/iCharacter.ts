export interface iCharacter {
  id: number;
  role: string;
  img: string;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  reignYears?: number;
  weapon?: string;
  dexterity?: number;
  adviseTo?: string;
  serveTo?: string;
  fawner?: number;
}
