import styled from 'styled-components';

export const StyledToolBar = styled.div`
    height: 65px;
    background-color: #020166;
`;

export const StyledContainer = styled.div`
    padding: 0px 110px;
`;
export const ImgContainer = styled.img`
    padding: 5px ;
`;

export const ButtonsContainer = styled.div`
    height: 65px;
    float: right;
    display: flex;
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


  

