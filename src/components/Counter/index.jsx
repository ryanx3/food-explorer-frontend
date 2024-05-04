import { useState } from 'react';
import { PiPlus, PiMinus } from 'react-icons/pi'

import { CounterContainer } from "./styles";

export function Counter({ title, isAdmin = false, ...rest }) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrement() {
    setQuantity(prevState => prevState + 1)
    //setQuantity((parseInt(quantity, 10) + 1).toString().padStart(2, '0'));//
  }

  function handleDecrement() {
    if (quantity <= 1) {
      return
    }
    setQuantity(prevState => prevState - 1)
  }

  return (
    !isAdmin && 
    (<CounterContainer {...rest}>
    <button onClick={handleDecrement}><PiMinus/></button>
      <span> {quantity} </span>
    <button onClick={handleIncrement}><PiPlus/></button>
    </CounterContainer>)
  )
}