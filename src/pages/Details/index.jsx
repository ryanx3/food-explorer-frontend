import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { PiCaretLeft } from "react-icons/pi";

import { PageLayout } from "../../components/Layouts/PagesLayout";
import { FadeLoader } from "react-spinners";
import { Section } from "../../components/Section";
import { Counter } from "../../components/Counter";
import { Button } from "../../components/Button";
import { useDish } from "../../hooks/Dish";
import { Tag } from "../../components/Tag";

import {
  DetailsContainer,
  Content,
  DetailsContent,
  CounterSection,
} from "./styles";

export function Details({ isAdmin = false }) {
  const redirectTo = useNavigate();
  const params = useParams();

  const [quantity, setQuantity] = useState(1);
  const { dish, fetchDishDetails } = useDish();

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
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FadeLoader color="white" />
      </div>
    );
  }

  const totalPrice = (parseFloat(dish.price) * quantity).toFixed(2);

  const imageURL = `${api.defaults.baseURL}/files/${dish.image}`;

  return (
    <DetailsContainer>
      <PageLayout>
        <main>
          <Content>
            <div>
              <a onClick={handleBackPage}>
                <PiCaretLeft size={32} />
                Voltar
              </a>
            </div>

            <div className="DishInformations">
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

                  {!isAdmin && <Button title={`incluir - R$ ${totalPrice}`} />}
                </CounterSection>
              </DetailsContent>
            </div>
          </Content>
        </main>
      </PageLayout>
    </DetailsContainer>
  );
}
