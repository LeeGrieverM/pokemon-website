import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {Pokemon} from '../../shared/data/Pokemon';
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
  LastSearchesContainer,
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

  // Filter Pokemon data based on search query
  const filteredPokemonData = useMemo(()=> { 
    return pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  }, [pokemonData, searchQuery]);

  // // Filter last searches based on search query
  // const filteredLastSearches = useMemo(()=> { 
  //   return lastSearches.filter(search =>
  //     search.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }, [setLastSearches]);

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
    addToLastSearches(searchQuery);
  };


  // Add current search query to last searches
  const addToLastSearches = (search: string): void => {
    console.log("in add, search is: ", search);
    setLastSearches(prevSearches => {
      const updatedSearches = [...prevSearches.filter(s => s !== search), search];
      return updatedSearches.length > 3 ? updatedSearches.slice(-3) : updatedSearches; // Keep only the last 3 searches
    });
  };

  const renderLastSearchOptions = useCallback((): JSX.Element[] => {
    console.log("in render");
    return lastSearches.map((search, index) => (
      <SearchOption key={index}>
        {search}
        <DeleteSearchButton>
          x
        </DeleteSearchButton>
      </SearchOption>
    ));
  }, [setLastSearches]);

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
          <ClearButton>
              CLEAR
            </ClearButton>
          </LastSearchesTitle>
          <LastSearchesContainer>
            {renderLastSearchOptions()}
          </LastSearchesContainer>
        </FloatingContainer>
      )}
        </SearchBarContainer>

        <SearchButton>
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
