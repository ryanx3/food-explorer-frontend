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
import { useCart } from "../../hooks/Cart";

export function Card({ dish, onClick, isadmin, ...rest }) {
  const navigate = useNavigate();
  const [favorite, setFavorites] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { handleAddDishToLocalStorage } = useCart();

  async function handleClickFavorites() {
    try {
      const response = await api.post(`/favorites/${dish.id}`);
      if (response.dish) {
        toast.success(`${dish.name} foi adicionado aos seus favoritos!`);
        setFavorites(true);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.dish.message);
      }
    }
  }

  async function handleClickNoFavorites() {
    try {
      const response = await api.delete(`/favorites/${dish.id}`);
      if (response.dish) {
        toast.error(`${dish.name} foi removido dos seus favoritos!`);
        setFavorites(false);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.dish.message);
      }
    }
  }

  function handleRedirectToPageEdit() {
    navigate(`/edit/${dish.id}`);
  }

  const imageURL = `${api.defaults.baseURL}/files/${dish.image}`;

  const iconRender = () => {
    if (!isadmin) {
      return favorite ? (
        <PiHeartStraightFill
          className="favorite-red"
          onClick={handleClickNoFavorites}
        />
      ) : (
        <PiHeartStraightBold fill="white" onClick={handleClickFavorites} />
      );
    } else {
      return <PiPencilSimple onClick={handleRedirectToPageEdit} />;
    }
  };

  useEffect(() => {
    async function checkIfFavorited() {
      try {
        const response = await api.get(`/favorites`);
        const favorites = response.dish;

        const isFavorited = favorites.some(
          (favoriteDish) => favoriteDish.id === dish.id
        );
        setFavorites(isFavorited);
      } catch (error) {
        if (error.response) {
          toast.error(error.response.dish.message);
        }
      }
    }

    checkIfFavorited();
  }, [dish.id]);

  return (
    <CardContainer isadmin={isadmin} dish={dish} {...rest}>
      {iconRender()}

      <Picture onClick={onClick}>
        <img src={imageURL} alt={`Imagem do prato ${dish.name}`} />
      </Picture>

      <Title onClick={onClick}>
        <h2>{dish.name}</h2>
        <PiCaretRightBold />
      </Title>

      <Description>
        <p>{dish.description}</p>
        <h3>R$ {dish.price.toLocaleString("pt-BR")}</h3>
      </Description>

      {!isadmin && (
        <Order>
          <Counter quantity={quantity} setQuantity={setQuantity} />
          <Button
            title="incluir"
            onClick={() => handleAddDishToLocalStorage(dish, quantity)}
          />
        </Order>
      )}
    </CardContainer>
  );
}
