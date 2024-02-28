import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { PiCaretLeft } from "react-icons/pi";
import { toast } from "react-toastify";

import * as Tag from "../../components/Tag";
import * as Input from "../../components/Input";
import * as Layout from "../../components/Layouts";
import { SideMenu } from "../../components/SideMenu";
import { Select } from "../../components/Select";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";

import { Container, Form, Buttons } from "./styles";
import { api } from "../../services/api";

export function Edit({ isAdmin = true }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const params = useParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [data, setData] = useState(null)
  const [image, setImage] = useState(null);
  const [filename, setFilename] = useState("");

  function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);
    setFilename(file.name);
  }

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient.trim()]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  function handleBack() {
    navigate(-1);
  }
  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    }
    fetchDishes();
  }, []);


  if (!data) {
    return
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

      <Layout.Page>
        <main>
          <a onClick={handleBack}>
            <PiCaretLeft /> voltar
          </a>
          <h1>Editar prato</h1>

          <Form>
            <Section className="first-section">
              <Input.File
                title="Imagem do prato"
                value={data.image}
                onChange={handleImage}
              />

              <Input.Default
                title="Nome"
                placeholder="Exemplo: Salada Caesar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Select
                title="Categorias"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Section>

            <Section className="second-section">
              <Input.Background title="Ingredientes">
                {ingredients.map((ingredient, index) => (
                  <Tag.Remover
                    key={String(index)}
                    title={ingredient}
                    onClick={() => handleRemoveIngredients(ingredient)}
                  />
                ))}

                <Tag.Creator
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredients}
                />
              </Input.Background>

              <Input.Default
                type="text"
                title="Preço"
                autoComplete="off"
                placeholder="R$ 00,00"
                value={price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Section>

            <Section>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                title="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Section>

            <Buttons>
              <Button type="button" title="Salvar alterações" />
            </Buttons>
          </Form>
        </main>
      </Layout.Page>

      <Footer />
    </Container>
  );
}
