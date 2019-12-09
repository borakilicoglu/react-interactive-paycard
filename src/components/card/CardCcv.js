import React, { useContext } from "react";
import { CardContext } from "../../CardContext"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const CardCcv = () => {
  const { card, getCardType } = useContext(CardContext);
  let type = getCardType();
  return (
    <div className="card-item__cvv">
      <div className="card-item__cvvTitle">CVV</div>
      <div className="card-item__cvvBand">
        {card.cardCvv.split('').map((val, index) => (
          <span key={index}>*</span>
        ))}
      </div>
      <div className="card-item__type">
        <TransitionGroup component={null}>
          <CSSTransition timeout={500} key={type} classNames="slide-fade-up">
            <img
              alt=""
              src={`https://res.cloudinary.com/dvq6gu2yi/image/upload/v1575880187/react-interactive-paycard/${type}.png`}
              key={type}
              className="card-item__typeImg"
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default CardCcv;