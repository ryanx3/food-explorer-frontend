import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDish } from "../../hooks/Dish";
import { api } from "../../services/api";

import { LoaderSpinning } from "../../components/LoaderSpinning";
import { PageLayout } from "../../components/Layouts/PagesLayout";
import { ButtonBack } from "../../components/ButtonBack";
import { Section } from "../../components/Section";
import { Counter } from "../../components/Counter";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

import {
  DetailsContainer,
  Content,
  DetailsContent,
  CounterSection,
} from "./styles";
import { useCart } from "../../hooks/Cart";

export function Details({ isAdmin = false }) {
  const redirectTo = useNavigate();
  const params = useParams();

  const [quantity, setQuantity] = useState(1);
  const { dish, fetchDishDetails } = useDish();
  const { handleAddDishToLocalStorage } = useCart();

  function handleBackPage() {
    redirectTo("/");
  }

  function handleRedirectToEditDish(dish_id) {
    redirectTo(`/edit/${dish_id}`);
  }

  useEffect(() => {
    fetchDishDetails(params.id);
  }, []);

  if (!dish) {
    return <LoaderSpinning />;
  }

  const imageURL = `${api.defaults.baseURL}/files/${dish.image}`;

  return (
    <DetailsContainer>
      <PageLayout>
        <main>
          <Content>
            <div>
              <ButtonBack onClick={handleBackPage} />
            </div>

            <div className="dish-info">
              <img src={imageURL} alt={`Imagem do prato ${dish.name}`} />

              <DetailsContent>
                <Section>
                  <h1>{dish.name}</h1>
                  <p>{dish.description}</p>
                </Section>

                {dish.ingredients && (
                  <Section className="tags-section">
                    {dish.ingredients.map((ingredient) => (
                      <Tag
                        key={String(ingredient.id)}
                        title={ingredient.ingredient}
                      />
                    ))}
                  </Section>
                )}
                <CounterSection>
                  {!isAdmin && (
                    <Counter quantity={quantity} setQuantity={setQuantity} />
                  )}

                  {isAdmin && (
                    <Button
                      title={`Editar prato`}
                      onClick={() => handleRedirectToEditDish(dish.id)}
                    />
                  )}

                  {!isAdmin && <Button title={`incluir - R$ ${dish.price}`} onClick={() => handleAddDishToLocalStorage(dish, quantity)} />}
                </CounterSection>
              </DetailsContent>
            </div>
          </Content>
        </main>
      </PageLayout>
    </DetailsContainer>
  );
}
