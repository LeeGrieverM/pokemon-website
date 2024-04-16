import { Pokemon, PokemonLocation } from "../data/types/Pokemon";
import { telAvivBounds, moveoLocation } from "../data/constants";

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const computePokemonNumber = (pokemonId: number) => {
  return '#'+ ('000'+pokemonId.toString()).slice(-3); 
};

const generateRandomLocation = () => {
  const latitude = telAvivBounds.minLat + Math.random() * (telAvivBounds.maxLat - telAvivBounds.minLat);
  const longitude = telAvivBounds.minLng + Math.random() * (telAvivBounds.maxLng - telAvivBounds.minLng);
  return { latitude: latitude, longitude: longitude}  as PokemonLocation;
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
      location: generateRandomLocation(),
    } as Pokemon;
  }));
  return results;
} catch (error) {
  console.error('Error fetching data:', error);
}
};

export const addDirections = (map: google.maps.Map | null, pokemonLocation: PokemonLocation)=> {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
  });

  const request: google.maps.DirectionsRequest = {
    origin: new google.maps.LatLng(pokemonLocation.latitude, pokemonLocation.longitude),
    destination: new google.maps.LatLng(moveoLocation.latitude, moveoLocation.longitude),
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    } else {
      console.error("Error fetching directions:", status);
    }
  });
}