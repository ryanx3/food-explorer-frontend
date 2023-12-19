import { PiPlus, PiMinus, PiHeartBold, PiCaretRightBold, PiPencilSimple } from "react-icons/pi";

import { Button } from '../Button'

import { Container, Title, Order } from "./styles";

export function Card({ data, isAdmin=false, ...rest }) {
  return (
    <Container {...rest}>

      {isAdmin ? <PiPencilSimple/> : <PiHeartBold/> }

      <img src={data.image} alt={`Image of dish ${data.name}`} />

      <h1>{data.name}<PiCaretRightBold/></h1>
      <p>{data.description}</p>

      <Title>
      <h2>R$ {data.value}</h2>
      </Title>


      { isAdmin=true && 
      <Order>
        <button><PiMinus/></button>
        <span>01</span>
        <button><PiPlus/></button>

        <Button title="incluir"/>
      </Order>}

    </Container>
  );
}
