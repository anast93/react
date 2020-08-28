import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItems } from './ListItems';
import bannerImg from '../images/banner.png';


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;

`;

const Banner = styled.div`
    background: url(${bannerImg}) no-repeat 50% top;
    height: 210px;
`;


export const Menu = () => (
    <MenuStyled>
        <Banner />
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItems itemList={dbMenu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки </h2>
            <ListItems itemList={dbMenu.other} />
        </SectionMenu>
    </MenuStyled>
);