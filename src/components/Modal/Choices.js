import React from 'react';
import { WrapStyled, LabelStyled, InputStyled } from '../Style/ToppingsAndChoices';


export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Выбирайте:</h3>
            <WrapStyled>
                {openItem.choices.map((item, i) => (
                    <LabelStyled key={i}>
                        <InputStyled 
                        type="radio"
                        name="choices"
                        checked={choice === item}
                        value={item}
                        onChange={changeChoices}/>
                        {item}
                    </LabelStyled>
                ))}
            </WrapStyled>
        </>

    );
};