import styled from "styled-components";

export const StyledContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  width: 844px;
  height: 340px;
  margin: auto;
  margin-top: 70px;
  background-color: #F7F7F9;
  box-shadow: 2px 2px 4px 0px #00000026; 
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 320px;
    height: 700px;
    margin-bottom: 40px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 340px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 30px; 
    bottom: 30px; 
    right: -2px; 
    width: 1.5px; 
    background-color: #D7D7D7; 
  }

  @media (max-width: 768px) {
    &::after {
      top: auto; 
      bottom: 10px; 
      right: 0;
      width: 100%; 
      height: 1.5px; 
      background-color: #D7D7D7; 
    }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 340px;
  gap: 10px;
  padding-left: 30px;
  padding-top: 25px;

  @media (max-width: 768px) {
    align-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0px;
    row-gap: 15px;
    height: 310px;

  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  @media (max-width: 768px) {
    align-content: center;
    align-items: center;
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
    font-family: Roboto, sans-serif;
    font-size: 22px;
    font-weight: 510;
    line-height: 25.78px;
    text-align: left;
    color: #373299;
`;

export const DescriptionContent = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  color: #020166;

  @media (max-width: 768px) {
    text-align: center;
  }

`;

export const StatsContentContainer = styled.div`
  display: flex;
  column-gap: 60px;
  margin-top: -10px;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 0px;
    margin-top: 5px;
  }
`;

export const StatsContent = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  color: #020166;
  align-content: top;
  margin-top: -12px;

  @media (max-width: 768px) {
    line-height: 5px;
    margin-top: -20px;
    text-align: center;
    padding: none;
  }
`;





