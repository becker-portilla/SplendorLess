import React from 'react';
import './card.css';

/*props: 
    Card ({})
    onClick (event)
*/
function Card(props) {
    let card = props.Card;
    
  return (
  <div className={"card card-" + card.imageCode } onClick={e => props.onClick(card)}>
    <div className="card-top">
      {
        ((card) => {
          let ret = [];
          if(card.victoryPoints > 0)
            return <div className="card-vp">{card.victoryPoints}</div>;
        })(card)
      }
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