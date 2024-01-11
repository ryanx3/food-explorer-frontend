import { useNavigate } from 'react-router-dom'

import * as Input from '../../components/Input'
import { Button } from '../../components/Button'
import { Brand } from '../../assets/brand'


import { Container, Form, Logo } from './styles'

export function SignIn() {
  const navigate = useNavigate()

  function handleRegister() {
    navigate("/register")
  }

  return (
    <Container>
      <Logo>
        <Brand />
      </Logo>

        <Form>
          <h1>Faça login</h1>

          <Input.Default title="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
          <Input.Default type="password" title="Senha" placeholder="No mínimo 6 caracteres" />

          <Button title="Entrar" />

          <a onClick={handleRegister}>Criar uma conta</a>
        </Form>

    </Container>
  )
}