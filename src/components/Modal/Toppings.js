import React from 'react';
import { WrapStyled, LabelStyled, InputStyled } from '../Style/ToppingsAndChoices';


export function Toppings({ toppings, checkToppings }) {
    return (
        <>
            <h3>Добавки</h3>
            <WrapStyled>
                {toppings.map((item, i) => (
                    <LabelStyled key={i}>
                        <InputStyled type="checkbox"
                        checked={item.checked}
                        onChange={() => checkToppings(i)}/>
                        {item.name}
                    </LabelStyled>
                ))}
            </WrapStyled>
        </>
    );
}