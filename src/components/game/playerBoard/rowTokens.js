import React from 'react';
import Grid from '@material-ui/core/Grid/Grid'
import Dummy from '../card/dummy';
import PlayerToken from '../token/token';

function RowTokens(props){
    const [tokens, setTokens] = props.StateTokens;

    const onClickToken = e => {
        setTokens(RemoveToken(tokens, e));
    };

    return (<Grid container direction="row">
        {
            tokens.map((token, i) => {
                if(token.qty === 0)
                    return (<Grid item key={'GRTD' + i}><Dummy ClassStyle="token-empty" key={'RTD' + i}></Dummy></Grid>);
                else
                    return (<Grid item key={'GRT' + token.id} style={{marginLeft:30}}><PlayerToken IdToken={token.id} onClick={onClickToken} key={'RT' + token.id}></PlayerToken></Grid>);

            })
        }
    </Grid>)
}

function RemoveToken(listTokens, idToken){
    listTokens.forEach(token => {
        if(token.id === idToken && token.qty > 0){
            token.qty--;
        }
    });

    return listTokens.slice(0);
}

export default RowTokens;
