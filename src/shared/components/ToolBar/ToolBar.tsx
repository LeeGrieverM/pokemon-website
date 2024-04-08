import React from 'react'
import {useNavigate} from "react-router-dom";
import {paths} from '../../data/constants';
import { StyledButton, StyledToolBar, StyledContainer } from './styles';
import logo from '../../data/logo.svg';


const ToolBar: React.FC<{}> = (props) => {
  const navigate = useNavigate();
  const onHomeClick = ()=> {
    navigate(paths.root);
  }
  return (
    <StyledToolBar>
      <StyledContainer>
      <img src={logo} alt='pokedex-logo' className='logo'/>
      <StyledButton >
      Favorites
      </StyledButton>
      <StyledButton onClick={()=>onHomeClick()}>
        Home
      </StyledButton>
      </StyledContainer>
      </StyledToolBar>

  )
}

export default ToolBar;
