import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiCaretLeft } from "react-icons/pi";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import { PageLayout } from "../../components/Layouts/PagesLayout";
import { IngredientTag } from "../../components/IngredientTag";
import { InputNumeric } from "../../components/Inputs/InputNumeric";
import { InputFile } from "../../components/Inputs/InputFile";
import { Textarea } from "../../components/Inputs/Textarea";
import { Section } from "../../components/Section";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Input } from "../../components/Inputs/Input";

import { NewContainer, Main, Form, LabelTitle, Buttons } from "./styles";
import { ButtonBack } from "../../components/ButtonBack";

export function New() {
  const redirectTo = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");

  const [imageFile, setImageFile] = useState("");
  const [image, setImage] = useState(null);

  function handleAddImageToDish(e) {
    const file = e.target.files[0];
    setImageFile(file);
    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);
  }

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredients.trim()]);
    setNewIngredients("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  function handleBackPage() {
    redirectTo(-1);
  }

  async function handleCreateDish() {
    if (!name || !category || !price || !description) {
      return toast.error(
        "Por favor, preencha todos os campos do seu prato."
      );
    }

    if(!imageFile) {
      return toast.error("Insira uma imagem válida para o seu prato.")
    }

   const priceValue = parseFloat(price.replace(",", "."));
   if (isNaN(priceValue) || priceValue <= 0) {
     return toast.error("Por favor, insira um preço válido para o seu prato.");
   }

    if (ingredients.length === 0) {
      return toast.error(
        "Por favor, insira pelo menos um ingrediente do seu prato."
      );
    }

    try {
      const dishData = {
        name,
        category,
        description,
        price: priceValue,
        ingredients,
      };
      const response = await api.post("/dishes", dishData);

      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("image", imageFile);

        await api.patch(`/dishes/${response.data.id}/image`, imageFormData);
      }

      toast.success("Prato criado com sucesso!");
      redirectTo(`/details/${response.data.id}`);
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      }
    }
  }

  return (
    <NewContainer>
      <PageLayout>
        <Main>
          <ButtonBack onClick={handleBackPage} />
          <h1>Criar prato</h1>

          <Form>
            <Section className="first-section">
              <InputFile
                title="Imagem"
                filename={imageFile.name}
                onChange={handleAddImageToDish}
              />

              <Input
                title="Nome"
                placeholder="Exemplo: Salada Caesar"
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
                  {ingredients.map((ingredient, index) => (
                    <IngredientTag
                      key={String(index)}
                      title={ingredient}
                      onClickButton={() => handleRemoveIngredients(ingredient)}
                    />
                  ))}

                  <IngredientTag
                    value={newIngredients}
                    placeholder="Adicionar"
                    isNew
                    onChange={(e) => setNewIngredients(e.target.value)}
                    onClickButton={handleAddIngredients}
                  />
                </div>
              </LabelTitle>

              <InputNumeric title="Preço" setPrice={setPrice} />
            </Section>

            <Section>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                title="Descrição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Section>

            <Buttons>
              <Button
                type="button"
                title="Salvar alterações"
                onClick={handleCreateDish}
              />
            </Buttons>
          </Form>
        </Main>
      </PageLayout>
    </NewContainer>
  );
}
