import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { register } from "swiper/element/bundle";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { Card } from "../../components/Card";
import { api } from "../../services/api";

import * as Layout from "../../components/Layouts";

import bannerDesktop from "../../assets/home-banner.png";
import bannerMobile from "../../assets/banner-mobile.png";

import { HomeContainer, Content, Presentation } from "./styles";

export function Home({ isAdmin = false }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const Banner = isMobile ? bannerMobile : bannerDesktop;

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState({
    meals: [],
    beverages: [],
    desserts: [],
  });
  const [category, setCategory] = useState("");

  function handleRedirectToPageDetails(dish_id) {
    navigate(`/details/${dish_id}`);
  }

  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);

  useEffect(() => {
    register();
    const configs = {
      loop: cards > 3 ? true : false,
      slidesPerView: "auto",
      spaceBetween: isMobile ? 16 : 27,
      grabCursor: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
          }
        `,
      ],
    };
    Object.assign(swiperRef1.current, configs);
    Object.assign(swiperRef2.current, configs);
    Object.assign(swiperRef3.current, configs);

    swiperRef1.current.initialize();
    swiperRef2.current.initialize();
    swiperRef3.current.initialize();
  }, []);

  useEffect(() => {
    async function FetchCardsOnApi() {
      const response = await api.get(`/dishes?name=${search}`);
      const meals = response.data.filter((dish) => dish.category === "meals");
      const beverages = response.data.filter(
        (dish) => dish.category === "beverages"
      );
      const desserts = response.data.filter(
        (dish) => dish.category === "desserts"
      );
      setCards({ meals, beverages, desserts });
    }
    FetchCardsOnApi();
  }, [search]);

  useEffect(() => {
    if (!isMobile && isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <HomeContainer>
      <Header
        onChangeSearch={(e) => setSearch(e.target.value)}
        onOpenMenu={() => setIsMenuOpen(true)}
        isAdmin={isAdmin}
      />
      <SideMenu
        isMenuOpen={isMenuOpen}
        isMenuClose={() => setIsMenuOpen(false)}
        onChangeSearch={(value) => setSearch(value)}
      />

      <Layout.Page>
        <main>
          <Content isempty={search}>
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

            <Section title={cards.meals.length > 0 ? "Refeições" : ""}>
              <swiper-container
                init="false"
                navigation={isMobile ? "false" : "true"}
                ref={swiperRef1}
              >
                {cards.meals.map((card) => (
                  <swiper-slide key={String(card.id)}>
                    <Card
                      isAdmin={isAdmin}
                      data={card}
                      onClick={() => handleRedirectToPageDetails(card.id)}
                    />
                  </swiper-slide>
                ))}
              </swiper-container>
            </Section>

            <Section title={cards.beverages.length > 0 ? "Bebidas" : ""}>
              <swiper-container
                init="false"
                navigation={isMobile ? "false" : "true"}
                ref={swiperRef2}
              >
                {cards.beverages.map((card) => (
                  <swiper-slide key={String(card.id)}>
                    <Card
                      isAdmin={isAdmin}
                      key={String(card.id)}
                      onClick={() => handleRedirectToPageDetails(card.id)}
                      data={card}
                    />
                  </swiper-slide>
                ))}
              </swiper-container>
            </Section>

            <Section title={cards.desserts.length > 0 ? "Sobremesas" : ""}>
              <swiper-container
                init="false"
                navigation={isMobile ? "false" : "true"}
                ref={swiperRef3}
              >
                {cards.desserts.map((card) => (
                  <swiper-slide key={String(card.id)}>
                    <Card
                      isAdmin={isAdmin}
                      key={String(card.id)}
                      onClick={() => handleRedirectToPageDetails(card.id)}
                      data={card}
                    />
                  </swiper-slide>
                ))}
              </swiper-container>
            </Section>
          </Content>
        </main>
      </Layout.Page>

      <Footer />
    </HomeContainer>
  );
}
