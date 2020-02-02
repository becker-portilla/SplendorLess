import React from 'react';
import './card.css';

/*props: 
    Card ({})
*/
function Noble(props) {
    let card = props.Card;
    
  return (
  <div className={"card-noble" + " card-" + card.imageCode }>
    <div className="card-top">
        <div className="card-vp">{card.victoryPoints}</div>
    </div>
    <div className="card-bottom">
      {
        card.cost.map(c=>{
          return (<div className="card-cost"> <span className={"card-noble-cost-gem card-cost-gem-" + c.gem}>{c.qty}</span> </div>)
        })
      }
    </div>
  </div>);
}
export default Noble;