import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { PiCaretLeft } from "react-icons/pi";

import * as Tag from '../../components/Tag'
import * as Input from "../../components/Input";
import * as Layout from "../../components/Layouts";

import { SideMenu } from '../../components/SideMenu'
import { Select } from '../../components/Select'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'

import { Container, Form, Buttons } from './styles'

export function New({ isAdmin = true }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()
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
        onOpenMenu={() => setIsMenuOpen(true)} />

      <Layout.Page>
        <main>

          <a onClick={handleBack}><PiCaretLeft /> voltar</a>
          <h1>Adicionar prato</h1>

          <Form>

            <Section className="first-section">
              <Input.File title="Imagem do prato" />
              <Input.Default
                title="Nome"
                placeholder="Exemplo: Salada Caesar" />
              <Select title="Categorias" />
            </Section>

            <Section className="second-section">

              <Input.Background title="Ingredientes">
                <Tag.Delete title="Pão Naan" />
                <Tag.Delete title="Pão Naan" />
                <Tag.Delete title="Pão Naan" />

                <Tag.New />
              </Input.Background>

              <Input.Default title="Preço"
                placeholder="R$ 00,00" />
            </Section>

            <Section>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                title="Descrição" />
            </Section>

            <Buttons>
              <Button title="Salvar alterações" />
            </Buttons>

          </Form>

        </main>
      </Layout.Page>
      
      <Footer />
    </Container>
  );
}
