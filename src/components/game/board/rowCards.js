import React, { useState } from 'react';
import Card from '../card/card';
import Noble from '../card/noble';
import Dummy from '../card/dummy';

function RowCards(props){
    const cardsObj = props.Cards;
    const clickCardHandle = props.onClick;

    return (<div className="cards-level">
        {<Dummy ClassStyle={"card card-level-" + cardsObj.level}></Dummy>}
        {cardsObj.cards.map(x=>{
            if(x.isDummy)
                return (<Dummy ClassStyle="card-empty"></Dummy>)
            else
                return (<Card Card={x} onClick={clickCardHandle} key={x.id}></Card>)
        })}
        </div>)
}
export default RowCards;
