import React, {useMemo} from 'react'
import {Pokemon} from '../../data/types/Pokemon'
import {useNavigate} from "react-router-dom";
import { capitalizeFirstLetter, computePokemonNumber } from '../../utils/functions';
import {
  StyledPokemonCard,
  StyledPokemonButton,
  StyledPokemonId,
  StyledPokemonName,
  StyledPokemonImg,
  TypesContainer,
  Type,
} from './styles';

const PokemonCard: React.FC<{className: any, pokemon: Pokemon, inPokemonPage: boolean}> = (props) => {
  const { inPokemonPage, pokemon } = props;
  const navigate = useNavigate();

  const pokemonName: string = useMemo(() => capitalizeFirstLetter(pokemon.name), [pokemon.name]);
  const pokemonId: string = useMemo(() => computePokemonNumber(pokemon.id), [pokemon.id]);

  const onPokemonClick = () => {
    navigate(`/pokemon/:${props.pokemon.id}`, {state: {pokemon}});
  }
    
  return (
    <>
    <StyledPokemonCard className={props.className} inPokemonPage={inPokemonPage}>
    <StyledPokemonButton onClick={() => onPokemonClick()} disabled={inPokemonPage} inPokemonPage={inPokemonPage}>
    <StyledPokemonId>
      {pokemonId}
    </StyledPokemonId>
    <StyledPokemonImg src={props.pokemon.sprites.front_default} alt={props.pokemon.name}>
    </StyledPokemonImg>
    <StyledPokemonName>
    {pokemonName}
    </StyledPokemonName>
    {inPokemonPage && ( 
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