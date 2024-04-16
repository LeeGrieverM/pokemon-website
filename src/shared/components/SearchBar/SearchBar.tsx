import React, {useState, FC} from 'react'
import {
    SearchButton,
    SearchContainer,
    SearchOption,
    LastSearchesTitle,
    FloatingContainer,
    ClearButton,
    SearchBarContainer,
    DeleteSearchButton,
    StyledSearchBar,
  } from './styles';

  interface SearchBarProps {
    handleSearch: (searchQuery: string) => void;
    searchQuery: string;
  }

 const SearchBar: FC<SearchBarProps> = ({ handleSearch, searchQuery }) => {
    const [lastSearches, setLastSearches] = useState<string[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false); 

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        handleSearch(event.target.value);
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
    <SearchContainer>
      <SearchBarContainer>
      <StyledSearchBar
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
          <SearchOption key={index} onClick={() => handleSearch(search)}>
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
  )
}

export default SearchBar;
