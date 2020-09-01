import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItems } from './ListItems';
import bannerImg from '../../images/banner.png';


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;

`;

const Banner = styled.div`
    width: 100%;
    height: 210px;
    background: url(${bannerImg}) no-repeat 50% top;
    background-position: center;
    background-size: cover;
`;


export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner />
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItems itemList={dbMenu.burger}
            setOpenItem={setOpenItem}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки </h2>
            <ListItems 
                itemList={dbMenu.other}
                setOpenItem={setOpenItem} />
        </SectionMenu>
    </MenuStyled>
);