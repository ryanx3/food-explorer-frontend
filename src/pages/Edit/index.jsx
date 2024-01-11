import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import { PiCaretLeft } from "react-icons/pi";

import * as Tag from '../../components/Tag'
import * as Input from "../../components/Input";
import * as Layout from "../../components/Layouts";

import { Select } from '../../components/Select'
import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'

import { Container, Form, Buttons } from './styles'

export function Edit({ isAdmin = true }) {
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
      isMenuClose={() => setIsMenuOpen(false)}/>

      <Header 
      onOpenMenu={() => setIsMenuOpen(true)}/>

      <main>
        <Layout.Page>

          <a onClick={handleBack}><PiCaretLeft /> voltar</a>
          <h1>Editar prato</h1>

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

                <Tag.New />
              </Input.Background>

              <Input.Default title="Preço"
                placeholder="R$ 00,00" />
            </Section>

            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
              title="Descrição"
            />

            <Buttons>

              <Button className="delete-button" title="Excluir prato" />
              <Button className="save-button" title="Salvar alterações" />

            </Buttons>

          </Form>
        </Layout.Page>
      </main>
      <Footer />
    </Container>
  );
}
