import { PiCaretLeft } from "react-icons/pi";

import * as Tag from '../../components/Tag'
import * as Input from "../../components/Input";
import { Select } from '../../components/Select'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'


import { Container, Content, FormField } from './styles'

export function New({ isAdmin = true }) {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <a href="#"><PiCaretLeft /> voltar</a>
          <h1>Adicionar prato</h1>

          <FormField>

            <div className="first-column">

              <Input.Picture title="Imagem do prato" />
              <Input.Root 
              title="Nome" 
              placeholder="Exemplo: Salada Caesar"/>
              <Select title="Categorias" />

            </div>

            <div className="second-column">

              <Input.Background title="Ingredientes">
                <Tag.Created title="Pão Naan" />
                <Tag.New />
              </Input.Background>

              <Input.Root title="Preço"
              placeholder="R$ 00,00" />

            </div>

            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
              title="Descrição"
            />

            <Button className="save-button" title="Salvar alterações" />
          </FormField>
        </Content>
      </main>

      <Footer />
    </Container>
  );
}
