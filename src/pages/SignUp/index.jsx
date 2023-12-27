import { useMediaQuery } from 'react-responsive';

import * as Input from '../../components/Input'
import { Button } from '../../components/Button'
import { Brand } from '../../assets/brand'

import { Container, Form, Logo} from './styles'

export function SignUp() {
  const isMobile = useMediaQuery({ maxWidth: 320 });

  return (
    <Container>
      
      <Logo>
        <Brand />
      </Logo>
      

      <Form>
        <h1>Crie sua conta</h1>


        <Input.Root title="Seu nome" type="text" placeholder="Exemplo: Maria da Silva" />
        <Input.Root title="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input.Root type="password" title="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Criar conta" />

        <a href='#'>Já tenha uma conta</a>
      </Form>

    </Container>
  )
}