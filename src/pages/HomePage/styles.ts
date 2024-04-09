import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 50px 50px;
  border: solid;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
`;

export const StyledSearchBar = styled.input`
  background-color: #f7f7f9;
  border-radius: 9px;
  border: 1px solid #02016680;
  color: #373299;
  width: 341px;
  height: 36px;
  margin-right: 5px;
  padding-left: 10px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
export const StyledSearchButton = styled.button`
  width: 87px;
  height: 36px;
  border-radius: 9px;
  background-color: #373299;
  color: #f7f7f9;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const StyledSearchOption = styled.div`
  padding: 8px;
  cursor: pointer;
  background-color: #f5f5f5;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const StyledPokemonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
  padding-top: 30px;
  gap: 10px;
`;

export const StyledLoadMoreButton = styled.button`
  font: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  margin: 20px auto;
  padding: 10px 60px;
  background-color: #ffffff;
  color: #373299;
  border: 1px solid #373299;
  border-radius: 9px;
  display: block;
  cursor: pointer;
`;