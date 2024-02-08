import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { register } from 'swiper/element/bundle';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/SideMenu';
import { Card } from '../../components/Card';

import * as Layout from '../../components/Layouts';

import bannerDesktop from '../../assets/home-banner.png';
import bannerMobile from '../../assets/banner-mobile.png';
import passionFruit from '../../assets/passionFruit.png';
import sweet from '../../assets/sweet.png';

import { Container, Content, TopBox } from './styles';

export function Home({ isAdmin = false }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const Banner = isMobile ? bannerMobile : bannerDesktop;

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);

  useEffect(() => {
    register();
    const configs = {
      loop: true,
      slidesPerView: 'auto',
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

  const Foods = [{
    id: '1',
    image: sweet,
    name: 'Spaguetti Gambe de 15',
    description: 'Massa fresca com camarões e pesto.',
    price: '1100,50'
  },
  {
    id: '2',
    image: passionFruit,
    name: 'Suco de maracujá',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    price: '13,97'
  },
  {
    id: '3',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  },
  {
    id: '4',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  },
  {
    id: '5',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  }
  ];

  const Desserts = [{
    id: '1',
    image: sweet,
    name: 'Spaguetti Gambe de 15',
    description: 'Massa fresca com camarões e pesto.',
    price: '1100,50'
  },
  {
    id: '2',
    image: passionFruit,
    name: 'Suco de maracujá',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    price: '13,97'
  },
  {
    id: '3',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  },
  {
    id: '4',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  },
  {
    id: '5',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  }
  ];

  const Beverages = [{
    id: '1',
    image: sweet,
    name: 'Spaguetti Gambe de 15',
    description: 'Massa fresca com camarões e pesto.',
    price: '1100,50'
  },
  {
    id: '2',
    image: passionFruit,
    name: 'Suco de maracujá',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    price: '13,97'
  },
  {
    id: '3',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  },
  {
    id: '4',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  },
  {
    id: '5',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  }
  ];

  useEffect(() => {
    if (!isMobile && isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <Container>
      <SideMenu
        isMenuOpen={isMenuOpen}
        isMenuClose={() => setIsMenuOpen(false)}
      />

      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        isAdmin={isAdmin}
      />

      <Layout.Page>
        <main>
          <Content>
            <TopBox>
              <img src={Banner} alt="Macarons coloridos despencando juntamente com folhas verdes e frutas frescas." />
              <div>
                <h1>Sabores inigualáveis</h1>
                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
              </div>
            </TopBox>

            <Section title="Refeições">
              <swiper-container
                init="false"
                navigation={isMobile ? 'false' : 'true'}
                ref={swiperRef1}
              >
                {Foods.map((data) => (
                  <swiper-slide key={data.id}>
                    <Card
                      isAdmin={isAdmin}
                      data={data} />
                  </swiper-slide>
                ))}
              </swiper-container>
            </Section>

            <Section title="Bebidas">
              <swiper-container
                init="false"
                navigation={isMobile ? 'false' : 'true'}
                ref={swiperRef2}
              >
                {Desserts.map((data) => (
                  <swiper-slide key={data.id}>
                    <Card
                      isAdmin={isAdmin}
                      data={data} />
                  </swiper-slide>
                ))}
              </swiper-container>
            </Section>

            <Section title="Sobremesas">
              <swiper-container init="false"
                navigation={isMobile ? 'false' : 'true'}
                ref={swiperRef3}>
                {Beverages.map((data) => (
                  <swiper-slide key={data.id}>
                    <Card
                      isAdmin={isAdmin}
                      data={data} />
                  </swiper-slide>
                ))}
              </swiper-container>
            </Section>
          </Content>
        </main>
      </Layout.Page>

      <Footer />
    </Container>
  );
}
