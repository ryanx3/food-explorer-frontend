import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PiHeartStraightBold,
  PiHeartStraightFill,
  PiCaretRightBold,
  PiPencilSimple
} from "react-icons/pi";

//Components
import { Counter } from '../Counter';
import { Button } from "../Button";

import { Container, Picture, Title, Description, Order } from "./styles";

export function Card({ data, isAdmin = false, ...rest }) {
  const navigate = useNavigate();
  const [favorite, setFavorites] = useState(false);

  function handleIsFavorite() {
    setFavorites(true);
  }

  function handleOpenDetails() {
    navigate("/details");
  }

  function handleAdminEdit() {
      navigate("/edit");
  }

  function handleRemoveFavorite() {
    setFavorites(false);
  }

  return (
    <Container isAdmin={isAdmin} {...rest}>
      {!isAdmin ? (
        favorite ? (
          <PiHeartStraightFill onClick={handleRemoveFavorite} />
        ) : (
          <PiHeartStraightBold onClick={handleIsFavorite} />
        )
      ) : (
        <PiPencilSimple onClick={handleAdminEdit}/>
      )}

      <Picture onClick={handleOpenDetails}>
        <img
          src={data.image}
          alt={`Image of dish ${data.name}`}
        />
      </Picture>

      <Title onClick={handleOpenDetails}>
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