import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
register()


import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'

import homeBanner from '../../assets/home-banner.png';
import passionFruit from '../../assets/passionFruit.png';
import sweet from '../../assets/sweet.png';

import { Container, Content, TopBox } from './styles'

export function Home() {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);

  useEffect(() => {

    register();
    const params = {
      slidesPerView: 5,
      loop: true,
      navigation: true,
      grabCursor: true,
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 300 },
        860: { spaceBetween: 300 },
        1024: { slidesPerView: 3, spaceBetween: 220 },
        1120: { slidesPerView: 3, spaceBetween: 210 },
        1280: { slidesPerView: 4, spaceBetween: 200 },
        1320: { slidesPerView: 4, spaceBetween: 350 },
        1368: { slidesPerView: 4, spaceBetween: 340 },
        1420: { slidesPerView: 5, spaceBetween: 330 },
        1460: { slidesPerView: 5, spaceBetween: 320 },
        1520: { slidesPerView: 5, spaceBetween: 300 },
        1540: { slidesPerView: 5, spaceBetween: 280 },
        1580: { slidesPerView: 5, spaceBetween: 240 },
        1640: { slidesPerView: 5, spaceBetween: 200 },
        1700: { slidesPerView: 5, spaceBetween: 150 },
        1780: { slidesPerView: 5, spaceBetween: 90 },
        1860: { slidesPerView: 5, spaceBetween: 0 }
      },
      injectStyles: [
        ` .swiper-button-next,
          .swiper-button-prev {
            color: white;
          }
      `]
    };

    Object.assign(swiperRef1.current, params);
    Object.assign(swiperRef2.current, params);
    Object.assign(swiperRef3.current, params);

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
    image: passionFruit,
    name: 'Spaguetti Gambe',
    description: 'Massa fresca com camarões e pesto.',
    price: '79,97'
  },
  {
    id: '5',
    image: sweet,
    name: 'Suco de maracujá',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    price: '13,97'
  },
  {
    id: '6',
    image: passionFruit,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  }
  ];

  const Desserts = [{
    id: '1',
    image: sweet,
    name: 'Spaguetti Gambe',
    description: 'Massa fresca com camarões e pesto.',
    price: '79,97'
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
    image: passionFruit,
    name: 'Spaguetti Gambe',
    description: 'Massa fresca com camarões e pesto.',
    price: '79,97'
  },
  {
    id: '5',
    image: sweet,
    name: 'Suco de maracujá',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    price: '13,97'
  },
  {
    id: '6',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  }
  ];

  const Beverages = [{
    id: '1',
    image: sweet,
    name: 'Spaguetti Gambe',
    description: 'Massa fresca com camarões e pesto.',
    price: '79,97'
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
    image: passionFruit,
    name: 'Spaguetti Gambe',
    description: 'Massa fresca com camarões e pesto.',
    price: '79,97'
  },
  {
    id: '5',
    image: sweet,
    name: 'Suco de maracujá',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    price: '13,97'
  },
  {
    id: '6',
    image: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: '32,97'
  }
  ];

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <TopBox>
            <img src={homeBanner} alt="Macarons coloridos despencando juntamente com folhas verdes e frutas frescas." />
            <div>
              <h1>Sabores inigualáveis</h1>
              <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
            </div>
          </TopBox>

          <Section title="Refeições">
            <swiper-container init="false" ref={swiperRef1}>
              {Foods.map((data) => (
                <swiper-slide key={data.id}>
                  <Card data={data} />
                </swiper-slide>
              ))}
            </swiper-container>
          </Section>

          <Section title="Bebidas">
            <swiper-container init="false" ref={swiperRef2}>
              {Desserts.map((data) => (
                <swiper-slide key={data.id}>
                  <Card data={data} />
                </swiper-slide>
              ))}

            </swiper-container>
          </Section>

          <Section title="Sobremesas">
            <swiper-container init="false" ref={swiperRef3} >
              {Beverages.map((data) => (
                <swiper-slide key={data.id}>
                  <Card data={data} />
                </swiper-slide>
              ))}
            </swiper-container>
          </Section>


        </Content>
      </main>

      <Footer />

    </Container>
  );
}
