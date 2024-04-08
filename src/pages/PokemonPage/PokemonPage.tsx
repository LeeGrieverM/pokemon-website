import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import PokemonCard from '../../shared/components/PokemonCard/PokemonCard';
import { PokemonStat } from '../../shared/data/Pokemon';
import {
  StyledContainer,
  LeftContainer,
  RightContainer,
  PokemonCardExpansion,
  TextContainer,
  Title,
  DescriptionContent,
  StatsContent,
} from './styles';

export default function PokemonPage() {
  const location = useLocation();
  const pokemon = location.state?.pokemon;

  const formatStats = () => {
    return pokemon.stats.map((stat: PokemonStat) => <p key={stat.name}>{`${stat.name}: ${stat.value}`}</p>);
  };

  console.log(pokemon);

  return (
    <StyledContainer>
    <LeftContainer>
      <PokemonCard pokemon={pokemon} className={'pokemon-card'} inPokemonPage={true}/>
    </LeftContainer>
    <RightContainer>
    <PokemonCardExpansion>
    <TextContainer>
      <Title>
        Description
      </Title>
      <DescriptionContent>
        HHVFHVLVH
      </DescriptionContent>
    </TextContainer>
    <TextContainer>
      <Title>
        Stats
      </Title>
      <StatsContent>
        {formatStats()}
      </StatsContent>
    </TextContainer>
    </PokemonCardExpansion>
    </RightContainer>
    </StyledContainer>
    
  )
}
