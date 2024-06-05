import {  useState } from "react";
import { PiPlus, PiMinus } from "react-icons/pi";

import { CounterContainer } from "./styles";

export function Counter({ title, quantity, setQuantity, ...rest }) {

  function handleIncrement() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleDecrement() {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prevState) => prevState - 1);
  }

   const formattedValue = (quantity || 1).toString().padStart(2, "0");

  return (
    <CounterContainer {...rest}>
      <button onClick={handleDecrement}>
        <PiMinus />
      </button>
      <span> {formattedValue} </span>
      <button onClick={handleIncrement}>
        <PiPlus />
      </button>
    </CounterContainer>
  );
}
