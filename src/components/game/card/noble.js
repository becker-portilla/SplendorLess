import React from 'react';
import Util from '../../../common/utils';
import './card.css';

/*props: 
    Card ({})
*/
function Noble(props) {
  let card = Util.GetNoble(props.IdCard);
    
  return (
  <div className={"card-noble card-" + card.imageCode } onClick={e => props.onClick(card.id)}>
    <div className="card-top">
        <div className="card-vp">{card.victoryPoints}</div>
    </div>
    <div className="card-bottom">
      {
        card.cost.map(c=>{
          return (<div className="card-cost" key={'NC' + card.id + '-' + c.gem + '-' + c.qty}> <span className={"card-noble-cost-gem card-cost-gem-" + c.gem}>{c.qty}</span> </div>)
        })
      }
    </div>
  </div>);
}
export default Noble;