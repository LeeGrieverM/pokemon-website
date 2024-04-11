import React, { useState, useEffect, useMemo } from 'react';
import {Pokemon} from '../../shared/data/types/Pokemon';
import ToolBar from '../../shared/components/ToolBar/ToolBar';
import PokemonCard from '../../shared/components/PokemonCard/PokemonCard';
import { fetchData } from '../../shared/utils/functions';
import {
  PokemonGrid,
  StyledContainer,
  LoadMoreButton,
  SearchBar,
  SearchButton,
  SearchContainer,
  SearchOption,
  LastSearchesTitle,
  FloatingContainer,
  ClearButton,
  SearchBarContainer,
  DeleteSearchButton,
} from './styles';

export default function HomePage() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false); 
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false); 
  
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value); 
  };

  const handleSearchFocus = (): void => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = (): void => {
    setIsSearchFocused(false);
  };

  const handleSearchClick = (): void => {
    addToLastSearches(searchQuery);
  };
 
  const addToLastSearches = (search: string): void => {
    setLastSearches(prevSearches => {
      const updatedSearches = [...prevSearches.filter(s => s !== search), search];
      return updatedSearches.length > 3 ? updatedSearches.slice(-3) : updatedSearches; 
    });
  };

  const removeFromLastSearches = (search: string): void => {
    setLastSearches(prevSearches => prevSearches.filter(s => s !== search));
  };

return (
  <>
  <ToolBar pageType='Home'/>
  <StyledContainer>
    <SearchContainer>
      <SearchBarContainer>
      <SearchBar
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}        />
         {isSearchFocused && (
        <FloatingContainer>
          <LastSearchesTitle>
          RECENT SEARCHES
          <ClearButton onMouseDown={()=>setLastSearches([])}>
            CLEAR
          </ClearButton>
          </LastSearchesTitle>
          {lastSearches.map((search, index) => (
          <SearchOption key={index} onClick={() => setSearchQuery(search)}>
          {search}
          <DeleteSearchButton onMouseDown={()=>removeFromLastSearches(search)}>
           X
          </DeleteSearchButton>
          </SearchOption>
          ))}
        </FloatingContainer>
        )}
        </SearchBarContainer>
        <SearchButton onClick={()=>handleSearchClick()}>
          Search
        </SearchButton>
    </SearchContainer>
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
