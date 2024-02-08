import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
//SVG
import { useAuth } from "../../hooks/Auth";

import { 
  PiSignOut, 
  PiMagnifyingGlassLight,
  PiReceipt, 
  PiList } from "react-icons/pi";

//Components
import { Search } from "../Search";
import { Button } from "../Button";
import * as Layout from "../Layouts";

//Images
import { Brand } from '../../assets/brand'
import { BrandAdmin } from '../../assets/brand-admin'
import { BrandMobile } from '../../assets/brand-mobile'
import { BrandMobileAdmin } from '../../assets/brand-mobile-admin'

import { Container, Menu, Logo } from './styles'

export function Header({ isAdmin = true, onOpenMenu, ...rest }) {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const navigate = useNavigate()

  const { signOut } = useAuth()

  function handleOpenDetails() {
    isAdmin ? navigate("/new") : navigate("")
  }
  function handeSignOut() {
    const userConfirm = confirm("Deseja realmente encerrar a sessão?")
    if(userConfirm){
      signOut()
    }
  }

  const LogoDesktop = !isAdmin ? <Brand /> : <BrandAdmin />
  const LogoMobile = !isAdmin ? <BrandMobile /> : <BrandMobileAdmin />

  return (
    <Container {...rest}>
      <Layout.Header>

        {isMobile &&
          <Menu onClick={onOpenMenu}>
            <PiList />
          </Menu>
        }
        
        <Logo>
          {isMobile ? LogoMobile : LogoDesktop}
        </Logo>

        {!isMobile && <Search
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlassLight}
        />}

        {!isMobile && <Button
          onClick={handleOpenDetails}
          title={isAdmin ? "Novo Prato" : 'Pedidos (0)'}
          icon={isAdmin ? "" : PiReceipt}
        />}

        {isMobile ?
          (isAdmin ? <div /> : <PiReceipt />) :
          <PiSignOut onClick={handeSignOut} />}
      </Layout.Header>
    </Container>
  )
}