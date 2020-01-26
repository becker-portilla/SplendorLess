import React from 'react';
import Cards from '../../../common/cards';
import Card from '../card/card';
import Util from '../../../common/utils';

function Board(props){
    let cardsL1 = Cards.filter(x=> x.level == 1);
    let cardsL2 = Cards.filter(x=> x.level == 2);
    let cardsL3 = Cards.filter(x=> x.level == 3);

    Util.shuffle(cardsL1);
    Util.shuffle(cardsL2);
    Util.shuffle(cardsL3);
    return (
        <div>
            {ShowCards(cardsL3, 3)}
            {ShowCards(cardsL2, 2)}
            {ShowCards(cardsL1, 1)}
        </div>
    );
}

function ShowCards(list, level){
    return (<div className="cards-level">
        <div className={"card card-level-" + level}></div>
        {list.slice(0, 4).map(x=>{
            return (<Card IdCard={x.id}></Card>)
        })}
        </div>)
}

export default Board;