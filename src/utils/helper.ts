import { PokemonTypes } from '../enums';

export class Helper {
  getPokemonType(type: PokemonTypes | null): string {
    if (!type) {
      return 'normal-type';
    }

    switch (type) {
      case 'Normal':
        return 'normal-type';
      case 'Fire':
        return 'fire-type';
      case 'Water':
        return 'water-type';
      case 'Electric':
        return 'electric-type';
      case 'Grass':
        return 'grass-type';
      case 'Ice':
        return 'ice-type';
      case 'Fighting':
        return 'fighting-type';
      case 'Poison':
        return 'poison-type';
      case 'Ground':
        return 'ground-type';
      case 'Flying':
        return 'flying-type';
      case 'Psychic':
        return 'psychic-type';
      case 'Bug':
        return 'bug-type';
      case 'Rock':
        return 'rock-type';
      case 'Ghost':
        return 'ghost-type';
      case 'Dragon':
        return 'dragon-type';
      case 'Dark':
        return 'dark-type';
      case 'Steel':
        return 'steel-type';
      case 'Fairy':
        return 'fairy-type';
      default:
        return 'normal-type';
    }
  }
}
