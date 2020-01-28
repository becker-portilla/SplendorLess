import React, { useState } from 'react';
import Cards from '../../../common/cards';
import Card from '../card/card';
import Util from '../../../common/utils';

function Board(props){
    const [board, setBoard] = useState(GenerateCards());

    return (
        <div>
            {board.openCards.map(c=>ShowCards(c))}
        </div>
    );
}

function GenerateCards(){
    let board = {
        hiddenCards : [{level: 3}, {level: 2}, {level: 1}],
        openCards : [],
        openCardsQty: 4
    };

    board.hiddenCards.forEach(c => {
        c.cards = Cards.Cards.filter(x=> x.level == c.level);
        Util.shuffle(c.cards);
        let openCards = { level: c.level, cards:[] }
        for (let i = 0; i < board.openCardsQty; i++) {
            openCards.cards.push(c.cards.pop());
        }
        board.openCards.push(openCards);
    });

    return board;
}

function ShowCards(cardsObj){
    return (<div className="cards-level">
        <div className={"card card-level-" + cardsObj.level}></div>
        {cardsObj.cards.map(x=>{
            return (<Card IdCard={x.id} ></Card>)
        })}
        </div>)
}


export default Board;