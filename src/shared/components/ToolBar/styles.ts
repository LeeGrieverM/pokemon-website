import styled from 'styled-components';

export const StyledToolBar = styled.div`
    height: 65px;
    background-color: #020166;
`;

export const StyledContainer = styled.div`
    padding: 4px 110px;

`;
export const StyledButton = styled.button<{color: string}>`
    background-color: ${( props ) => (props.color)};
    font-family: Roboto, sans-serif;
    color: white;
    float: right;
    text-align: center;
    line-height: 55px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    width: 100px;
    display: block;

`;


  

