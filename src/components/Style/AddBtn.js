import styled from 'styled-components';


export const AddBtn = styled.button`
    display: block;
    margin: 0 auto 20px auto;
    width: 250px;
    height: 65px;
    font-size: inherit;
    font-family: inherit;
    background-color: #299B01;
    color: white;
    border-color: transparent;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: white;
        color: #299B01;
        border-color: #299B01;
    }
`;
