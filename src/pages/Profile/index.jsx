import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PiCaretLeft, PiCameraBold, PiFileArrowUpDuotone } from "react-icons/pi";
import { useForm } from "react-hook-form";

// Components
import * as Layouts from "../../components/Layouts";
import * as Input from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";

import { useAuth } from "../../hooks/Auth";
import { api } from "../../services/api";
import AvatarPlaceholder from "../../assets/avatarPlaceholder.png";

import { Container, Avatar, Form } from "./styles";

export function Profile() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const { user, updateProfile } = useAuth();

  const AvatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : AvatarPlaceholder;

  const [avatar, setAvatar] = useState(AvatarURL);
  const [avatarFile, setAvatarFile] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleChangeAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, old_password, password } = data;
    const updated = {
      name,
      email,
      old_password,
      password,
    };

    const updatedUser = Object.assign(user, updated);
    await updateProfile({ user: updatedUser, avatarFile });
  };

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!isMobile && isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);


  return (
    <Container>

      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
      />
      <SideMenu
        isMenuOpen={isMenuOpen}
        isMenuClose={() => setIsMenuOpen(false)}
      />

      <Layouts.Page>
        <main>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Avatar>
              <a onClick={handleBack}>
                <PiCaretLeft /> Voltar
              </a>

              <img src={avatar} alt={`Avatar de ${user.name}`} />

              <label htmlFor="avatar">
                <PiFileArrowUpDuotone />
                Selecione um avatar
                <input id="avatar" type="file" onChange={handleChangeAvatar} />
              </label>

            </Avatar>

            <div className="input-wrapper">

              <Section className="input-section">

                <div className="input-register">
                  <Input.Default
                    title="Seu nome"
                    {...register("name")}
                    defaultValue={user.name}
                  />

                  <Input.Default
                    title="Seu email"
                    type="email"
                    {...register("email", { required: true })}
                    defaultValue={user.email}
                  />
                  {errors.email && <span>Email é obrigatório</span>}

                  <Input.Default
                    type="password"
                    title="Senha atual"
                    placeholder="Digite a sua senha atual"
                    {...register("old_password")}
                  />

                  <Input.Default
                    type="password"
                    title="Nova senha"
                    placeholder="No mínimo 6 caracteres"
                    {...register("password", { minLength: 6 })}
                  />
                  {errors.password && (
                    <span>A nova senha deve ter no mínimo 6 caracteres</span>
                  )}
                </div>

                <div className="input-adress">
                  <Input.Default
                    title="CEP"
                    placeholder="Digite o seu CEP"
                  />
                  <Input.Default
                    title="Endereço"
                    placeholder="Digite o seu endereço"
                  />
                  <Input.Default
                    title="Número"
                    placeholder="Digite o seu número"

                  />
                  <Input.Default
                    title="Bairro"
                    placeholder="Seu bairro"
                  />
                </div>
              </Section>

              <Button type="submit" title="Salvar alterações" />
            </div>
          </Form>
        </main>

      </Layouts.Page>

      <Footer />
    </Container>
  );
}
