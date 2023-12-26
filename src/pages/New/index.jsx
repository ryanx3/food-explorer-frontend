import { PiCaretLeft, PiUploadSimpleBold } from "react-icons/pi";

import { Tag } from '../../components/Tag'
import { Input } from "../../components/Input";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'


import { Category, Container, Form, Image, Tags } from './styles'

export function New({ isAdmin = true }) {
  return (
    <Container>
      <Header />

      <main>
        <a href="#"><PiCaretLeft /> voltar</a>
        <h1>Adicionar prato</h1>

        <Form>
          <div className="first-column">

            <Image>
              <p>Imagem do prato</p>
              <label htmlFor="image">
                <input id="image" type="file" />
                <PiUploadSimpleBold />
                <span> Selecionar imagem</span>
              </label>
            </Image>

            <Input title="Nome" placeholder="Exemplo: Salada Caesar" />

            <Category>

              <label htmlFor="category">
                <p>Categoria</p>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="meal">Refeição</option>
                  <option value="dessert">Sobremesa</option>
                  <option value="beverage">Bebida</option>
                </select>
              </label>

            </Category>

          </div>

          <div className="second-column">
            <Tags>
              <p>Ingredientes</p>
              <div className="tags">
                <Tag title="Pão Naan" />
              </div>
            </Tags>

            <Input title="Preço" placeholder="R$ 00,00" />
          </div>

          <Textarea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            title="Descrição" />

          <Button className="save-button" title="Salvar alterações" />
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
