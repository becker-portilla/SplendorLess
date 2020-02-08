import React from 'react';
import Noble from '../card/noble';
import Dummy from '../card/dummy';
import Utils from '../../../common/utils';
import Constants from '../../../common/constants';

/*props: 
    PlayersQty (int)
*/
function RowNobles(props){
    const [openNobles, setOpenNobles] = props.StateNobles;

    if(openNobles.length === 0){
        setOpenNobles(GetOpenNobles(props.PlayersQty));
    }

    const onClickCard = e => {
        setOpenNobles(RemoveNoble(openNobles, e));
    };

    return (<div>
        {
            openNobles.map((list, i) => {
                return ( <div className="cards-level" key={'RN' + i}>
                    {list.map((idCard, j) => {
                        if(Utils.IsDummyCard(idCard))
                            return (<Dummy ClassStyle="card-empty" key={'ND' + j}></Dummy>)
                        else
                            return (<Noble IdCard={idCard} onClick={onClickCard} key={'N' + idCard}></Noble>)
                    })}
                </div>
                )
            })
        }
    </div>)
}

function GetOpenNobles(playersQty){
    const cards = Utils.GetNobles(playersQty + 1);
    let ret = [];
    while(cards.length > 0){
        ret.push(cards.splice(0, Constants.Constants.CardsByRow));
    }
    ret.reverse();
    
    return ret;
}

function RemoveNoble(listNobles, idNoble){
    let newCard = Utils.GetDummyCard();

    for (let i = 0; i < listNobles.length; i++) {
        for (let j = 0; j < listNobles[i].length; j++) {

            if(listNobles[i][j] === idNoble){
                listNobles[i][j] = newCard;
                break;
            }
        }
    }

    return listNobles.slice(0);
}

export default RowNobles;
