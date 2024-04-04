import React, { useState, useEffect } from 'react';
import './HomePage.css';
import ToolBar from '../../components/ToolBar/ToolBar'
import Pokemon from '../../shared/Pokemon';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

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
            return pokemonResponse.json();
            })) as Pokemon[];
            console.log(results);
            setPokemonData(results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

    fetchData();
  }, []);


  return (
    <div>
      <ToolBar/>
      <h1>Pokémon List</h1>
      <div className='pokemon-grid'>
      {loading ? (
        <p>Loading...</p>
      ) : (
          pokemonData.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
      )}
      </div>
    </div>
  );
}
