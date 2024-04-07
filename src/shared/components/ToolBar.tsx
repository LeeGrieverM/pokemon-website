import React from 'react'
import {useNavigate} from "react-router-dom";
import {paths} from '../data/constants';
import { StyledButton, StyledToolBar } from '../data/styles';
import logo from '../data/logo.svg';
export default function ToolBar() {

  const navigate = useNavigate();
  const onHomeClick = ()=> {
    console.log("here");
    navigate(paths.root);
  }
  return (
    <StyledToolBar>
      <img src={logo} alt='pokedex-logo' className='logo'/>
      <StyledButton >
      Favorites
      </StyledButton>
      <StyledButton onClick={()=>onHomeClick()}>
        Home
      </StyledButton>
      </StyledToolBar>

  )
}
