import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

//Images
import { BrandFooter } from '../../assets/brand-footer'
import { BrandMobileFooter } from '../../assets/brand-mobile-footer'

//Components
import * as Layout from "../Layouts";

import { Container, Brand, Copyright, Profile } from './styles'

export function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const navigate = useNavigate()

  function handleProfile() {
    navigate("/profile")
  }

  const Logo = isMobile ? <BrandMobileFooter /> : <BrandFooter />

  return (
    <Container>

      <Layout.Footer>

        {!isMobile && 
        <Profile onClick={handleProfile}>
          <img src="https://github.com/ryanx3.png" alt="Imagem do usuário" />
          <div className="user">
            <h1>Ryan Gabriel</h1>
            <span>Editar Perfil</span>
          </div>
        </Profile>}

         {isMobile && 
         <Brand>
          {Logo}
        </Brand>}

        <Copyright>
          © 2023 - Todos os direitos reservados.
        </Copyright>

      </Layout.Footer>

    </Container>
  )
}