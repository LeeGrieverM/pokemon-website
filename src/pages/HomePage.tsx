import React, { useState, useEffect } from 'react';
import {Pokemon, PokemonAbility} from '../shared/data/Pokemon';
import PokemonCard from '../shared/components/PokemonCard';
import { StyledPokemonGrid, StyledContainer } from '../shared/data/styles';

export default function HomePage() {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
            const data = await response.json();
            const results = await Promise.all(data.results.map(async (result: {url: string}) => {
            const pokemonResponse = await fetch(result.url);
            const pokemonData = await pokemonResponse.json();

          // Fetch abilities
          const abilities: PokemonAbility[] = pokemonData.abilities.map((ability: { ability: { name: string } }) => ({
            name: ability.ability.name
          }));

          return {
            id: pokemonData.id,
            name: pokemonData.name,
            height: pokemonData.height,
            weight: pokemonData.weight,
            abilities: abilities,
            sprites: pokemonData.sprites
          } as Pokemon;
        }));
        setPokemonData(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <StyledContainer>
      <StyledPokemonGrid>

      {loading ? (
        <p>Loading...</p>
      ) : (
          pokemonData.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
      )}
      </StyledPokemonGrid>
    </StyledContainer>
  );
}
