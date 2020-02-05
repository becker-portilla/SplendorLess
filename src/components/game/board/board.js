import React, { useState } from 'react';
import Cards from '../../../common/cards';
import Card from '../card/card';
import Noble from '../card/noble';
import Dummy from '../card/dummy';
import RowCards from './rowCards';
import Util from '../../../common/utils';

function Board(props){
    let [l1, l2, l3, hiddenCards] = GenerateCards(props);
    const [opnCardsL1, setOpnCardsL1] = useState(l1);
    const [opnCardsL2, setOpnCardsL2] = useState(l2);
    const [opnCardsL3, setOpnCardsL3] = useState(l3);
    const [idTest, setIdTest] = useState(0);

    SetHiddenCards(hiddenCards.filter(x=>x.level === 1)[0].cards, 1);
    SetHiddenCards(hiddenCards.filter(x=>x.level === 2)[0].cards, 2);
    SetHiddenCards(hiddenCards.filter(x=>x.level === 2)[0].cards, 3);

    const onClickCard = e => {
        setIdTest(e.id);
        switch (e.level) {
            case 1:
                setOpnCardsL1(ChangeCard(opnCardsL1, e.id, e.level));
                break;
            case 2:
                setOpnCardsL2(ChangeCard(opnCardsL2, e.id, e.level));
                break;
            case 3:
                setOpnCardsL3(ChangeCard(opnCardsL3, e.id, e.level));
                break;
        }
    };
    // //{ShowNobles(board.nobleCards)} 
    return (
        <div>
            <RowCards Cards={opnCardsL3} onClick={onClickCard}></RowCards>
            <RowCards Cards={opnCardsL2} onClick={onClickCard}></RowCards>
            <RowCards Cards={opnCardsL1} onClick={onClickCard}></RowCards>
        </div>
    );
}

function GetCard(idCard){
    return Cards.Cards.filter(x=> x.id === idCard)[0];
}

function GetHiddenCards(level){
    switch (level) {
        case 1:
            return JSON.parse(sessionStorage.getItem('HiddenCards1'));
        case 2:
            return JSON.parse(sessionStorage.getItem('HiddenCards2'));
        case 3:
            return JSON.parse(sessionStorage.getItem('HiddenCards3'));
    }
}

function SetHiddenCards(hiddenCards, level){
    switch (level) {
        case 1:
            sessionStorage.setItem('HiddenCards1', JSON.stringify(hiddenCards));
        case 2:
            sessionStorage.setItem('HiddenCards2', JSON.stringify(hiddenCards));
        case 3:
            sessionStorage.setItem('HiddenCards3', JSON.stringify(hiddenCards));
    }
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

    return [board.openCards[2], board.openCards[1], board.openCards[0], board.hiddenCards];
}

function ShowCards(cardsObj, clickCardHandle){
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

function ChangeCard(toList, idCard, level){
console.log(JSON.stringify(toList));
console.log(idCard);
    let fromList = GetHiddenCards(level);
    let newCard = fromList.length > 0 ? fromList.pop() : {isDummy:true};
console.log(newCard);
    
    SetHiddenCards(fromList, level);

    for (let i = 0; i < toList.cards.length; i++) {
        if(toList.cards[i].id == idCard){
            toList.cards[i] = newCard;
        }
    }
    console.log(toList);

    return toList;
}

export default Board;