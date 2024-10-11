import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PiHeartStraightBold,
  PiHeartStraightFill,
  PiCaretRightBold,
  PiPencilSimple,
} from "react-icons/pi";

import { USER_ROLES } from "../utils/roles";

import { Counter } from "./Counter";
import { Button } from "./Button";
import { api } from "../services/api";

import { toast } from "react-toastify";
import { useCart } from "../hooks/Cart";
import { useAuth } from "../hooks/Auth";

import { CardContainer, Picture, Title, Description, Order } from "./styles/Card";

export function Card({ dish, onClick, ...rest }) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { handleAddDishToLocalStorage } = useCart();

  const { user } = useAuth();

  async function handleClickFavorites(e) {
    e.stopPropagation();
    try {
      await api.post(`/favorites/${dish.id}`);
      toast.success(`${dish.name} foi adicionado aos seus favoritos!`);
      setFavorite(true);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Erro ao favoritar o prato");
      }
    }
  }

  async function handleClickNoFavorites(e) {
    e.stopPropagation();
    try {
      await api.delete(`/favorites/${dish.id}`);
      toast.error(`${dish.name} foi removido dos seus favoritos!`);
      setFavorite(false);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Erro ao desfavoritar o prato");
      }
    }
  }

  function handleRedirectToPageEdit() {
    navigate(`/edit/${dish.id}`);
  }

  const imageURL = `${api.defaults.baseURL}/files/${dish.image}`;

  const iconRender = () => {
    if (user?.role === USER_ROLES.CUSTOMER) {
      return !favorite ? (
        <PiHeartStraightBold fill="white" onClick={handleClickFavorites} />
      ) : (
        <PiHeartStraightFill
          className="favorite-red"
          onClick={handleClickNoFavorites}
        />
      );
    } else if (user?.role === USER_ROLES.ADMIN) {
      return <PiPencilSimple onClick={handleRedirectToPageEdit} />;
    }
  };

  useEffect(() => {
    async function checkIfFavorited() {
      try {
        const response = await api.get(`/favorites`);
        const favorites = response.data;

        const isFavorited = favorites.some(
          (favoriteDish) => favoriteDish.id === dish.id
        );
        setFavorite(isFavorited);
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Erro ao verificar favoritos");
        }
      }
    }

    checkIfFavorited();
  }, [dish.id]);

  return (
    <CardContainer dish={dish} {...rest}>
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
        <h3>R$ {dish.price.toFixed(2).replace(".", ",")}</h3>
      </Description>

      {user?.role === USER_ROLES.CUSTOMER && (
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
