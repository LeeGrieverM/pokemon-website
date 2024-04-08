import styled from "styled-components";
import PokemonCard from "../../shared/components/PokemonCard/PokemonCard";

export const StyledContainer = styled.div`
  padding: 50px 25px;
  border: solid;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 844px;
  height: 345px;
  background-color: #F7F7F9;
  box-shadow: 2px 2px 4px 0px #00000026; 
  
`;

export const LeftContainer = styled.div`
  flex: 1;
  border: 2px solid blue;
  height: auto;
`;

export const RightContainer = styled.div`
  flex: 2;
//   padding-left: 20px; /* Add padding to create space between left and right containers */
//   border: 5px solid pink;
  height: auto;
  margin-left: -30px;
`;

export const PokemonCardExpansion = styled.div`
    displey: flex;
    flex-direction: column;
    align-items: center;
    margin: 13px;
    border-radius: 8px;
    height: auto;
    border: 5px solid pink;
`;


export const TextContainer = styled.div`
`;

export const Title = styled.h1`
    font-family: Roboto, sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 25.78px;
    text-align: left;
    color: #373299;
`;

export const DescriptionContent = styled.p`
    
`;



export const StatsContent = styled.p`
   
`;




