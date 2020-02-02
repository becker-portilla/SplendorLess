import React, { useState } from 'react';
import Cards from '../../../common/cards';
import Card from '../card/card';
import Noble from '../card/noble';
import Dummy from '../card/dummy';
import Util from '../../../common/utils';

function Board(props){
    const [board, setBoard] = useState(GenerateCards(props));

    const onClickCard = e => {
        let newOpenCards = ChangeCard(board.hiddenCards, board.openCards, e.id);
        board.openCards = newOpenCards;
        console.log(board);
        setBoard(board);
    };
    //{ShowNobles(board.nobleCards)} 
    return (
        <div>
            {board.openCards.map(c=>ShowCards(c, onClickCard))}
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

function ShowCards(cardsObj, clickCardHandle){
    return (<div className="cards-level">
        {<Dummy ClassStyle={"card card-level-" + cardsObj.level}></Dummy>}
        {cardsObj.cards.map(x=>{
            if(x.isDummy)
                return (<Dummy ClassStyle="card-empty"></Dummy>)
            else
                return (<Card Card={x} onClick={clickCardHandle}></Card>)
        })}
        </div>)
}

function ShowNobles(cardsObj){
    return (<div className="cards-level">
        {cardsObj.cards.map(x=>{
            if(x.isDummy)
                return (<Dummy ClassStyle="card-noble-empty"></Dummy>)
            else
                return (<Noble Card={x} ></Noble>)
        })}
        </div>)
}

function ChangeCard(fromList, toList, idCard){
    let newCard = fromList.length > 0 ? fromList.pop() : {isDummy:true};
    
    for (let i = 0; i < toList.length; i++) {
        if(toList[i].id == idCard)
        toList[i] = newCard;
    }

    return toList;
}

export default Board;