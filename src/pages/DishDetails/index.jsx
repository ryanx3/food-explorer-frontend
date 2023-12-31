import { PiCaretLeft } from "react-icons/pi";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import * as Tag  from '../../components/Tag'
import { Button } from '../../components/Button'
import { Main } from '../../components/Main'
import { Counter } from '../../components/Counter'

import sweet from '../../assets/sweet.png';

import { Container, Dish } from './styles'

const data =
{
  image: sweet,
  name: "Salada Ravanello",
  description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
  tags: 'alface',
  price: '24,90'
}


export function DishDetails({ isAdmin = false} ) {
  return (
    <Container>
      <Header />

      <Main>

          <a href="#"><PiCaretLeft size={32} /> voltar</a>
          
          <Dish>
            <Section>
            <img src={data.image} alt={`Imagem do prato ${data.name}`} />
            </Section>

            <div className="details-of-dish">

              <Section className='description-of-dish'>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
              </Section>

              <Section className="tags-section">
                <Tag.Default title={data.tags} />
                <Tag.Default title={data.tags} />
                <Tag.Default title={data.tags} />
                <Tag.Default title={data.tags} />
                <Tag.Default title={data.tags} />
                <Tag.Default title={data.tags} />
              </Section>

              <Section className="counter-section"> 
                { isAdmin ? "" : <Counter/>}
                <Button title={ 
                  isAdmin ?
                  `Editar prato` : `incluir - R$ ${data.price}`
                  }/>
              </Section>
            </div>
          </Dish>

      </Main>

      <Footer />
    </Container>
  );
}
