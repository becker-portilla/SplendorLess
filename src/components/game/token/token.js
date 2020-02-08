import React from 'react';
import Util from '../../../common/utils';

function Token(props){
  const token = Util.GetToken(props.IdToken);

    return (
        <div className={"token token-" + token.gem}>
        </div>
    );
}

export default Token;