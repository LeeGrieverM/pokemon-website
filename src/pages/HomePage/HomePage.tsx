import React, { useState, useEffect } from 'react';
import {Pokemon, PokemonAbility} from '../../shared/data/Pokemon';
import PokemonCard from '../../shared/components/PokemonCard/PokemonCard';
import { StyledPokemonGrid, StyledContainer, StyledLoadMoreButton } from './styles';

export default function HomePage() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false); // Track if component is mounted

  useEffect(() => {
    if (isMounted) { // Fetch data only after component mounts initially
      fetchData();
    } else {
      setIsMounted(true); // Set isMounted to true after initial mount
    }
  }, [offset, isMounted]); // Depend on isMounted to prevent useEffect from running on initial mount


  const fetchData = async (): Promise<void> => {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
      const data = await response.json();
      const results = await Promise.all(data.results.map(async (result: {url: string}) => {
      const pokemonResponse = await fetch(result.url);
      const pokemonData = await pokemonResponse.json();
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      sprites: pokemonData.sprites
    } as Pokemon;
  }));
  setPokemonData(prevData => [...prevData, ...results]);
} catch (error) {
  console.error('Error fetching data:', error);
}
};

const handleLoadMore = (): void => {
  setOffset((prevOffset) => prevOffset + 12);
};

return (
  <StyledContainer>
    <StyledPokemonGrid>
        {pokemonData.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
    </StyledPokemonGrid>
    <StyledLoadMoreButton onClick={handleLoadMore}>
    Load More...
    </StyledLoadMoreButton>
  </StyledContainer>
);
}
