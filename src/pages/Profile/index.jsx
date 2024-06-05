import AvatarPlaceholder from "../../assets/avatarPlaceholder.png";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiCaretLeft, PiFileArrowUpDuotone } from "react-icons/pi";
import { useForm } from "react-hook-form";

import { PageLayout } from "../../components/Layouts/PagesLayout";
import { Input } from "../../components/Inputs/Input";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

import { useAuth } from "../../hooks/Auth";
import { api } from "../../services/api";
import { ProfileContainer, Avatar, Form } from "./styles";
import { toast } from "react-toastify";

export function Profile() {
  const redirectTo = useNavigate();

  const { user, updateProfile } = useAuth();
  const [loadingAddress, setLoadingAddress] = useState(false);

  const AvatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : AvatarPlaceholder;

  const [avatar, setAvatar] = useState(AvatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const handleBackPage = () => {
    redirectTo("/");
  };

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    reset,
    formState: { errors },
  } = useForm();

  function handleUpdatedAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  const handleUpdatedUser = async (data) => {
    const {
      name,
      email,
      old_password,
      password,
      cep,
      street,
      neighborhood,
      number_home,
    } = data;

    const updated = {
      name,
      email,
      old_password,
      password,
      cep,
      street,
      neighborhood,
      number_home,
    };
    const updatedUser = Object.assign(user, updated);
    await updateProfile({ user: updatedUser, avatarFile });
  };

  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    setLoadingAddress(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.error) {
        toast.error(response.data.error.message);
      } else {
        const data = response.data;
        setFocus("number_home");
        setValue("street", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("cep", cep);
      }
    } catch (error) {
      setFocus("cep");
      reset({
        cep: "",
      });
      toast.error("CEP inexistente. Por favor, insira um CEP válido.");
    } finally {
      setLoadingAddress(false);
    }
  };

  return (
    <ProfileContainer>
      <PageLayout>
        <main>
          <Form onSubmit={handleSubmit(handleUpdatedUser)}>
            <Avatar>
              <a onClick={handleBackPage}>
                <PiCaretLeft /> Voltar
              </a>

              <img src={avatar} alt={`Avatar de ${user.name}`} />

              <label htmlFor="avatar">
                <PiFileArrowUpDuotone />
                Selecione um avatar
                <input id="avatar" type="file" onChange={handleUpdatedAvatar} />
              </label>
            </Avatar>

            <div className="input-wrapper">
              <Section className="input-section">
                <div className="input-register">
                  <Input
                    title="Seu nome"
                    {...register("name")}
                    defaultValue={user.name}
                  />

                  <Input
                    title="Seu email"
                    type="email"
                    {...register("email", { required: true })}
                    defaultValue={user.email}
                  />
                  {errors.email && <span>Email é obrigatório</span>}

                  <Input
                    type="password"
                    title="Senha atual"
                    placeholder="Digite a sua senha atual"
                    {...register("old_password")}
                  />

                  <Input
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
                  <Input
                    title="CEP"
                    type="number"
                    placeholder="Digite o seu CEP"
                    {...register("cep")}
                    defaultValue={user.cep}
                    onBlur={checkCEP}
                  />
                  <Input
                    title="Endereço"
                    placeholder="Digite o seu endereço"
                    defaultValue={user.street ? user.street : ""}
                    {...register("street")}
                  />
                  <Input
                    title="Número"
                    type="number"
                    placeholder="Digite o seu número"
                    defaultValue={user.number_home ? user.number_home : ""}
                    {...register("number_home")}
                  />
                  <Input
                    title="Bairro"
                    placeholder="Seu bairro"
                    defaultValue={user.neighborhood ? user.neighborhood : ""}
                    {...register("neighborhood")}
                  />
                </div>
              </Section>

              <Button type="submit" title="Salvar alterações" />
            </div>
          </Form>
        </main>
      </PageLayout>
    </ProfileContainer>
  );
}
