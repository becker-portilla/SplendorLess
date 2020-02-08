import React, { useState } from 'react';
import RowCards from './rowCards';
import RowNobles from './rowNobles';

function Board(props){
    
    return (
        <div>
            <RowNobles PlayersQty={props.PlayersQty || 0} StateNobles={useState([])}></RowNobles>
            <RowCards Level={3} StateCards={useState([])}></RowCards>
            <RowCards Level={2} StateCards={useState([])}></RowCards>
            <RowCards Level={1} StateCards={useState([])}></RowCards>
        </div>
    );
}

export default Board;