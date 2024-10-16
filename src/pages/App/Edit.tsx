import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { PageLayout } from "../../components/Layouts/PagesLayout";
import { IngredientTag } from "../../components/IngredientTag";
import { InputNumeric } from "../../components/Inputs/Numeric";
import { ButtonBack } from "../../components/ButtonBack";
import { InputFile } from "../../components/Inputs/File";
import { Input } from "../../components/Inputs/Input";
import { Select } from "../../components/Select";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Inputs/TextArea";

import { api } from "../../services/api";
import { useDish } from "../../hooks/Dish";

import { EditContainer, Main, Form, Buttons, LabelTitle } from "../styles/Edit";

export function Edit() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    dish,
    ingredientsExists,
    setIngredientsExists,
    category,
    setCategory,
    fetchDishDetails,
  } = useDish();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [newIngredients, setNewIngredients] = useState([]);
  const [addIngredients, setAddIngredients] = useState("");

  const [imageFile, setImageFile] = useState("");
  const [image, setImage] = useState(null);

  function handleBackPage() {
    navigate(`/details/${params.id}`);
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

  async function handleUpdatedDish() {
    if (ingredientsExists.length === 0 && newIngredients.length === 0) {
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
      navigate(`/details/${params.id}`);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  }

  async function handleDeleteDish() {
    const confirmDelete = confirm(
      `Tem certeza de que deseja excluir o prato ${dish.name}?`
    );

    if (confirmDelete) {
      await api.delete(`/dishes/${params.id}`);
      navigate("/");
      toast.success("Prato excluído com sucesso.");
    } else {
      toast.info("Exclusão do prato cancelada.");
    }
  }

  useEffect(() => {
    fetchDishDetails(params.id);
  }, [params.id]);

  useEffect(() => {
    if (dish) {
      setIngredientsExists(dish.ingredients || []);
    }
  }, [dish]);

  if (!dish) {
    return <div>Carregando...</div>;
  }

  return (
    <EditContainer>
      <PageLayout>
        <Main>
          <ButtonBack onClick={handleBackPage} />
          <h1>Editar prato</h1>

          <Form>
            <Section className="first-section">
              <InputFile
                title="Imagem"
                filename={imageFile ? imageFile.name : dish.image}
                onChange={handleAddImageToDish}
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
              <Button
                type="button"
                title="Excluir prato"
                onClick={handleDeleteDish}
              />
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
