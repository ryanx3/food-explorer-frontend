import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

import macarronImage from '../../assets/fruits.png';

import { Container, Content } from './styles'


export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Section>
            <img src={macarronImage} alt="macarronSession" />

            <div className="rectangle-text">
              <h1>Sabores inigualáveis</h1>
              <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
            </div>
          </Section>

          <Section title="Refeições"/>
          <Section title="Sobremesas"/>
          <Section title="Bebidas"/>     
               
        </Content>
      </main>

    </Container>
  )
}