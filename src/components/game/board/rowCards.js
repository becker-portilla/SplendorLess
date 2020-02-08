import React from 'react';
import Card from '../card/card';
import Dummy from '../card/dummy';
import Utils from '../../../common/utils';
import Constants from '../../../common/constants';

/*props: 
    Level (int)
*/
function RowCards(props){
    const level = props.Level;

    const hiddenCards = Utils.GetCardsByLevel(level);
    const [openCards, setOpenCards] = props.StateCards;

    if(openCards.length === 0){
        setOpenCards(GetOpenCards(hiddenCards));
        Utils.SaveCardsByLevel(hiddenCards, level);
    }

    const onClickCard = e => {
        setOpenCards(ChangeCard(openCards, e, level));
    };

    return (<div className="cards-level">
        {<Dummy ClassStyle={"card card-level-" + level}></Dummy>}
        {openCards.map((x,i)=>{
            if(Utils.IsDummyCard(x))
                return (<Dummy ClassStyle="card-empty" key={'CD' + i}></Dummy>)
            else
                return (<Card IdCard={x} onClick={onClickCard} key={'C' + x}></Card>)
        })}
        </div>)
}

function GetOpenCards(hiddenCards){
    let cards = [];

    for (let i = 0; i < Constants.Constants.CardsByRow - 1; i++) {
        cards.push(hiddenCards.pop());
    }

    return cards;
}

function ChangeCard(toList, idCard, level){
    let fromList = Utils.GetCardsByLevel(level);
    let newCard = fromList.length > 0 ? fromList.pop() : Utils.GetDummyCard();
    
    Utils.SaveCardsByLevel(fromList, level);

    for (let i = 0; i < toList.length; i++) {
        if(toList[i] === idCard){
            toList[i] = newCard;
            break;
        }
    }

    return toList.slice(0);
}

export default RowCards;
