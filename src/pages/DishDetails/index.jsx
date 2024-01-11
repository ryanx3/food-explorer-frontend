import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { PiCaretLeft } from "react-icons/pi";

//Components
import * as Layout from "../../components/Layouts";
import * as Tag from '../../components/Tag'
import { SideMenu } from '../../components/SideMenu'
import { Section } from '../../components/Section'
import { Counter } from '../../components/Counter'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

import sweet from '../../assets/sweet.png';

const data =
{
  image: sweet,
  name: "Salada Ravanello",
  description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
  tags: 'alface',
  price: '24,90'
}

import { Container, Content, Details, CounterSection } from './styles'

export function DishDetails({ isAdmin = false }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleBack() {
    navigate(-1)
  }

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
      />

      <main>
        <Layout.Page>

          <a onClick={handleBack}><PiCaretLeft size={32} />
            voltar
          </a>

          <Content>
            <img src={data.image} alt={`Imagem do prato ${data.name}`} />

            <Details>

              <Section>
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


              <CounterSection>
                {isAdmin ? "" : <Counter />}
                <Button title={
                  isAdmin ?
                    `Editar prato` : `incluir - R$ ${data.price}`
                } />
              </CounterSection>
            </Details>

          </Content>
        </Layout.Page>
      </main>
      <Footer />
    </Container>
  );
}
