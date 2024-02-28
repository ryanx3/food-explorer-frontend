import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

//Images
import { BrandFooter } from '../../assets/brand-footer'
import { BrandMobileFooter } from '../../assets/brand-mobile-footer'

//Components
import * as Layout from "../Layouts";
import { api } from "../../services/api";

import { Container, Brand, Copyright, Profile } from './styles'
import { useState } from 'react';
import { useAuth } from '../../hooks/Auth';
import AvatarPlaceholder from "../../assets/avatarPlaceholder.png"

export function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const navigate = useNavigate()

  const { user } = useAuth()

  const AvatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder

  const [ avatar, setAvatar ] = useState(AvatarURL)

  function handleProfile() {
    navigate("/profile")
  }

  const Logo = isMobile ? <BrandMobileFooter /> : <BrandFooter />

  return (
    <Container>

      <Layout.Footer>
        
         <Brand>
          {Logo}
        </Brand>

        <Copyright>
          © 2023 - Todos os direitos reservados.
        </Copyright>

      </Layout.Footer>

    </Container>
  )
}