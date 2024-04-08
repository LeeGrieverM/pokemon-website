import React, { useState } from 'react'
import {Pokemon} from '../../data/Pokemon'
import {useNavigate} from "react-router-dom";
import {
  StyledPokemonCard,
  StyledPokemonButton,
  StyledpokemonId,
  StyledpokemonName,
  StyledpokemonImg,
  TypesContainer,
  Type,
} from './styles';

const PokemonCard: React.FC<{className: any, pokemon: Pokemon, inPokemonPage: boolean}> = (props) => {
    const inPokemonPage = props.inPokemonPage;
    let pokemonId: string = props.pokemon.id.toString();
    pokemonId = '#'+ ('000'+pokemonId).slice(-3);
    let pokemonName = props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);

    const navigate = useNavigate();

    const onPokemonClick = () => {
      navigate(`/pokemon/:${props.pokemon.id}`, {state: {pokemon: props.pokemon}});
    }
    
  return (
    <>
    <StyledPokemonCard className={props.className}>
    <StyledPokemonButton onClick={() => onPokemonClick()} disabled={inPokemonPage}>
    <StyledpokemonId>
      {pokemonId}
    </StyledpokemonId>
    <StyledpokemonImg src={props.pokemon.sprites.front_default} alt={props.pokemon.name}>
    </StyledpokemonImg>
    <StyledpokemonName>
    {pokemonName}
    </StyledpokemonName>
    {inPokemonPage && ( // Conditionally render Pokemon types if inPokemonPage is true
      <TypesContainer>
        {props.pokemon.types.map((type, index) => (
          <Type key={type.name} type={type.name}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </Type>
        ))}
      </TypesContainer>
    )}
    </StyledPokemonButton>
    </StyledPokemonCard>
    </>
  )
}
export default PokemonCard;