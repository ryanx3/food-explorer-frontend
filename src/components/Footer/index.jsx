import { BrandFooter } from '../../assets/footer-brand'

import { Container, Logo, Copyright } from './styles'

export function Footer() {
  return( 
    <Container>
      
      <Logo>
       <BrandFooter/>
      </Logo>

      <Copyright>
        © 2023 - Todos os direitos reservados.
      </Copyright>

    </Container>
  )
}