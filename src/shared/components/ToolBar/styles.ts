import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    height: 65px;
    float: right;
    display: flex;
    margin-right: 120px;
`;

export const StyledToolBar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 65px;
    background-color: #020166;
    width: 100%;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center; 
        align-items: center; 
        width: auto;
        margin: auto;
        ${ButtonsContainer} {
          display: none;
        }
        background-color: transparent;
        padding-bottom: 40px;
    }
`;
export const ImgContainer = styled.img`
    padding: 5px ;
    margin-left: 120px;
    @media (max-width: 768px) {
        padding-top: 80px;
        width: 300px; 
        height: auto;
        margin-left: 0;
      }
`;

export const StyledButton = styled.button<{color: string}>`
    background-color: ${( props ) => (props.color)};
    font-family: Roboto, sans-serif;
    color: white;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    border: none;
    width: 105px;
`;


  

