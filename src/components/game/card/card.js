import React from 'react';
import Util from '../../../common/utils';
import './card.css';

/*props: 
    IdCard (int)
    onClick (event)
*/
function Card(props) {
  let card = Util.GetCard(props.IdCard);

  return (
  <div className={"card card-" + card.imageCode } onClick={e => props.onClick(card.id)}>
    <div className="card-top">
      {
        ((card) => {
          let ret = [];
          if(card.victoryPoints > 0)
            return <div className="card-vp">{card.victoryPoints}</div>;
        })(card)
      }
      <div className={"card-gem card-gem-" + card.gem}></div>
    </div>
    <div className="card-bottom">
      {
        card.cost.map(c=>{
          return (<div className="card-cost" key={card.id + '-' + c.gem + '-' + c.qty}> <span className={"card-cost-gem card-cost-gem-" + c.gem}>{c.qty}</span> </div>)
        })
      }
    </div>
  </div>);
}

export default Card;