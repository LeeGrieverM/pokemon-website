interface PokemonAbility {
  name: string;
}

interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    desctrption: string;
    abilities: PokemonAbility[];
    sprites: {
      front_default: string;
    };
  }
  
  export default Pokemon;