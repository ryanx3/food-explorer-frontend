import { Input }  from '../../components/Input'
import { Button } from '../../components/Button'
import { Brand } from '../../components/Brand'

import { Container, Form, Logo } from './styles'

export function SignUp() {
  return (
    <Container>
      <Logo>
        <Brand />
      </Logo>

      <Form>
        <h1>Crie sua conta</h1>

         
          <Input title="Seu nome" type="text" placeholder="Exemplo: Maria da Silva"/>
          <Input title="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
          <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres"/>
        

        <Button title="Criar conta" />

        <a href='#'>Já tenha uma conta</a>
      </Form>

    </Container>
  )
}