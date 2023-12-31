import { PiSignOut, PiMagnifyingGlassLight, PiReceipt, PiList } from "react-icons/pi";

import { Search } from "../Search";
import { Button } from "../Button";

import { Brand } from '../../assets/brand' 
import { BrandAdmin } from '../../assets/brand-admin' 
import { BrandMobile } from '../../assets/brand-mobile' 
import { BrandMobileAdmin } from '../../assets/brand-mobile-admin' 

import { Container, Menu, Logo } from './styles'
import { useMediaQuery } from "react-responsive";

export function Header({isAdmin = false, ...rest }) {
  const isMobile = useMediaQuery({maxWidth: 1024})

  const LogoDesktop = !isAdmin ? <Brand/> : <BrandAdmin/>
  const LogoMobile = !isAdmin ? <BrandMobile/> : <BrandMobileAdmin/>

  return (
    <Container {...rest}>

      {isMobile && 
      <Menu>
        <PiList/>
      </Menu>
      }

    <Logo>
      { isMobile ? LogoMobile : LogoDesktop}
    </Logo>

      {!isMobile && <Search 
      placeholder="Busque por pratos ou ingredientes"
      icon={PiMagnifyingGlassLight}
      />}

      {!isMobile && <Button
      className="order-button"
      title={'Pedidos (0)'}
      icon={PiReceipt}
      /> }

      {isMobile ? <PiReceipt/> : <PiSignOut/>}
    </Container>
  )
}