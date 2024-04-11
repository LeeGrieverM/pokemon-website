export interface PokemonType {
  name: string;
}
export interface PokemonStat {
  name: string;
  value: number;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: PokemonStat[];
  types: PokemonType[];
  description: string;
  location: {
    latitude: number;
    longitude: number;
  }
}
  
