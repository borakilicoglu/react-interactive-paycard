import React, { useContext, useEffect, useRef } from "react";
import { CardContext } from '../../CardContext.js'
import MaskInput from 'react-maskinput';

const CardForm = () => {
  const { generateCardNumberMask, card, setCard } = useContext(CardContext);
  const cardCcv = useRef();
  const mask = generateCardNumberMask();

  const updateCard = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setCard({ ...card, [key]: value });
  }

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => { document.removeEventListener("click", handleClick); };
    });
  };

  useOutsideClick(cardCcv, () => {
    setCard({ ...card, isCardFlipped: false });
  });

  const onCvvFocus = event => {
    setCard({ ...card, isCardFlipped: true });
  };

  const onCvvBlur = event => {
    setCard({ ...card, isCardFlipped: true });
  };

  const focusInput = (event) => {
    let target = event.target.name === 'cardMonth' || event.target.name === 'cardYear' ? card.cardDateRef.current : card[`${event.target.name}Ref`].current;
    setCard({
      ...card,
      isInputFocused: true,
      focusElementStyle: {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
      }
    })
  }

  const handleBlur = (e) => {
    setCard({ ...card, isInputFocused: false, focusElementStyle: null })
  }

  return (
    <div className="card-form__inner">
      <div className="card-input">
        <label htmlFor="cardNumber" className="card-input__label">
          <p>{card.isInputFocused}</p>
          Card Number
        </label>{" "}
        <MaskInput
          className={"card-input__input" + (card.focusElementStyle ? ' -active' : '')}
          onBlur={handleBlur}
          name="cardNumber"
          id="cardNumber"
          onChange={updateCard}
          onFocus={focusInput}
          maskChar=" "
          mask={mask.replace(/#/g, "0")}
        />
      </div>{" "}
      <div className="card-input">
        <label htmlFor="cardName" className="card-input__label">
          Card Holders
        </label>{" "}
        <input
          onChange={updateCard}
          onFocus={focusInput}
          onBlur={handleBlur}
          type="text"
          id="cardName"
          name="cardName"
          autoComplete="off"
          className={"card-input__input" + (card.focusElementStyle ? ' -active' : '')}
        />
      </div>{" "}
      <div className="card-form__row">
        <div className="card-form__col">
          <div className="card-form__group">
            <label className="card-input__label">
              Expiration Date
            </label>{" "}
            <select
              onChange={updateCard}
              onFocus={focusInput}
              onBlur={handleBlur}
              id="cardMonth"
              name="cardMonth"
              className="card-input__input -select"
            >
              <option defaultValue="" disabled="disabled">
                Month
              </option>{" "}
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>{" "}
            <select
              onChange={updateCard}
              onFocus={focusInput}
              onBlur={handleBlur}
              id="cardYear"
              name="cardYear"
              className="card-input__input -select"
            >
              <option defaultValue="" disabled="disabled">
                Year
              </option>{" "}
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
        </div>{" "}
        <div className="card-form__col -cvv">
          <div className="card-input">
            <label htmlFor="cardCvv" className="card-input__label">
              CVV
            </label>{" "}
            <input
              ref={cardCcv}
              onClick={onCvvFocus}
              onChange={updateCard}
              onBlur={onCvvBlur}
              type="text"
              name="cardCvv"
              id="cardCvv"
              maxLength="4"
              autoComplete="off"
              className="card-input__input"
            />
          </div>
        </div>
      </div>{" "}
      <button className="card-form__button">Submit</button>
    </div>
  )
}

export default CardForm;