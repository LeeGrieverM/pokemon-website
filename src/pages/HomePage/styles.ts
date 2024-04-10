import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 50px 50px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;  
`;

export const SearchBar = styled.input`
  display: flex;
  flex-direction: column;
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
export const SearchButton = styled.button`
  width: 87px;
  height: 36px;
  border-radius: 9px;
  background-color: #373299;
  color: #f7f7f9;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
`;

export const SearchOption = styled.div`
  padding: 8px;
  background-color: #f5f5f5;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
  color: #5A5A89;
`;

export const PokemonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
  padding-top: 30px;
  gap: 10px;
`;

export const LoadMoreButton = styled.button`
  font: Roboto, sans-serif;
  font-size: 14px;
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

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FloatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #5A5A89;
  padding-top: 10px;
`;

export const LastSearchesTitle = styled.div`
  font-size: 14x;
  font-weight: 600;
  color: #373299;
  text-align: left;
`;

export const ClearButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  float: right;
  color: #373299;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const DeleteSearchButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  float: right;
  color: gray;
  border: none;
`;
