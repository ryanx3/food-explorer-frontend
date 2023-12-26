import { PiCaretLeft } from "react-icons/pi";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Counter } from '../../components/Counter'

import sweet from '../../assets/sweet.png';

import { Container, Content, Dish } from './styles'

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

      <main>
        <Content>
          <a href="#"><PiCaretLeft /> voltar</a>

          <Dish>
            <img src={data.image} alt={`Imagem do prato ${data.name}`} />

            <div className="details-of-dish">

              <Section className='description-of-dish'>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
              </Section>

              <Section className="tags-section">
                <Tag title={data.tags} />
                <Tag title={data.tags} />
                <Tag title={data.tags} />
                <Tag title={data.tags} />
                <Tag title={data.tags} />
                <Tag title={data.tags} />
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
        </Content>
      </main>

      <Footer />
    </Container>
  );
}
