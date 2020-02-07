import React, { useState } from 'react';
import Card from '../card/card';
import Noble from '../card/noble';
import Dummy from '../card/dummy';
import Utils from '../../../common/utils';

/*props: 
    Level (int)
*/
function RowCards(props){
    const level = props.Level;

    const hiddenCards = Utils.GetCardsByLevel(level);
    const [openCards, setOpenCards] = props.StateCards;

    if(openCards.length === 0){
        setOpenCards(GetOpenCards(hiddenCards));
        Utils.SaveCardsByLevel(hiddenCards, level);
    }

    const onClickCard = e => {
        setOpenCards(ChangeCard(openCards, e, level));
    };

    return (<div className="cards-level">
        {<Dummy ClassStyle={"card card-level-" + level}></Dummy>}
        {openCards.map(x=>{
            if(Utils.IsDummyCard(x))
                return (<Dummy ClassStyle="card-empty"></Dummy>)
            else
                return (<Card IdCard={x} onClick={onClickCard} key={x}></Card>)
        })}
        </div>)
}

function GetOpenCards(hiddenCards){
    let cards = [];

    for (let i = 0; i < 4; i++) {
        cards.push(hiddenCards.pop());
    }

    return cards;
}

function ChangeCard(toList, idCard, level){
    let fromList = Utils.GetCardsByLevel(level);
    let newCard = fromList.length > 0 ? fromList.pop() : Utils.GetDummyCard();
    
    Utils.SaveCardsByLevel(fromList, level);

    for (let i = 0; i < toList.length; i++) {
        if(toList[i] == idCard){
            toList[i] = newCard;
            break;
        }
    }

    return toList.slice(0);
}

export default RowCards;
