import styled from 'styled-components';

// HomePage
export const StyledPokemonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  height: 848px;
  top: 174px;
  align-items: center;
  justify-content: center;  
//   border: solid;
  width: 1200px;
  margin: auto;
`;

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    height: 848px;
    border: solid;
`;


// ToolBar
export const StyledToolBar = styled.div`
    height: 65px;
    background-color: #020166
`;

export const StyledButton = styled.button`
    background-color: #020166;
    color: white;
    float: right;
    border: none;
    text-align: center;
    font-size: 24px;
`;

// PokemonCard
export const StyledPokemonCard = styled.div`
    width: 267.29px;
    height: 238.55px;
    top: 138px;
    left: 110px;
    background-color: #D7D7D7;
    gap: 10px;
`;

export const StyledPokemonButton = styled.button`
    top: 138px;
    left: 110px;
    width: 267.29px;
    height: 238.55px;
    border: 'none';
    background-Color: 'transparent';
    cursor: 'pointer';
`;

export const StyledpokemonId = styled.p`
    font-size: 22px;
    color: #373299;
    font: Roboto;
    text-align: left;

`;

export const StyledpokemonName = styled.p`
    margin: absolute;
    font-size: 22px;
    color: #373299;
    font: Roboto;
    text-align: center;
`;

export const StyledpokemonPicture= styled.p`
    margin: absolute;
    font-size: 22px;
    color: #373299;
    font: Roboto;
`;
