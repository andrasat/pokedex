import { GraphQLClient } from 'graphql-request';
import { getPokemons, getOnePokemonByName, getOnePokemonById } from './Query';

import { IPokemon } from '../interfaces/pokemon.interface';

const POKEMON_URL = process.env.REACT_APP_POKEMON_URL;

class Client {
  private readonly client: GraphQLClient;
  constructor() {
    this.client = new GraphQLClient(POKEMON_URL as string);
  }

  async getPokemons(first: number): Promise<{ pokemons: IPokemon[] }> {
    return this.client.request<{ pokemons: IPokemon[] }>(getPokemons, {
      first
    });
  }

  async getOnePokemonByName(name: string): Promise<{ pokemon: IPokemon }> {
    return this.client.request<{ pokemon: IPokemon }>(getOnePokemonByName, {
      name
    });
  }

  async getOnePokemonById(id: string): Promise<{ pokemon: IPokemon }> {
    return this.client.request<{ pokemon: IPokemon }>(getOnePokemonById, {
      id
    });
  }
}

export default Client;
