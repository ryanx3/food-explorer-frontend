import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

//Images
import { BrandFooter } from '../../assets/brand-footer'
import { BrandMobileFooter } from '../../assets/brand-mobile-footer'

//Components
import * as Layout from "../Layouts";

import { FooterContainer, Brand, Copyright } from './styles'

export function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const Logo = isMobile ? <BrandMobileFooter /> : <BrandFooter />

  return (
    <FooterContainer>

      <Layout.Footer>
        
         <Brand>
          {Logo}
        </Brand>

        <Copyright>
          © 2023 - Todos os direitos reservados.
        </Copyright>

      </Layout.Footer>

    </FooterContainer>
  )
}