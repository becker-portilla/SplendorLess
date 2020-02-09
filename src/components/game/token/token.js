import React from 'react';
import Util from '../../../common/utils';
import '../card/card.css';

function Token(props){
  const token = Util.GetToken(props.IdToken);

    return (
      <div className="token-container">
        <div className="token" onClick={e => props.onClick(token.id)}>
          <div className={"token-gem card-gem-" + token.gem}></div>
        </div>
        <span className="token-qty">{token.qty}</span>
      </div>
    );
}

export default Token;