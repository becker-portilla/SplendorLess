import React, { useState } from 'react';
import Cards from '../../../common/cards';
import Card from '../card/card';
import Noble from '../card/noble';
import Dummy from '../card/dummy';
import RowCards from './rowCards';
import Util from '../../../common/utils';
import utils from '../../../common/utils';

function Board(props){
    
    // //{ShowNobles(board.nobleCards)} 
    return (
        <div>
            <RowCards Level={3} StateCards={useState([])}></RowCards>
            <RowCards Level={2} StateCards={useState([])}></RowCards>
            <RowCards Level={1} StateCards={useState([])}></RowCards>
        </div>
    );
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

export default Board;