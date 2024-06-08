import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PiHeartStraightBold,
  PiHeartStraightFill,
  PiCaretRightBold,
  PiPencilSimple,
} from "react-icons/pi";

import { Counter } from "../Counter";
import { Button } from "../Button";
import { api } from "../../services/api";

import { CardContainer, Picture, Title, Description, Order } from "./styles";
import { toast } from "react-toastify";

export function Card({ data, onClick, isAdmin, ...rest }) {
  const navigate = useNavigate();
  const [favorite, setFavorites] = useState(false);
  const [quantity, setQuantity] = useState(1);

  async function handleClickFavorites() {
    try {
      const response = await api.post(`/favorites/${data.id}`);
      if (response.data) {
        toast.success("Prato adicionado aos seus favoritos!")
        setFavorites(true);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  }

  async function handleClickNoFavorites() {
    try {
      const response = await api.delete(`/favorites/${data.id}`);
      if (response.data) {
        toast.error("Prato removido dos seus favoritos!");
        setFavorites(false);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  }

  function handleRedirectToPageEdit(dish_id) {
    navigate(`/edit/${dish_id}`);
  }

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;
  const totalPrice = (parseFloat(data.price) * quantity).toFixed(2);

  const iconRender = () => {
    if (!isAdmin) {
      return favorite ? (
        <PiHeartStraightFill
          fill="red"
          className="favorite-red"
          onClick={handleClickNoFavorites}
        />
      ) : (
        <PiHeartStraightBold fill="white" onClick={handleClickFavorites} />
      );
    } else {
      return (
        <PiPencilSimple onClick={() => handleRedirectToPageEdit(data.id)} />
      );
    }
  };

  useEffect(() => {
    async function checkIfFavorited() {
      try {
        const response = await api.get(`/favorites`);
        const favorites = response.data;

        const isFavorited = favorites.some(
          (favoriteDish) => favoriteDish.id === data.id
        );
        setFavorites(isFavorited);
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      }
    }

    checkIfFavorited();
  }, [data.id]);

  return (
    <CardContainer isAdmin={isAdmin} data={data}>
      {iconRender()}

      <Picture onClick={onClick}>
        <img src={imageURL} alt={`Imagem do prato ${data.name}`} />
      </Picture>

      <Title onClick={onClick}>
        <h2>{data.name}</h2>
        <PiCaretRightBold />
      </Title>

      <Description>
        <p>{data.description}</p>
        <h3>R$ {totalPrice}</h3>
      </Description>

      {!isAdmin && (
        <Order>
          <Counter quantity={quantity} setQuantity={setQuantity} />
          <Button title="incluir" />
        </Order>
      )}
    </CardContainer>
  );
}
