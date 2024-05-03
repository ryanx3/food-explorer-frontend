import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { PiCaretLeft } from "react-icons/pi";
import { toast } from "react-toastify";
import { api } from "../../services/api";

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


import { NewContainer, Form, Buttons } from "./styles";

export function New() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

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

  async function handleCreateDish() {

    const priceValue = parseFloat(price.replace(",", "."));

    if (!image) {
      return toast.error("Por favor, selecione uma imagem para o seu prato.");
    }

    if (priceValue <= 0) {
      return toast.error("Por favor, insira um preço válido.");
    }
    if (ingredients.length === 0) {
      return toast.error("Digite ao menos um ingrediente do seu prato.");
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", priceValue);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients));

    try {
      await api.post("/dishes", formData);
      toast.success("Prato criado com sucesso!");
      handleBack()
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao criar prato!");
      }
    }
  }

  useEffect(() => {
    if (!isMobile && isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <NewContainer>
      <SideMenu
        isMenuOpen={isMenuOpen}
        isMenuClose={() => setIsMenuOpen(false)}
      />

      <Header onOpenMenu={() => setIsMenuOpen(true)} />

      <Layout.Page>
        <main>
          <a onClick={handleBack}>
            <PiCaretLeft /> voltar
          </a>
          <h1>Adicionar prato</h1>

          <Form>
            <Section className="first-section">
              <Input.File
                title="Imagem do prato"
                value={filename}
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
                value={price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
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
              <Button
                type="button"
                onClick={handleCreateDish}
                title="Salvar alterações"
              />
            </Buttons>
          </Form>
        </main>
      </Layout.Page>

      <Footer />
    </NewContainer>
  );
}
