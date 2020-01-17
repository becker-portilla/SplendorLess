import React from 'react';
import Cards from '../../../common/cards';

/*props: 
    idCard (int)
*/
function Card() {
    let card = Cards.filter(x=>x.id == this.props.IdCard);
    
  return (<h1></h1>);
}
export default Card;