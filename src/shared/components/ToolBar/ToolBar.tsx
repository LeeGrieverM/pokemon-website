import React, { useEffect, useState, useMemo } from 'react'
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

const ToolBar: React.FC<{pageType: string}> = (props) => {
  const navigate = useNavigate();
  // const [homeColor, setHomeColor] = useState<string>(colors.ToolBar);
  // const [favoritesColor, setFavoritesColor] = useState<string>(colors.ToolBar);

  const getHomeColor = (pageType: string) => {
    if (props.pageType === 'Home'){
      return colors.pressedPageButton;
    }
    else{
      return colors.ToolBar;
    }
  }
  const homeColor: string = useMemo(() => getHomeColor(props.pageType), [props.pageType]);

  // useEffect(() => {
  //   if (props.pageType === 'Home'){
  //     setHomeColor(colors.pressedPageButton);
  //   }
  //   else if (props.pageType === 'Favorites'){
  //     setFavoritesColor(colors.pressedPageButton);
  //   }
  // }, [homeColor, favoritesColor]);
  
 
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
