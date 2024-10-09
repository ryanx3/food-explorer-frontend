import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Inputs/Input";
import { Button } from "../../components/Button";
import { Brand } from "../../assets/brand";

import { useAuth } from "../../hooks/Auth";

import { SignInContainer, Form, Logo } from "../SignIn/styles";
import { useForm } from "react-hook-form";

export function SignIn() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const { signIn } = useAuth();

  function handleRegister() {
    navigate("/register");
  }

  const handleLogin = (data) => {
    signIn(data);
    navigate("/")
  };

  return (
    <SignInContainer>
      <Logo>
        <Brand />
      </Logo>

      <Form onSubmit={handleSubmit(handleLogin)}>
        <h1>Faça login</h1>

        <Input
          title="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          {...register("email")}
        />
        <Input
          type="password"
          title="Senha"
          placeholder="No mínimo 6 caracteres"
          {...register("password")}
        />

        <Button type="submit" title="Entrar" />

        <a onClick={handleRegister}>Criar uma conta</a>
      </Form>
    </SignInContainer>
  );
}
