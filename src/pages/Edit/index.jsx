import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { useDish } from "../../hooks/Dish";
import { PiCaretLeft } from "react-icons/pi";
import { toast } from "react-toastify";

import { PageLayout } from "../../components/Layouts/PagesLayout";
import { IngredientTag } from "../../components/IngredientTag";
import { Input } from "../../components/Inputs/Input";
import { InputFile } from "../../components/Inputs/InputFile";
import { InputNumeric } from "../../components/Inputs/InputNumeric";
import { Select } from "../../components/Select";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Inputs/Textarea";

import { api } from "../../services/api";

import { EditContainer, Main, Form, Buttons, LabelTitle } from "./styles";

export function Edit({ isAdmin = true }) {
  const navigate = useNavigate();
  const params = useParams();
  const {
    dish,
    setDish,
    category,
    setCategory,
    ingredientsExists,
    setIngredientsExists,
    fetchDishDetails,
  } = useDish();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [newIngredients, setNewIngredients] = useState([]);
  const [addIngredients, setAddIngredients] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [image, setImage] = useState(null);

  function handleBackHome() {
    navigate(-1);
  }

  function handleAddImageToDish(e) {
    const file = e.target.files[0];
    setImageFile(file);
    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);
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
    fetchDishDetails(params.id);
  }, []);

  if (!dish) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FadeLoader color="white" />
      </div>
    );
  }

  async function handleUpdatedDish() {

    if (ingredientsExists.length === 0 && newIngredients === 0) {
      return toast.error(
        "Por favor, insira pelo menos um ingrediente do seu prato."
      );
    }
    try {
      const updatedDish = {
        name: name === "" ? dish.name : name,
        category: category === "" ? dish.category : category,
        description: description === "" ? dish.description : description,
        price: price === "" ? dish.price : price,
        newIngredients,
        ingredientsExists,
      };
      await api.put(`/dishes/${params.id}`, updatedDish);

      if (imageFile && imageFile !== dish.image) {
        const imageFormData = new FormData();
        imageFormData.append("image", imageFile);

        await api.patch(`/dishes/${params.id}/image`, imageFormData);
      }
      toast.success("Prato atualizado com sucesso!");
      handleBackHome();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  }

  if (!dish) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FadeLoader color="white" />
      </div>
    );
  }

  return (
    <EditContainer>
      <PageLayout>
        <Main>
          <a onClick={handleBackHome}>
            <PiCaretLeft /> Voltar
          </a>
          <h1>Editar prato</h1>

          <Form>
            <Section className="first-section">
              <InputFile
                onChange={handleAddImageToDish}
                title="Imagem"
                filename={imageFile ? imageFile.name : dish.image}
              />

              <Input
                title="Nome"
                placeholder="Exemplo: Salada Caesar"
                defaultValue={dish.name}
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
                <div className="background">
                  {ingredientsExists.map((ingredient) => (
                    <IngredientTag
                      key={String(ingredient.id)}
                      title={ingredient.ingredient}
                      onClickButton={() =>
                        handleRemoveIngredient("exists", ingredient)
                      }
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
                </div>
              </LabelTitle>

              <InputNumeric
                value={dish.price}
                title="Preço"
                setPrice={setPrice}
              />
            </Section>

            <Section>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                title="Descrição"
                defaultValue={dish.description}
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
      </PageLayout>
    </EditContainer>
  );
}
