import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { PiCaretLeft } from "react-icons/pi";
import { toast } from "react-toastify";

import * as Layout from "../../components/Layouts";
import { Header } from "../../components/Header";
import { IngredientTag } from "../../components/IngredientTag";
import { SideMenu } from "../../components/SideMenu";
import { Input } from "../../components/Inputs/Input";
import { InputFile } from "../../components/Inputs/InputFile";
import { InputNumeric } from "../../components/Inputs/InputNumeric";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Inputs/Textarea";

import { api } from "../../services/api";

import {
  EditContainer,
  Main,
  Form,
  Buttons,
  LabelTitle,
  Background,
} from "./styles";
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

 function handleRemoveIngredient(type, deleted) {
   if (type === "new") {
     setNewIngredients((prevState) =>
       prevState.filter((ingredient) => ingredient !== deleted)
     );
   } else if (type === "exists") {
     setIngredientsExists((prevState) =>
       prevState.filter((ingredientExist) => ingredientExist !== deleted)
     );
   }
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

      <Layout.Page>
        <Main>
          <a onClick={handleBackHome}>
            <PiCaretLeft /> Voltar
          </a>
          <h1>Editar prato</h1>

          <Form>
            <Section className="first-section">
              <InputFile title="Imagem" filename={data.image} />

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
                <Background>
                  {ingredientsExists.map((ingredient) => (
                    <IngredientTag
                      key={String(ingredient.id)}
                      title={ingredient.ingredient}
                      onClickButton={() => handleRemoveIngredient("exists", ingredient)}
                    />
                  ))}

                  {newIngredients.map((newIngredient, index) => (
                    <IngredientTag
                      key={String(index)}
                      title={newIngredient}
                      onClickButton={() =>
                        handleRemoveIngredient("new", newIngredient)
                      }
                    />
                  ))}

                  <IngredientTag
                    value={addIngredients}
                    placeholder="Adicionar"
                    isNew
                    onChange={(e) => setAddIngredients(e.target.value)}
                    onClickButton={handleAddIngredients}
                  />
                </Background>
              </LabelTitle>

              <InputNumeric
                value={data.price}
                title="Preço"
                setPrice={setPrice}
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
              <Button type="button" title="Excluir prato" />
              <Button
                type="button"
                title="Salvar alterações"
                onClick={handleUpdatedDish}
              />
            </Buttons>
          </Form>
        </Main>
      </Layout.Page>

    </EditContainer>
  );
}
