import React from 'react'
import './ToolBar.css';
import {useNavigate} from "react-router-dom";

export default function ToolBar() {

  const navigate = useNavigate();
  const onHomeClick = ()=> {
    navigate(`/`)
  }
  return (
    <div className='tool-bar'>
        <img src='.pokedexlogo.png' alt='pokedex-logo'/>

      <button className = 'favorites-button'>
        Favorites
      </button>
      <button className='home-button' onClick={()=>onHomeClick()}>
        Home
      </button>
    </div>
  )
}
