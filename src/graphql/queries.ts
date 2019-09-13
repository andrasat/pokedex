export const getPokemons = `
  query getPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
    }
  }
`;

export const getOnePokemonByName = `
  query getOnePokemonByName($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      maxHP
      maxCP
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
      }
      evolutionRequirements {
        amount
        name
      }
      image
    }
  }
`;

export const getOnePokemonById = `
  query getOnePokemonById($id: String) {
    pokemon(id: $id) {
      id
      number
      name
      maxHP
      maxCP
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
      }
      evolutionRequirements {
        amount
        name
      }
      image
    }
  }
`;
