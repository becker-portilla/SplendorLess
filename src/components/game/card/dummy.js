import React from 'react';
import './card.css';

/*props: 
  classStyle (string)
*/
function Dummy(props) {
    let card = props.Card;
    
  return (
  <div className={props.ClassStyle}>
  </div>);
}
export default Dummy;