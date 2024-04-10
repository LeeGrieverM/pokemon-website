import { Pokemon } from "../data/Pokemon";

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const computePokemonNumber = (pokemonId: number) => {
  return '#'+ ('000'+pokemonId.toString()).slice(-3); 
};

export const fetchData = async (offset: number) => {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
      const data = await response.json();
      const results = await Promise.all(data.results.map(async (result: {url: string}) => {
      const pokemonResponse = await fetch(result.url);
      const pokemonData = await pokemonResponse.json();
      const speciesResponse = await fetch(pokemonData.species.url);
      const speciesData = await speciesResponse.json();
      const description = speciesData.flavor_text_entries.find((entry: any) => entry.language.name === 'en')?.flavor_text;
      
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      sprites: pokemonData.sprites,
      stats: pokemonData.stats.map((stat: any) => ({
        name: stat.stat.name,
        value: stat.base_stat
      })),
      types: pokemonData.types.map((type: any) => ({
        name: type.type.name,
      })),
      description: description,
    } as Pokemon;
  }));
  return results;
} catch (error) {
  console.error('Error fetching data:', error);
}
};