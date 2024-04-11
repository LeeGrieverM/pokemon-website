import React, { useMemo, FC } from 'react'
import {useNavigate} from "react-router-dom";
import {paths} from '../../data/constants';
import {
  StyledButton,
  StyledToolBar, 
  StyledContainer, 
  ImgContainer, 
  ButtonsContainer
} from './styles';
import logo from '../../data/logo.svg';
import { colors } from '../../data/constants';

const ToolBar: FC<{pageType: string}> = (props) => {
  const navigate = useNavigate();

  const homeColor: string = useMemo(() => {
    return props.pageType === 'Home' ? colors.pressedPageButton : colors.ToolBar;
  }, [props.pageType]);

  const onHomeClick = ()=> {
    navigate(paths.root);
  }

  return (
    <StyledToolBar>
      <StyledContainer>
      <ImgContainer src={logo} alt='pokedex-logo' className='logo'/>
      <ButtonsContainer>
      <StyledButton color={homeColor} onClick={()=>onHomeClick()}>
        Home
      </StyledButton>
      <StyledButton color={colors.ToolBar}>
        Favorites
      </StyledButton>
      </ButtonsContainer>
      
      </StyledContainer>
      </StyledToolBar>

  )
}

export default ToolBar;
