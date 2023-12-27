import { PiSignOut, PiMagnifyingGlassLight, PiReceipt } from "react-icons/pi";

import { Search } from "../Search";
import { Button } from "../Button";

import { Brand } from '../../assets/brand' 
import { BrandAdmin } from '../../assets/brand-admin' 

import { Container } from './styles'

export function Header({isAdmin = false, ...rest }) {
  const logo = !isAdmin ? <Brand/> : <BrandAdmin/>

  return (
    <Container {...rest}>

      { logo }

      <Search 
      placeholder="Busque por pratos ou ingredientes"
      icon={PiMagnifyingGlassLight}
      />

      <Button
      title={'Pedidos (0)'}
      icon={PiReceipt}
      /> 

      <PiSignOut/>
    </Container>
  )
}