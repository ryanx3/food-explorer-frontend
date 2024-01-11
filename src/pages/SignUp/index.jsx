import { useMediaQuery } from 'react-responsive';

import * as Input from '../../components/Input'
import { Button } from '../../components/Button'
import { Brand } from '../../assets/brand'

import { Container, Form, Logo } from './styles'
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const navigate = useNavigate()
  function handleToLogin() {
    navigate("/")
  }

  return (
    <Container>

      <Logo>
        <Brand />
      </Logo>

        <Form>
          <h1>Crie sua conta</h1>

          <Input.Default title="Seu nome" type="text" placeholder="Exemplo: Maria da Silva" />
          <Input.Default title="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
          <Input.Default type="password" title="Senha" placeholder="No mínimo 6 caracteres" />

          <Button title="Criar conta" />

          <a onClick={handleToLogin}>Já tenha uma conta</a>
        </Form>

    </Container>
  )
}