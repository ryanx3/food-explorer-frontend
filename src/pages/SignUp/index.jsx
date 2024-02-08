import React, { useEffect, useState } from "react";
import * as Input from "../../components/Input";
import { Button } from "../../components/Button";
import { Brand } from "../../assets/brand";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Form, Logo } from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }

  const onSubmit = async (data) => {
    try {
      await api.post("/users", data);
      toast.success("Usuário criado com sucesso!");
      handleLogin();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível criar o usuário.");
      }
    }
  };

  return (
    <Container>
      <Logo>
        <Brand />
      </Logo>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie sua conta</h1>

        <Input.Default
          title="Seu nome"
          type="text"
          {...register("name", { required: "Por favor, insira seu nome." })}
          placeholder="Exemplo: Maria da Silva"
        />

        <Input.Default
          title="Email"
          type="email"
          {...register("email", {
            required: "Por favor, insira seu email.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Por favor, insira um email válido.",
            },
          })}
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <Input.Default
          title="Senha"
          type="password"
          {...register("password", {
            required: "Por favor, insira sua senha.",
            minLength: {
              value: 6,
              message: "A senha deve ter no mínimo 6 caracteres.",
            },
          })}
          placeholder="No mínimo 6 caracteres"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <Button type="submit" title="Criar conta" />

        <a onClick={handleLogin}>Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
