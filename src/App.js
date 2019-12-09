import React, { Component } from "react";
import { render } from "react-dom";
import CardCover from "./components/card/CardCover"
import CardTop from "./components/card/CardTop"
import CardNumber from "./components/card/CardNumber"
import CardName from "./components/card/CardName"
import CardDate from "./components/card/CardDate"
import CardCcv from "./components/card/CardCcv";
import CardFocus from "./components/card/CardFocus";
import CardItem from "./components/card/CardItem";
import CardForm from "./components/form/CardForm";

import { CardProvider } from './CardContext.js'

import "./App.scss";

export default class App extends Component {

  componentDidMount() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  }

  minCardMonth() {
    if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
    return 1;
  }

  render() {
    return (
      <CardProvider>
        <div className="wrapper">
          <div className="card-form">
            <div className="card-list">
              <CardItem>
                <div className="card-item__side -front">
                  <CardFocus />
                  <CardCover />
                  <div className="card-item__wrapper">
                    <CardTop />
                    <CardNumber />
                    <div className="card-item__content">
                      <CardName />
                      <CardDate />
                    </div>
                  </div>
                </div>
                <div className="card-item__side -back">
                  <CardCover />
                  <div className="card-item__band"></div>
                  <CardCcv />
                </div>
              </CardItem>
            </div>
            <CardForm />
          </div>
        </div>
      </CardProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
