import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { PiCaretLeft } from "react-icons/pi";
import { toast } from "react-toastify";

import { PiUploadSimpleBold } from "react-icons/pi";

import * as Tag from "../../components/Tag";
import * as Layout from "../../components/Layouts";
import { SideMenu } from "../../components/SideMenu";
import { Input } from "../../components/Inputs/Input";
import { InputFile } from "../../components/Inputs/InputFile";
import { Select } from "../../components/Select";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";

import { api } from "../../services/api";

import { EditContainer, Main, Form, Buttons, LabelTitle} from "./styles";
export function Edit({ isAdmin = true }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const params = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [newIngredients, setNewIngredients] = useState([]);
  const [ingredientsExists, setIngredientsExists] = useState([]);
  const [addIngredients, setAddIngredients] = useState("");

  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [filename, setFilename] = useState("");

  function handleBackHome() {
    navigate(-1);
  }

  function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);
    setFilename(file.name);
  }

  function handleAddIngredients() {
    setNewIngredients((prevState) => [...prevState, addIngredients.trim()]);
    setAddIngredients("");
  }

  function handleRemoveIngredients(deleted) {
    setNewIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  function handleRemoveIngredientsExists(deleted) {
    setIngredientsExists((prevState) =>
      prevState.filter((ingredientExist) => ingredientExist !== deleted)
    );
  }

  useEffect(() => {
    if (!isMobile && isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setCategory(response.data.category);
        setIngredientsExists(response.data.ingredients);
        setData(response.data);
      } catch (error) {
        toast.error("Erro ao buscar pratos.");
        console.error(error);
      }
    }
    fetchDishes();
  }, []);

  async function handleUpdatedDish() {
    try {
      const updatedDish = {
        name: name === "" ? data.name : name,
        category: category === "" ? data.category : category,
        description: description === "" ? data.description : description,
        price: price === "" ? data.price : price,
        newIngredients,
        ingredientsExists,
      };
      await api.put(`/dishes/${params.id}`, updatedDish);
      toast.success("Prato atualizado com sucesso!");
      handleBackHome();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  }

  if (!data) {
    return;
  }

  return (
    <EditContainer>
      <SideMenu
        isMenuOpen={isMenuOpen}
        isMenuClose={() => setIsMenuOpen(false)}
      />

      <Header onOpenMenu={() => setIsMenuOpen(true)} />

      <Layout.Page>
        <Main>
          <a onClick={handleBackHome}>
            <PiCaretLeft /> Voltar
          </a>
          <h1>Editar prato</h1>

          <Form>
            <Section className="first-section">
              <InputFile title="Imagem" filename={data.image}/>

              <Input
                title="Nome"
                placeholder="Exemplo: Salada Caesar"
                defaultValue={data.name}
                onChange={(e) => setName(e.target.value)}
              />

              <Select
                title="Categorias"
                defaultValue={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Section>

            <Section className="second-section">
              <LabelTitle>
                Ingredientes
                <div>
                  {newIngredients.map((newIngredient, index) => (
                    <Tag.Remover
                      key={String(index)}
                      title={newIngredient}
                      onClick={() => handleRemoveIngredients(newIngredient)}
                    />
                  ))}

                  {ingredientsExists.map((ingredient) => (
                    <Tag.Remover
                      key={String(ingredient.id)}
                      title={ingredient.ingredient}
                      onClick={() => handleRemoveIngredientsExists(ingredient)}
                    />
                  ))}

                  <Tag.Creator
                    value={addIngredients}
                    onChange={(e) => setAddIngredients(e.target.value)}
                    onClick={handleAddIngredients}
                  />
                </div>
              </LabelTitle>

              <Input
                type="text"
                title="Preço"
                autoComplete="off"
                placeholder="R$ 00,00"
                defaultValue={data.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Section>

            <Section>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                title="Descrição"
                defaultValue={data.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Section>

            <Buttons>
              <Button
                type="button"
                title="Salvar alterações"
                onClick={handleUpdatedDish}
              />
            </Buttons>
          </Form>
        </Main>
      </Layout.Page>

      <Footer />
    </EditContainer>
  );
}
