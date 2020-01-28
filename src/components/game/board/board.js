import React, { useState } from 'react';
import Cards from '../../../common/cards';
import Card from '../card/card';
import Util from '../../../common/utils';

function Board(props){
    const [board, setBoard] = useState(GenerateCards(props));

    return (
        <div>
            {ShowCards(board.nobleCards, true)}
            {board.openCards.map(c=>ShowCards(c, false))}
        </div>
    );
}

function GenerateCards(props){
    let board = {
        hiddenCards : [{level: 3}, {level: 2}, {level: 1}],
        openCards : [],
        openCardsQty: 4,
        nobleCards: []
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
    let nobleCards = Cards.Nobles.slice();
    Util.shuffle(nobleCards);
    board.nobleCards = { cards : nobleCards.slice(0, props.PlayersQty + 1)};

    return board;
}

function ShowCards(cardsObj, isNoble){
    return (<div className="cards-level">
        {
            ((cardsObj) => {
                if(cardsObj.level)
                    return <div className={"card card-level-" + cardsObj.level}></div>
            })(cardsObj)
        }

        {cardsObj.cards.map(x=>{
            return (<Card Card={x} IsNoble={isNoble} ></Card>)
        })}
        </div>)
}


export default Board;