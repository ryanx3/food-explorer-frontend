import { PiPlus, PiMinus } from 'react-icons/pi'

import { Button } from "../Button";

import { Container } from "./styles";
import { useState } from 'react';

export function Counter({ title, isAdmin = false, ...rest }) {
  const [quantity, setQuantity] = useState('01')

  function handleIncrement() {
    setQuantity((parseInt(quantity, 10) + 1).toString().padStart(2, '0'));
  }

  function handleDecrement() {
    if (quantity <= 1) {
      return
    }
    setQuantity((parseInt(quantity, 10) - 1).toString().padStart(2, '0'))
  }

  return (
    !isAdmin && (<Container {...rest}>
        <button onClick={handleDecrement}> <PiMinus /></button>
        <span> {quantity} </span>
        <button onClick={handleIncrement}> <PiPlus/></button>
    </Container>)
  )
}