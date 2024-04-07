export interface PokemonAbility {
  name: string;
}

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: PokemonAbility[];
    sprites: {
      front_default: string;
    };
  }
  
