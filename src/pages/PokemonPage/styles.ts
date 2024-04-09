import styled from "styled-components";

export const StyledContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  width: 844px;
  height: 340px;
  // border: 5px solid green;   
  margin: auto;
  margin-top: 70px;
  background-color: #F7F7F9;
  box-shadow: 2px 2px 4px 0px #00000026; 
  border-radius: 8px;
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 340px;
  // border: 1px solid red;
  // border-right: 1px solid #D7D7D7;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 30px; /* Align the line to the top */
    bottom: 30px; /* Extend the line till the bottom */
    right: -2px; /* Adjust the position to the right of the border */
    width: 1.5px; /* Set the width of the line */
    background-color: #D7D7D7; /* Set the color of the line */
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  // border: 2px solid red;
  height: 340px;
  gap: 10px;
  padding-left: 30px;
  padding-top: 25px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  // border: 5px solid yellow; 
`;

export const Title = styled.h1`
    font-family: Roboto, sans-serif;
    font-size: 22px;
    font-weight: 510;
    line-height: 25.78px;
    text-align: left;
    color: #373299;
    // border: 2px solid black;

`;

export const DescriptionContent = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  color: #020166;
  // border: 2px solid black;
`;

export const StatsContentContainer = styled.div`
  display: flex;
  // border: 2px solid black;
  column-gap: 60px;

  margin-top: -10px;
`;

export const StatsContent = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  color: #020166;
  align-content: top;
  // border: 2px solid pink;
  margin-top: -12px;
`;





