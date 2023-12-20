import { Brand } from '../Brand'

import { Container, Logo, Copyright } from './styles'

export function Footer() {
  return( 
    <Container>
      
      <Logo>
       <Brand/>
      </Logo>

      <Copyright>
      © 2023 - Todos os direitos reservados.
      </Copyright>

    </Container>
  )
}