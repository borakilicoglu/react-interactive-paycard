import React, { useContext } from 'react'
import { CardContext } from '../../CardContext.js'

const CardFocus = () => {
  const { card } = useContext(CardContext);
  return (
    <div className={"card-item__focus" + (card.focusElementStyle ? " -active" : "")} style={card.focusElementStyle}></div>
  )
}

export default CardFocus;
