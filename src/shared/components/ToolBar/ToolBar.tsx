import React, { useMemo, useState, FC } from 'react'
import {useNavigate} from "react-router-dom";
import {paths} from '../../data/constants';
import {
  StyledButton,
  StyledToolBar, 
  ImgContainer, 
  ButtonsContainer
} from './styles';
import logo from '../../data/logo.svg';
import { colors } from '../../data/constants';

const ToolBar: FC<{pageType: string}> = (props) => {
  const navigate = useNavigate();
  const [currentPageType, setCurrentPageType] = useState(props.pageType);
  
  const homeColor: string = useMemo(() => {
    return currentPageType === 'Home' ? colors.pressedPageButton : colors.ToolBar;
  }, [currentPageType]);

  const favoritesColor: string = useMemo(() => {
    return currentPageType === 'Favorites' ? colors.pressedPageButton : colors.ToolBar;
  }, [currentPageType]);

  const onHomeClick = (pageType: string)=> {
    setCurrentPageType(pageType);
    if (pageType === 'Home'){
      navigate(paths.root);
    }
    else if (pageType === 'Favorites'){
      console.log("Favorites pressed")
      navigate(paths.favorites);
    }
  }

  return (
    <StyledToolBar>
      <ImgContainer src={logo} alt='pokedex-logo' className='logo'/>
      <ButtonsContainer>
      <StyledButton color={homeColor} onClick={()=>onHomeClick('Home')}>
        Home
      </StyledButton>
      <StyledButton color={favoritesColor} onClick={()=>onHomeClick('Favorites')}>
        Favorites
      </StyledButton>
      </ButtonsContainer>
      </StyledToolBar>

  )
}

export default ToolBar;
