import { IMinMax } from './minmax.interface';
import { IAttack } from './attack.interface';

export interface IPokemon {
  id: string;
  name: string;
  number: string;
  weight: IMinMax;
  height: IMinMax;
  classification: string;
  types: string[];
  resistant: string;
  attacks: {
    fast: IAttack[];
    special: IAttack[];
  };
  weaknesses: string[];
  fleeRate: number;
  maxCp: number;
  maxHP: number;
  evolutions: IPokemon[];
  evolutionRequirements: {
    amount: number;
    name: string;
  };
  image: string;
}
