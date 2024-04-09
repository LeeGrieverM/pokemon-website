
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const computePokemonNumber = (pokemonId: number) => {
  return '#'+ ('000'+pokemonId.toString()).slice(-3); 
};

