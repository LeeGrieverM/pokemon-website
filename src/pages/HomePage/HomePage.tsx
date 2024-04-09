import React, { useState, useEffect } from 'react';
import {Pokemon} from '../../shared/data/Pokemon';
import ToolBar from '../../shared/components/ToolBar/ToolBar';
import PokemonCard from '../../shared/components/PokemonCard/PokemonCard';
import {
  StyledPokemonGrid,
  StyledContainer,
  StyledLoadMoreButton,
  StyledSearchBar,
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchOption
} from './styles';

export default function HomePage() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false); // Track if component is mounted
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false); // Track if search bar is focused


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

  setPokemonData(prevData => [...prevData, ...results]);
} catch (error) {
  console.error('Error fetching data:', error);
}
};

const handleLoadMore = (): void => {
  setOffset((prevOffset) => prevOffset + 12);
};


const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  setSearchQuery(event.target.value); // Update search query
};

const handleSearchFocus = (): void => {
  setIsSearchFocused(true);
};

const handleSearchBlur = (): void => {
  setIsSearchFocused(false);
  addToLastSearches(searchQuery);
};

// Filter Pokemon data based on search query
const filteredPokemonData = pokemonData.filter(pokemon =>
  pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
);

// Filter last searches based on search query
const filteredLastSearches = lastSearches.filter(search =>
  search.toLowerCase().includes(searchQuery.toLowerCase())
);

// Add current search query to last searches
const addToLastSearches = (search: string): void => {
  setLastSearches(prevSearches => {
    const updatedSearches = [...prevSearches.filter(s => s !== search), search];
    return updatedSearches.length > 5 ? updatedSearches.slice(-5) : updatedSearches; // Keep only the last 5 searches
  });
};


// Render last search options
const renderLastSearchOptions = (): JSX.Element[] => {
  return filteredLastSearches.map((search, index) => (
    <StyledSearchOption key={index} onClick={() => setSearchQuery(search)}>
      {search}
    </StyledSearchOption>
  ));
};

return (
  <>
  <ToolBar pageType='Home'/>
  <StyledContainer>
    <StyledSearchContainer>
      <StyledSearchBar
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}        />
        {isSearchFocused && filteredLastSearches.length > 0 && (
        <div>
          <p>Last searches:</p>
          {renderLastSearchOptions()}
        </div>
      )}
        <StyledSearchButton>
          Search
        </StyledSearchButton>
    </StyledSearchContainer>
    <StyledPokemonGrid>
        {filteredPokemonData.map(pokemon => (
        <PokemonCard key={pokemon.id} className={'pokemon-card'} pokemon={pokemon} inPokemonPage={false}/>
        ))}
    </StyledPokemonGrid>
    <StyledLoadMoreButton onClick={handleLoadMore}>
    Load More...
    </StyledLoadMoreButton>
  </StyledContainer>
  </>
);
}
