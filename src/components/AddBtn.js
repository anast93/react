import React from 'react';
import styled from 'styled-components';

const AddBtnDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const AddBtnStyled = styled.button`
    margin-bottom: 20px;
    padding: 10px 50px;
    background-color: green;
    border: none;
    font-family: Roboto;
    font-size: 20px;
    color: white;
`;

export const AddBtn = () => (
    <AddBtnDiv>
        <AddBtnStyled>
            Добавить
        </AddBtnStyled>
    </AddBtnDiv>

);