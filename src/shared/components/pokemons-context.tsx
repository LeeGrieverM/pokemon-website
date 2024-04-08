import { createContext } from "react";
import { Pokemon } from "../data/Pokemon";

// const initPokemon: Pokemon = {
//     id: null,
//     name: '',
//     height: null,
//     weight: null,
//     sprites: {
//       front_default: string,
//     },
// }
export const PokemonsContext = createContext<Pokemon[]>([]);