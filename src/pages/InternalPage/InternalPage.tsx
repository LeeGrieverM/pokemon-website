import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PokemonCard from '../../shared/components/PokemonCard/PokemonCard';

export default function InternalPage() {
    const {pokemonId} = useParams();
    // const navigate = useNavigate();
    console.log(pokemonId);

  return (
    <div>
    Pokemon Page
    {/* <PokemonCard >

    </PokemonCard> */}
    </div>
  )
}
