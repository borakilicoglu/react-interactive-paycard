import React, { useContext } from 'react'
import { CardContext } from '../../CardContext.js'

const CardItem = props => {
  const { card } = useContext(CardContext);
  return (
    <div className={"card-item" + (card.isCardFlipped ? " -active" : "")}> {props.children}</div>
  )
}

export default CardItem;