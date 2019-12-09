import React, { useContext } from "react";
import { CardContext } from "../../CardContext"
import {
  SwitchTransition,
  CSSTransition
} from 'react-transition-group';

const CardDate = () => {
  const { card } = useContext(CardContext);

  return (
    <div className="card-item__date">
      <label htmlFor="cardMonth" className="card-item__dateTitle">
        Expires
      </label>
      <label htmlFor="cardMonth" className="card-item__dateItem">
        <SwitchTransition in-out>
          {!card.cardMonth ? (
            <CSSTransition
              classNames="slide-fade-up"
              timeout={250}
              key={card.cardMonth}
            >
              <span>MM</span>
            </CSSTransition>
          ) : (
              <CSSTransition
                classNames="slide-fade-up"
                timeout={250}
                key={card.cardMonth}
              >
                <span>{card.cardMonth}</span>
              </CSSTransition>
            )}
        </SwitchTransition>
      </label>
      /
      <label htmlFor="cardYear" className="card-item__dateItem">
        <SwitchTransition in-out>
          {!card.cardYear ? (
            <CSSTransition
              classNames="slide-fade-up"
              timeout={500}
              key={card.cardYear}
            >
              <span>MM</span>
            </CSSTransition>
          ) : (
              <CSSTransition
                classNames="slide-fade-up"
                timeout={500}
                key={card.cardYear}
              >
                <span>{card.cardYear.toString().substr(-2)}</span>
              </CSSTransition>
            )}
        </SwitchTransition>
      </label>
    </div>
  )
}

export default CardDate;