import styled from 'styled-components';

export const StyledPokemonCard = styled.div`
    displey: flex;
    flex-direction: column;
    align-items: center;
    width: 267.29px;
    background-color: #F7F7F9;
    margin: 13px;
    box-shadow: 2px 2px 4px 0px #00000026; 
    border-radius: 8px;
    border: solid;
    height: auto;
`;

export const StyledPokemonButton = styled.button`
    width: 267.29px;
    height: 267.29px;
    background-Color: 'transparent';
    cursor: pointer;
    border: solid;
`;

export const StyledpokemonId = styled.p`
    font-size: 22px;
    color: #373299;
    font: Roboto, sans-serif;
    line-height: 1px;
    font-weight: 400;
    text-align: left;
    width: 100%;
`;

export const StyledpokemonName = styled.p`
    font-size: 22px;
    color: #373299;
    font: Roboto, sans-serif;
    line-height: 25.7px;
    font-weight: 400;
    text-align: center;
`;

export const StyledpokemonImg= styled.img`
    width: 165px;
    height: auto;
`;