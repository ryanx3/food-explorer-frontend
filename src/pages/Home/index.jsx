import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { register } from "swiper/element/bundle";
import { BsExclamationTriangle } from "react-icons/bs";
register();

import { toast } from "react-toastify";
import { LoaderSpinning } from "../../components/LoaderSpinning";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { api } from "../../services/api";

import { PageLayout } from "../../components/Layouts/PagesLayout";

import { useSearch } from "../../hooks/Search";

import bannerDesktop from "../../assets/home-banner.png";
import bannerMobile from "../../assets/banner-mobile.png";

import { HomeContainer, Content, Presentation, NotFound } from "./styles";

export function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const [cards, setCards] = useState({
    meals: [],
    beverages: [],
    desserts: [],
  });
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

  const { search, setSearch } = useSearch();

  function handleRedirectToPageDetails(dish_id) {
    navigate(`/details/${dish_id}`);
  }

  function handleCleanSearch() {
    setSearch("");
  }

  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);

  useEffect(() => {
    const configs = {
      loop: Object.keys(cards).some((category) => cards[category].length > 4),
      slidesPerView: "auto",
      spaceBetween: isMobile ? 16 : 27,
      grabCursor: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
             transition: transform 0.2s ease;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            transform: scale(1.2);
            }
        `,
      ],
    };

    if (swiperRef1.current && swiperRef2.current && swiperRef3.current) {
      Object.assign(swiperRef1.current, configs);
      Object.assign(swiperRef2.current, configs);
      Object.assign(swiperRef3.current, configs);
      swiperRef1.current.initialize();
      swiperRef2.current.initialize();
      swiperRef3.current.initialize();
    }
  }, [cards, isMobile]);

  useEffect(() => {
    async function FetchCardsOnApi() {
      setLoading(true);
      setNoResults(false);
      try {
        const response = await api.get(`/dishes?name=${search}`);
        const meals = response.data.filter((dish) => dish.category === "meals");
        const beverages = response.data.filter(
          (dish) => dish.category === "beverages"
        );
        const desserts = response.data.filter(
          (dish) => dish.category === "desserts"
        );
        setCards({ meals, beverages, desserts });

        if (
          meals.length === 0 &&
          beverages.length === 0 &&
          desserts.length === 0
        ) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        }
        setNoResults(true);
      } finally {
        setLoading(false);
      }
    }
    FetchCardsOnApi();
  }, [search]);

  const Banner = isMobile ? bannerMobile : bannerDesktop;

  return (
    <HomeContainer>
      {loading ? (
        <LoaderSpinning />
      ) : noResults ? (
        <NotFound>
          <BsExclamationTriangle size={200} />
          <p>Não encontramos pratos que atendam aos critérios de pesquisa.</p>
          <Button title="Limpar pesquisa" onClick={handleCleanSearch} />
        </NotFound>
      ) : (
        <PageLayout>
          <main>
            <Content $isempty={search}>
              {!search && (
                <Presentation>
                  <img
                    src={Banner}
                    alt="Macarons coloridos despencando juntamente com folhas verdes e frutas frescas."
                  />
                  <div>
                    <h1>Sabores inigualáveis</h1>
                    <span>
                      Sinta o cuidado do preparo com ingredientes selecionados
                    </span>
                  </div>
                </Presentation>
              )}

              <Section title={cards.meals.length > 0 ? "Refeições" : null}>
                <swiper-container
                  init="false"
                  navigation={isMobile ? "false" : "true"}
                  ref={swiperRef1}
                >
                  {cards.meals.map((card) => (
                    <swiper-slide key={String(card.id)}>
                      <Card
                        dish={card}
                        onClick={() => handleRedirectToPageDetails(card.id)}
                      />
                    </swiper-slide>
                  ))}
                </swiper-container>
              </Section>

              <Section title={cards.beverages.length > 0 ? "Bebidas" : null}>
                <swiper-container
                  init="false"
                  navigation={isMobile ? "false" : "true"}
                  ref={swiperRef2}
                >
                  {cards.beverages.map((card) => (
                    <swiper-slide key={String(card.id)}>
                      <Card
                        key={String(card.id)}
                        onClick={() => handleRedirectToPageDetails(card.id)}
                        dish={card}
                      />
                    </swiper-slide>
                  ))}
                </swiper-container>
              </Section>

              <Section title={cards.desserts.length > 0 ? "Sobremesas" : null}>
                <swiper-container
                  init="false"
                  navigation={isMobile ? "false" : "true"}
                  ref={swiperRef3}
                >
                  {cards.desserts.map((card) => (
                    <swiper-slide key={String(card.id)}>
                      <Card
                        key={String(card.id)}
                        onClick={() => handleRedirectToPageDetails(card.id)}
                        dish={card}
                      />
                    </swiper-slide>
                  ))}
                </swiper-container>
              </Section>
            </Content>
          </main>
        </PageLayout>
      )}
    </HomeContainer>
  );
}
