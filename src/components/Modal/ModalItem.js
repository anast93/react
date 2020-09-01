import React from 'react';
import styled from 'styled-components';
import { AddBtn } from '../Style/AddBtn';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 600px;
    
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px); 
    padding: 30px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Pacifico', cursive;
`;


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
        <Modal>
            <Banner img={openItem.img}/>
            <Content>
                <HeaderContent>
                    <p>{openItem.name}</p>
                    <p>{openItem.price.toLocaleString('ru-RU',
                    {style: 'currency', currency: 'RUB'})}</p>
                </HeaderContent>
            </Content>
            <AddBtn onClick={addToOrder}>Добавить</AddBtn>
        </Modal>
    </Overlay>
    )
};