import React, { useState, createContext, useRef } from "react";

export const CardContext = createContext();
export const CardConsumer = CardContext.Consumer

export const CardProvider = props => {
  const [card, setCard] = useState({
    currentCardBackground: Math.floor(Math.random() * 25 + 1), // just for fun :D
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
    minCardYear: new Date().getFullYear(),
    amexCardMask: "#### ###### #####",
    otherCardMask: "#### #### #### ####",
    cardNumberTemp: "",
    isCardFlipped: false,
    focusElementStyle: null,
    isInputFocused: false,
    cardNumberRef: useRef(),
    cardNameRef: useRef(),
    cardDateRef: useRef(),
  });

  const getCardType = () => {
    let number = card.cardNumber
    let re = new RegExp("^4");
    if (number.match(re) != null) return "visa";

    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return "amex";

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return "mastercard";

    re = new RegExp("^6011");
    if (number.match(re) != null) return "discover";

    return "visa"; // default type
  }

  const generateCardNumberMask = () => {
    return getCardType() === "amex" ? card.amexCardMask : card.otherCardMask;
  }

  const value = { getCardType, generateCardNumberMask, card, setCard }

  return <CardContext.Provider value={value}>{props.children}</CardContext.Provider>
}
