import { useMediaQuery } from 'react-responsive'
import { BrandFooter } from '../../assets/brand-footer'
import { BrandMobileFooter } from '../../assets/brand-mobile-footer'

import { Container, Brand, Copyright } from './styles'

export function Footer() {
  const isMobile = useMediaQuery({maxWidth: 768})
  
  const Logo = isMobile ? <BrandMobileFooter/> : <BrandFooter/>
  
  return( 
    <Container>
      
      <Brand>
       { Logo }
      </Brand>

      <Copyright>
        © 2023 - Todos os direitos reservados.
      </Copyright>

    </Container>
  )
}