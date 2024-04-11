import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 50px 50px;

`;

export const PokemonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
  padding-top: 30px;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 15px;
  }
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

