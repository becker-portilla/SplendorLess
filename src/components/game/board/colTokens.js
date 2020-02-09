import React from 'react';
import Utils from '../../../common/utils';
import Dummy from '../card/dummy';
import Token from '../token/token';

/*props: 
    PlayersQty (int)
*/
function ColTokens(props){
    const [tokens, setTokens] = props.StateTokens;

    if(tokens.length === 0){
        setTokens(Utils.GetTokens());
    }

    const onClickToken = e => {
        setTokens(RemoveToken(tokens, e));
    };

    return (<div>
        {
            tokens.map((token, i) => {
                if(token.qty === 0)
                    return (<Dummy ClassStyle="token-empty" key={'TD' + i}></Dummy>)
                else
                    return <Token IdToken={token.id} onClick={onClickToken} key={'T' + token.id}></Token>
            })
        }
    </div>)
}

function RemoveToken(listTokens, idToken){
    listTokens.forEach(token => {
        if(token.id === idToken && token.qty > 0){
            token.qty--;
        }
    });

    return listTokens.slice(0);
}

export default ColTokens;
