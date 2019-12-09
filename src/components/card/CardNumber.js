import React, { useContext } from "react";
import { CardContext } from "../../CardContext"

const CardNumber = () => {
  const { getCardType, card } = useContext(CardContext);
  return (
    <label
      htmlFor="cardNumber"
      className="card-item__number"
    >
      {
        getCardType() === "amex" ? (
          card.amexCardMask.split('').map((n, index) => (
            <div key={index} className={`card-item__numberItem` + (n.trim() === '' ? ` -active` : '')}>{index > 4 && index < 14 && card.cardNumber.length > index && n.trim() !== '' ? "*" : card.cardNumber.length > index ? card.cardNumber[index] : n}</div>
          ))
        ) : (
            card.otherCardMask.split('').map((n, index) => (
              <div key={index} className={`card-item__numberItem` + (n.trim() === '' ? ` -active` : '')}>{index > 4 && index < 15 && card.cardNumber.length > index && n.trim() !== '' ? "*" : card.cardNumber.length > index ? card.cardNumber[index] : n}</div>
            ))
          )
      }
    </label >
  );
}

export default CardNumber;
