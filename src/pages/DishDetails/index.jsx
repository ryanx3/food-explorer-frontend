import { useMediaQuery } from "react-responsive";
import { useNavigate, useParams } from "react-router-dom";
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

import { Container, Content, Details, CounterSection } from './styles'
import { api } from "../../services/api";
import { TagDefault } from "../../components/Tag/styles";

export function DishDetails({ isAdmin = false }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navigate = useNavigate()
  const params = useParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [data, setData] = useState(null)

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    if (!isMobile && isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    async function fetchCardDetails() {
      const response = await api.get(`/dishes/${params.id}`)
      console.log(response.data)
      setData(response.data)
    }

    fetchCardDetails()
  }, [])

  if (!data) {
    return <div>Carregando...</div>;
  }
  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;


  return (
    <Container>
      <SideMenu
        isMenuOpen={isMenuOpen}
        isMenuClose={() => setIsMenuOpen(false)}
      />

      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {data &&
        <main>
          <Layout.Page>

            <a onClick={handleBack}><PiCaretLeft size={32} />
              voltar
            </a>

            <Content>
              <img src={imageURL} alt={`Imagem do prato ${data.name}`} />

              <Details>

                <Section>
                  <h1>{data.name}</h1>
                  <p>{data.description}</p>
                </Section>

                {data.ingredients &&
                  <Section className="tags-section">
                    {
                      data.ingredients.map(ingredient => (
                        <Tag.Default
                          key={String(ingredient.id)}
                          title={ingredient.ingredient}
                        />
                      ))
                    }

                  </Section>
                }
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
        </main>}
      <Footer />
    </Container>
  );
}
