import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PiHeartStraightBold,
  PiHeartStraightFill,
  PiCaretRightBold,
  PiPencilSimple,
} from "react-icons/pi";

//Components
import { Counter } from "../Counter";
import { Button } from "../Button";
import { api } from "../../services/api";

import { CardContainer, Picture, Title, Description, Order } from "./styles";

export function Card({ data, onClick, isAdmin = false, ...rest }) {
  const navigate = useNavigate();
  const [favorite, setFavorites] = useState(false);

  function handleIsFavorite() {
    setFavorites(true);
  }

  function handleAdminEdit() {
    navigate("/edit");
  }

  function handleRemoveFavorite() {
    setFavorites(false);
  }

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;

 const renderIconIf = () => {
   if (!isAdmin) {
     return favorite ? (
       <PiHeartStraightFill onClick={handleRemoveFavorite} />
     ) : (
       <PiHeartStraightBold onClick={handleIsFavorite} />
     );
   } else {
     return <PiPencilSimple onClick={handleAdminEdit} />;
   }
 };

  return (
    <CardContainer isAdmin={isAdmin} data={data} >
      
      {renderIconIf}

      <Picture onClick={onClick}>
        <img src={imageURL} alt={`Image of dish ${data.name}`} />
      </Picture>

      <Title onClick={onClick}>
        <h2>{data.name}</h2>
        <PiCaretRightBold />
      </Title>

      <Description>
        <p>{data.description}</p>
        <h3>R$ {data.price}</h3>
      </Description>

      {!isAdmin && (
        <Order>
          <Counter />
          <Button title="incluir" />
        </Order>
      )}
    </CardContainer>
  );
}
