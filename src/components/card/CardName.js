import React, { useContext } from "react";
import { CardContext } from "../../CardContext";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const style = {
  fontSize: "18px",
  lineHeight: "1",
  whiteSpace: "nowrap",
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textTransform: "uppercase"
}

const CardName = props => {
  const { card } = useContext(CardContext);
  return (
    <label htmlFor="cardName" className="card-item__info">
      <div className="card-item__holder">Card Holder</div>
      <CSSTransition in={!card.cardName.length} timeout={500} classNames="slide-fade-up"><div className="card-item__name" style={{ position: "absolute" }} >Full Name</div></CSSTransition>
      {
        <div className="card-item__name">
          <TransitionGroup style={style}>
            {
              card.cardName.split('').map((n, index) => {
                let animation = index === 0 ? 'slide-fade-up' : 'move';
                return [
                  <CSSTransition in={!!card.cardName.length} key={index} timeout={500} classNames={animation}><span className="card-item__nameItem">{n}</span></CSSTransition>
                ]
              })
            }
          </TransitionGroup>
        </div>
      }
    </label>
  )
}

export default CardName;