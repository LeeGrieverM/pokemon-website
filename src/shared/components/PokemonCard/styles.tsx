import styled, { css } from 'styled-components';

export const StyledPokemonCard = styled.div<{inPokemonPage: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 267.29px;
    border-radius: 8px;
    height: 340px;
    ${(props) => !props.inPokemonPage && css`
        box-shadow: 2px 2px 4px 0px #00000026;
        background-color: #F7F7F9;
        height: auto;
    `}
    @media (max-width: 768px) {
      width: 285.29px;
    }
`;

export const StyledPokemonButton = styled.button<{inPokemonPage: boolean}>`
    width: 267.29px;
    height: auto;
    background-Color: transparent;
    border: none;
    ${(props) => !props.inPokemonPage && css`
      cursor: pointer;
    `}
`;

export const StyledPokemonId = styled.p`
    font-size: 22px;
    color: #373299;
    font-family: Roboto, sans-serif;
    line-height: 1px;
    font-weight: 400;
    text-align: left;
    width: 100%;
`;

export const StyledPokemonName = styled.p`
    font-size: 32px;
    color: #373299;
    font-family: Roboto, sans-serif;
    line-height: 1px;
    font-weight: 400;
    text-align: center;
    margin-top: 1px;

    @media (max-width: 768px) {
      margin-top: -40px;
    }
`;

export const StyledPokemonImg= styled.img`
    width: 170px;
    height: auto;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      width: 250px;
      margin-bottom: -20px;
    }
`;

enum TypeColors {
    normal = '#A8A77A',
    fire = '#EE8130',
    water = '#6390F0',
    electric = '#F7D02C',
    grass = '#7AC74C',
    ice = '#96D9D6',
    fighting = '#C22E28',
    poison = '#A33EA1',
    ground = '#E2BF65',
    flying = '#A98FF3',
    psychic = '#F95587',
    bug = '#A6B91A',
    rock = '#B6A136',
    ghost = '#735797',
    dragon = '#6F35FC',
    dark = '#705746',
    steel = '#B7B7CE',
    fairy = '#D685AD',
  }

export const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1px; 
  height: auto;
`;

export const Type = styled.p<{ type: string }>(({ type }) => ({
  backgroundColor: TypeColors[type as keyof typeof TypeColors],
  color: 'white',
  padding: '4px 4px',
  margin: '0 4px',
  borderRadius: '9px',
  width: '100px',
  height: '30px',
  font: 'Roboto',
  fontSize: '22px',
  textAlign: 'center',
}));
