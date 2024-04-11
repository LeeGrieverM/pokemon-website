import React, {useCallback, useMemo} from 'react';
import { useLocation } from 'react-router-dom';
import PokemonCard from '../../shared/components/PokemonCard/PokemonCard';
import { PokemonStat } from '../../shared/data/types/Pokemon';
import ToolBar from '../../shared/components/ToolBar/ToolBar';
import { capitalizeFirstLetter } from '../../shared/utils/functions';

import {
  StyledContainer,
  LeftContainer,
  RightContainer,
  TextContainer,
  Title,
  DescriptionContent,
  StatsContentContainer,
  StatsContent,
} from './styles';

export default function PokemonPage() {
  const location = useLocation();
  const pokemon = location.state?.pokemon;

  const formatStats = useCallback((startIndex: number) => {
    return pokemon.stats.slice(startIndex, startIndex + 3).map((stat: PokemonStat) =>
      <p key={stat.name}>
        {`${capitalizeFirstLetter(stat.name)}: ${stat.value}`}
      </p>);
  }, [pokemon]);

  const computeTotalStats = useMemo(() => {
    return <p key={pokemon.id}>
      {`Total: ${pokemon.stats.reduce((sum: number, stat: PokemonStat) => sum + stat.value, 0).toString()}`}
    </p>;
  }, [pokemon]);

  return (
    <>
    <ToolBar pageType='Pokemon'/>
    <StyledContainer>
    <LeftContainer>
      <PokemonCard pokemon={pokemon} className={'pokemon-card'} inPokemonPage={true}/>
    </LeftContainer>
    <RightContainer>
    <TextContainer>
      <Title>
        Description
      </Title>
      <DescriptionContent>
        {pokemon.description}
      </DescriptionContent>
    </TextContainer>
    <TextContainer>
      <Title>
        Stats
      </Title>
      <StatsContentContainer>
        <StatsContent>
        {formatStats(0)}
        </StatsContent>
        <StatsContent>
        {formatStats(3)}
        </StatsContent>
        <StatsContent>
        {computeTotalStats}
        </StatsContent>
      </StatsContentContainer>
    </TextContainer>
    </RightContainer>
    </StyledContainer>
    </>
  )
}
