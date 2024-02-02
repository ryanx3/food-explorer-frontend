import { useNavigate } from "react-router-dom";

import * as Input from "../../components/Input";
import { Button } from "../../components/Button";
import { Brand } from "../../assets/brand";

import { useAuth } from "../../hooks/Auth";

import { Container, Form, Logo } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";

export function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleRegister() {
    navigate("/register");
  }

  async function handleLogin() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo>
        <Brand />
      </Logo>

      <Form>
        <h1>Faça login</h1>

        <Input.Default
          title="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input.Default
          type="password"
          title="Senha"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="No mínimo 6 caracteres"
        />

        <Button title="Entrar" onClick={handleLogin} />

        <a onClick={handleRegister}>Criar uma conta</a>
      </Form>
    </Container>
  );
}
