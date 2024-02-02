import React, { useEffect, useState } from "react";
import * as Input from "../../components/Input";
import { Button } from "../../components/Button";
import { Brand } from "../../assets/brand";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Form, Logo } from "./styles";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleLogin() {
    navigate("/");
  }

  async function HandleCreateUser() {
    if (!name || !email || !password) {
      return toast.error("Por favor, preencha todos os campos.");
    }
    try {
      await api.post("/users", { name, email, password });
      toast.success("Usuário criado com sucesso!");
      handleLogin();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível criar o usuário.");
      }
    }
  }

  return (
    <Container>
      <Logo>
        <Brand />
      </Logo>

      <Form>
        <h1>Crie sua conta</h1>

        <Input.Default
          title="Seu nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Exemplo: Maria da Silva"
        />

        <Input.Default
          title="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input.Default
          title="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="No mínimo 6 caracteres"
        />

        <Button title="Criar conta" onClick={HandleCreateUser} />

        <a onClick={handleLogin}>Já tenha uma conta</a>
      </Form>
    </Container>
  );
}
