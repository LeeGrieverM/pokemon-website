import React, { useState, useEffect, useMemo } from 'react';
import {Pokemon} from '../../shared/data/types/Pokemon';
import ToolBar from '../../shared/components/ToolBar/ToolBar';
import PokemonCard from '../../shared/components/PokemonCard/PokemonCard';
import { fetchData } from '../../shared/utils/functions';
import SearchBar from '../../shared/components/SearchBar/SearchBar';

import {
  PokemonGrid,
  StyledContainer,
  LoadMoreButton,
} from './styles';

export default function HomePage() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false); 
  const [searchQuery, setSearchQuery] = useState<string>('');
 
  useEffect(() => {
  const fetchDataAndSetPokemonData = async () => {
    if (isMounted) {
      const results = await fetchData(offset); 
      if (results) {
        setPokemonData(prevData => [...prevData, ...results]);
      }
    } else {
      setIsMounted(true);
    }
  };
  fetchDataAndSetPokemonData();
}, [offset, isMounted]);


  const filteredPokemonData = useMemo(()=> { 
    return pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  }, [pokemonData, searchQuery]);

  const handleLoadMore = (): void => {
    setOffset((prevOffset) => prevOffset + 12);
  };

  const handleSearch = (searchQuery: string): void => {
    setSearchQuery(searchQuery);
  };

return (
  <>
  <ToolBar pageType='Home'/>
  <StyledContainer>
    <SearchBar handleSearch={handleSearch} searchQuery={searchQuery}/>
    <PokemonGrid>
        {filteredPokemonData.map(pokemon => (
        <PokemonCard key={pokemon.id} className={'pokemon-card'} pokemon={pokemon} inPokemonPage={false}/>
        ))}
    </PokemonGrid>
    <LoadMoreButton onClick={handleLoadMore}>
    Load More...
    </LoadMoreButton>
  </StyledContainer>
  </>
);
}
