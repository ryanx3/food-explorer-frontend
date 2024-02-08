import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { PiCaretLeft } from "react-icons/pi";

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
import { NumericFormatInput } from "../../components/NumericFormat";

import { Container, Form, Buttons } from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function New({ isAdmin = true }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [image, setImage] = useState(null)
  const [filename, setFilename] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function handleImage(e) {
    const file = e.target.files[0]
    setImage(file)
    setFilename(file.name)
  }

  function handleAddIngredients() {
    if (newIngredient.trim() !== "") {
      setIngredients((prevState) => [...prevState, newIngredient.trim()]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  function handleBack() {
    navigate(-1);
  }


  const onSubmitDish = async (data) => {

    const priceValue = data.price ? parseFloat(data.price.replace(/\D/g, '').replace(',', '.')) : null;

    if (priceValue === null || isNaN(priceValue) || priceValue <= 0) {
      return toast.error("Por favor, insira um preço válido.");
    }
    console.log(priceValue)

    try {
      if (ingredients.length === 0) {
        return toast.error("Digite ao menos um ingrediente do seu prato.")
      }

      const formData = new FormData();
      formData.append("image", image); // Adicione a imagem ao formulário
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("price", priceValue);
      formData.append("description", data.description);
      formData.append("ingredients", JSON.stringify(ingredients));

      await api.post("/dishes", formData); // Envie o formulário com a imagem

      toast.success("Prato criado com sucesso!");
      reset();
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message);
      } else {
        return toast.error("Erro ao criar prato!");
      }
    }
  };


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

      <Header onOpenMenu={() => setIsMenuOpen(true)} />

      <Layout.Page>
        <main>
          <a onClick={handleBack}>
            <PiCaretLeft /> voltar
          </a>
          <h1>Adicionar prato</h1>

          <Form onSubmit={handleSubmit(onSubmitDish)}>
            <Section className="first-section">
              <Input.File
                title="Imagem do prato"
                value={filename}
                onChange={handleImage}
              />

              <Input.Default
                title="Nome"
                placeholder="Exemplo: Salada Caesar"
                {...register("name", { required: true })}
              />

              <Select title="Categorias" {...register("category")} />
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
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredients}
                />
              </Input.Background>

              <NumericFormatInput
                customInput={Input.Default}
                title="Preço"
                placeholder="R$ 00,00"
                prefix={"R$"}
                thousandSeparator=","
                decimalScale={1}
                {...register("price", { required: true })}
              />
            </Section>

            <Section>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                title="Descrição"
                {...register("description", { required: true })}
              />
            </Section>

            <Buttons>
              <Button type="submit" title="Salvar alterações" />
            </Buttons>
          </Form>
        </main>
      </Layout.Page>

      <Footer />
    </Container>
  );
}
