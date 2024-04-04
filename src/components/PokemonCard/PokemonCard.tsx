import React from 'react'
import Pokemon from '../../shared/Pokemon'
import './PokemonCard.css';
import {useNavigate} from "react-router-dom";

const PokemonCard: React.FC<{pokemon: Pokemon}> = (props) => {
    let pokemonId: string = props.pokemon.id.toString();
    pokemonId = '#'+ ('000'+pokemonId).slice(-3);

    const navigate = useNavigate();

    const onPokemonClick = () => {
      navigate(`/pokemon/${props.pokemon.id}`);
    }
  return (
    <>
    <div className='pokemon-card'>
    <button onClick={() => onPokemonClick()} className='pokemon-button'>
    <p>{pokemonId}</p>
    <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
    <p>{props.pokemon.name}</p>
    <p>{props.pokemon.desctrption}</p>
    </button> 
    </div>
    <div>

    </div>
    </>
  )
}
export default PokemonCard;