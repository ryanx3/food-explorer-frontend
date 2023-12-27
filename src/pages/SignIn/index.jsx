import * as Input from '../../components/Input'
import { Button } from '../../components/Button'
import { Brand } from '../../assets/brand'

import { Container, Form, Logo } from './styles'

export function SignIn() {
  return (
    <Container>
      <Logo>
        <Brand/>  
      </Logo>
      
      <Form>
        <h1>Faça login</h1>

        <Input.Root title="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input.Root type="password" title="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Entrar" />

        <a href='#'>Criar uma conta</a>
      </Form> 

    </Container>
  )
}