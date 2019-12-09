import React, { useContext } from "react";
import { CardContext } from "../../CardContext"
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CardTop = props => {
  const { getCardType } = useContext(CardContext);
  let type = getCardType();
  return (
    <div className="card-item__top">
      <img
        alt=""
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
        className="card-item__chip"
      />
      <div className="card-item__type">
        <TransitionGroup component={null}>
          <CSSTransition timeout={500} key={type} classNames="slide-fade-up">
            <img
              style={{ position: "absolute" }}
              src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${type}.png`}
              alt=""
              key={type}
              className="card-item__typeImg"
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default CardTop;
