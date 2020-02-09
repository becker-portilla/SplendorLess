import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid'
import RowCards from './rowCards';
import RowNobles from './rowNobles';
import ColTokens from './colTokens';

function Board(props){
    
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={9}>
                <RowNobles PlayersQty={props.PlayersQty || 0} StateNobles={useState([])}></RowNobles>
                <RowCards Level={3} StateCards={useState([])}></RowCards>
                <RowCards Level={2} StateCards={useState([])}></RowCards>
                <RowCards Level={1} StateCards={useState([])}></RowCards>
            </Grid>
            <Grid item xs={3}>
                <ColTokens StateTokens={useState([])}></ColTokens>
            </Grid>
        </Grid>
    );
}

export default Board;