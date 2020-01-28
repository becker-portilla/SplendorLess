import React from 'react';
import './card.css';

/*props: 
    Card ({})
    IsNoble (bool)
*/
function Card(props) {
    let card = props.Card;
    
  return (
  <div className={(props.IsNoble ? "card-noble" : "card") + " card-" + card.imageCode }>
    <div className="card-top">
      {
        ((card) => {
          let ret = [];
          if(card.victoryPoints > 0)
            ret.push(<div className="card-vp">{card.victoryPoints}</div>);
          if(!props.IsNoble)
            ret.push(<div className={"card-gem card-gem-" + card.gem}></div>);

            return ret;
        })(card)
      }
    </div>
    <div className="card-bottom">
      {
        card.cost.map(c=>{
          return (<div className="card-cost"> <span className={(props.IsNoble ? "card-noble-cost-gem" : "card-cost-gem") + " card-cost-gem-" + c.gem}>{c.qty}</span> </div>)
        })
      }
    </div>
  </div>);
}
export default Card;