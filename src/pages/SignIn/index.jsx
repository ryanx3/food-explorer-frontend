import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Brand } from "../../assets/brand";

import { useAuth } from "../../hooks/Auth";

import { SignInContainer, Form, Logo } from "./styles";
import { useForm } from "react-hook-form";

export function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const { signIn } = useAuth();

  function handleRegister() {
    navigate("/register");
  }

  const handleLogin = (data) => {
    signIn(data);
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
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          {...register("email")}
          control={control}
        />
        <Input
          type="password"
          title="Senha"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="No mínimo 6 caracteres"
          {...register("password")}
          control={control}
        />

        <Button type="submit" title="Entrar" />

        <a onClick={handleRegister}>Criar uma conta</a>
      </Form>
    </SignInContainer>
  );
}
