import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid/Grid'
import RowTokens from './rowTokens';
import PlayerRowCards from './playerRowCards';
import Util from '../../../common/utils';
import Svc from '../../../common/services';

function PlayerBoard(props){
    // const tokens = props.Tokens || [];
    // const cards = props.Cards || [];
    // const noble = props.Noble || Util.GetDummyCard();

    // const [tokens, setTokens] = useState([]);
    const [cards, setCards] = useState([]);
    // const [noble, setNoble] = useState([]);

    useEffect(()=>{
        Svc.GetCardsPlayerBoard(1, (playerData) => {
            setCards(playerData.cards);
        });
    }, []);

    const orderedTokens = GetOrderedTokens(Util.GetTokens());
    // const orderedCards = GetOrderedCards([1,2,43,44,45,76,77,78,90,35,55,67,68,8,25]);

    return (
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            <Grid item xs={12}>
                <RowTokens StateTokens={useState(orderedTokens)}></RowTokens>
            </Grid>
            <Grid item xs={12}>
                <PlayerRowCards Cards={GetOrderedCards(cards)}></PlayerRowCards>
            </Grid>
        </Grid>
    );
}

function GetOrderedTokens(listTokens){
    const baseOrder = Util.GetTokens();
    let orderedTokens = [];

    baseOrder.forEach(x=>{
        const token = listTokens.filter(y=>y.gem === x.gem) || [{id:x.id, gem:x.gem, qty:0}];

        orderedTokens.push(token[0]);
    });

    return orderedTokens;
}

function GetOrderedCards(listCards){
    const baseOrder = Util.GetTokens();
    const listObjCards = listCards.map(x => Util.GetCard(x));
    let orderedCards = [];

    baseOrder.forEach(x=>{
        const cards = listObjCards.filter(y=>y.gem === x.gem) || [];

        orderedCards.push(cards.map(x=>x.id));
    });

    return orderedCards;
}

export default PlayerBoard;