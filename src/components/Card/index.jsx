import { PiHeartStraightBold, PiHeartStraightFill, PiCaretRightBold, PiPencilSimple } from "react-icons/pi";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

import { Counter } from '../Counter'

import { Container, Title, Description, Order } from "./styles";
import { useState } from "react";
import { Button } from "../Button";

export function Card({ data, isAdmin = false, ...rest }) {
  const [favorite, setFavorites] = useState(false)

  function handleIsFavorite() {
    setFavorites(true);
  }

  function handleRemoveFavorite() {
    setFavorites(false)
  }

  return (
    <Container {...rest}>

      {!isAdmin ?
        (favorite ?
          (<PiHeartStraightFill fill="white" onClick={handleRemoveFavorite} />)
          : (<PiHeartStraightBold onClick={handleIsFavorite} />))
        : (<PiPencilSimple />)}


      <img src={data.image} alt={`Image of dish ${data.name}`} />

      <Title>
        <h2>{data.name}</h2>
        <PiCaretRightBold />
      </Title>

      <Description>
        <p>{data.description}</p>

        <h3>R$ {data.price}</h3>

      </Description>

      {!isAdmin &&
        <Order>
          <Counter />
          <Button title="incluir" />
        </Order>
      }

    </Container>
  );
}
