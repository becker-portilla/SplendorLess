import React from 'react';
import Cards from '../../../common/cards';
import './card.css';

/*props: 
    idCard (int)
*/
function Card(props) {
    let card = Cards.filter(x=>x.id == props.IdCard)[0];
    
  return (
  <div className={"card card-" + card.imageCode}>
    <div className="card-top">
      {
        ((card) => {
          if(card.victoryPoints > 0)
            return (<div className="card-vp">{card.victoryPoints}</div>)
        })(card)
      }
      <div className={"card-gem card-gem-" + card.gem}></div>
    </div>
    <div className="card-bottom">
      {
        card.cost.map(c=>{
          return (<div className={"card-cost card-gem-" + card.gem}> {c.qty} </div>)
        })
      }
    </div>
  </div>);
}
export default Card;