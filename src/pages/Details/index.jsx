import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../services/api";

import { PiCaretLeft } from "react-icons/pi";

import { PageLayout } from "../../components/Layouts/PagesLayout";
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
import { useDish } from "../../hooks/Dish";
import { FadeLoader } from "react-spinners";

export function Details({ isAdmin = true }) {
  const redirectTo = useNavigate();
  const params = useParams();
  const { dish, fetchDishDetails } = useDish();

  function handleBackPage() {
    redirectTo(-1);
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
                  <h1>
                    {dish.name} {""}
                    <span>R${parseFloat(dish.price).toFixed(2)}</span>
                  </h1>
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
                  {!isAdmin && <Counter />}

                  {isAdmin && (
                    <Button
                      title={`Editar prato`}
                      onClick={() => handleRedirectToEditDish(dish.id)}
                    />
                  )}

                  {!isAdmin && <Button title={`incluir - R$ ${dish.price}`} />}
                </CounterSection>
              </DetailsContent>
            </div>
          </Content>
        </main>
      </PageLayout>
    </DetailsContainer>
  );
}
