import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'

import homeBanner from '../../assets/home-banner.png';
import dishTest from '../../assets/dishTest.png';
import passionFruit from '../../assets/passionFruit.png';
import sweet from '../../assets/sweet.png';

import { Container, Content, TopBox } from './styles'

export function Home() {
  const dataTest = {
    dish: dishTest,
    name: 'Spaguetti Gambe',
    description: 'Massa fresca com camarões e pesto.',
    value: '79,97'
  }

  const dataSweet = {
    dish: sweet,
    name: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    value: '32,97'
  }

  const dataDrink = {
    dish: passionFruit,
    name: 'Suco de maracujá',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    value: '13,97'
  }

  const categoryTest = {
    category: "Refeições"
  }


  return (
    <Container>
      <Header/>

        <main>
          <Content>

            <TopBox>
              <img src={homeBanner} alt="Macarons coloridos em tons pastel despencando juntamente com folhas verdes e frutas frescas."/>

              <div>
                <h1>Sabores inigualáveis</h1>
                <span>Sinta o cuidado do preparo com ingredientes selecionados
                </span>
              </div>
            </TopBox>
        

            <Section title="Refeições">
            
              <div className="wrapper-cards">
                <Card data={dataTest}/>
                <Card data={dataTest}/>
                <Card data={dataTest}/>
                <Card data={dataTest}/>
                <Card data={dataTest}/>
                <Card data={dataTest}/>
          
              </div>

            </Section>
            <Section title="Bebidas">
            
              <div className="wrapper-cards">
                <Card data={dataDrink}/>
                <Card data={dataDrink}/>
                <Card data={dataDrink}/>
                <Card data={dataDrink}/>
                <Card data={dataDrink}/>
                <Card data={dataDrink}/>

              </div>

            </Section>

            <Section title="Sobremesas">
            
              <div className="wrapper-cards">
                <Card data={dataSweet}/>
                <Card data={dataSweet}/>
                <Card data={dataSweet}/>
                <Card data={dataSweet}/>
                <Card data={dataSweet}/>
                <Card data={dataSweet}/>

              </div>

            </Section>
            
        </Content>

      </main>

      <Footer/>

    </Container>
  )
}