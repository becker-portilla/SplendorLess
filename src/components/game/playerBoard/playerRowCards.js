import React from 'react';
import Grid from '@material-ui/core/Grid/Grid'
import PlayerStackCards from './playerStackCards';

function PlayerRowCards(props){
    const playerCards = props.Cards;

    return (
        <Grid container direction="row">
            {
                playerCards.map((listCards,i)=>{
                    return (<Grid item key={'PSCG' + i}><PlayerStackCards Cards={listCards} key={'PSC' + i} IndexOrder={i}></PlayerStackCards></Grid>)
                })
            }
        </Grid>)
}

export default PlayerRowCards;
