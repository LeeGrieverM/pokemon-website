import React from 'react'
import {Pokemon} from '../data/Pokemon'
import {useNavigate} from "react-router-dom";
import { StyledPokemonCard, StyledPokemonButton, StyledpokemonId, StyledpokemonName } from '../data/styles';
import { paths} from '../data/constants'; 

const PokemonCard: React.FC<{pokemon: Pokemon}> = (props) => {
    let pokemonId: string = props.pokemon.id.toString();
    pokemonId = '#'+ ('000'+pokemonId).slice(-3);
    let pokemonName = props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);

    const navigate = useNavigate();

    const onPokemonClick = () => {
      navigate(`/pokemon/:${props.pokemon.id}`);
    }
  return (
    <>
    <StyledPokemonCard>
    <StyledPokemonButton onClick={() => onPokemonClick()}>
    <StyledpokemonId>
      {pokemonId}
    </StyledpokemonId>
    <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
    <StyledpokemonName>
    {pokemonName}
    </StyledpokemonName>
    {/* <p>{props.pokemon.abilities[0].name}</p> */}
    </StyledPokemonButton>
    </StyledPokemonCard>
    </>
  )
}
export default PokemonCard;