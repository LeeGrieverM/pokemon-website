import React from 'react'
import {useNavigate} from "react-router-dom";
import {paths} from '../../data/constants';
import { StyledButton, StyledToolBar, StyledContainer } from './styles';
import logo from '../../data/logo.svg';


const ToolBar: React.FC<{pageType: string}> = (props) => {
  const navigate = useNavigate();
  const pageType = props.pageType;
  let homeColor: string = '#020166';
  let favoritesColor: string = '#020166';

  if (pageType === 'Home'){
    homeColor = '#94D97E'
  }
  else if (pageType === 'Favorites'){
    favoritesColor = '#94D97E'
  }
  const onHomeClick = ()=> {
    navigate(paths.root);
  }
  return (
    <StyledToolBar>
      <StyledContainer>
      <img src={logo} alt='pokedex-logo' className='logo'/>
      <StyledButton color={favoritesColor}>
        Favorites
      </StyledButton>
      <StyledButton color={homeColor} onClick={()=>onHomeClick()}>
        Home
      </StyledButton>
      </StyledContainer>
      </StyledToolBar>

  )
}

export default ToolBar;
