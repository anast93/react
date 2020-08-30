import React from 'react';
import styled from 'styled-components';
import { AddBtn } from './AddBtn';

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
    margin-bottom: 20px;
`;

const NameAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0 10%;
    font-family: Pacifico;
    font-size: 30px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if(!openItem) return null;

    return (
        <Overlay id="overlay" onClick={closeModal}>
        <Modal>
            <Banner img={openItem.img}/>
            <NameAndPrice>
                <p>{openItem.name}</p>
                <p>{openItem.price.toLocaleString('ru-RU',
                {style: 'currency', currency: 'RUB'})}</p>
            </NameAndPrice>
            <AddBtn/>
        </Modal>
    </Overlay>
    )
};