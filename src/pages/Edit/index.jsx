import { PiCaretLeft } from "react-icons/pi";

import * as Tag from '../../components/Tag'
import * as Input from "../../components/Input";
import { Select } from '../../components/Select'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Main } from '../../components/Main'
import { Textarea } from '../../components/Textarea'


import { Container, Form, Buttons } from './styles'

export function Edit({ isAdmin = true }) {
  return (
      <Main>
    <Container>
      <Header />


        <a href="#"><PiCaretLeft /> voltar</a>
        <h1>Editar prato</h1>

        <Form>

          <Section className="first-section">
            <Input.Picture title="Imagem do prato" />
            <Input.Root
              title="Nome"
              placeholder="Exemplo: Salada Caesar" />
            <Select title="Categorias" />
          </Section>



          <Section className="second-section">

            <Input.Background title="Ingredientes">
              <Tag.Created title="Pão Naan" />
              <Tag.Created title="Pão Naan" />

              <Tag.New />
            </Input.Background>

            <Input.Root title="Preço"
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


      <Footer />
    </Container>
      </Main>
  );
}
