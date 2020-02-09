import React from 'react';
import Card from '../card/card';

function PlayerStackCards(props){
    const playerCards = props.Cards || [];
    const indexOrder = props.IndexOrder || 0;

    return (<div className="card-stack-container" style={{left:indexOrder*175}}>
        {playerCards.map((x,i)=>{
                return (<div className="card-stack" key={'PSCD' + i} style={{zIndex:i+1, top:(50*i)}}><Card IdCard={x} onClick={()=>{}} key={'PSCC' + x}></Card></div>)
        })}
        </div>)
}

export default PlayerStackCards;
