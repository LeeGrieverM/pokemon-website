export interface PokemonType {
  name: string;
}
export interface PokemonStat {
  name: string;
  value: number;
}

export interface PokemonLocation {
  latitude: number;
  longitude: number;
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
  location: PokemonLocation;
}
  
