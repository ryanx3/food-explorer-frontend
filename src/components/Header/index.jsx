import { PiSignOut, PiMagnifyingGlassLight, PiReceipt } from "react-icons/pi";

import { Search } from "../Search";
import { Button } from "../Button";
import { Brand } from "../Brand";

import { Container, Logo } from './styles'

export function Header({ ...rest }) {
  return (
    <Container {...rest}>

      <Logo>
        <Brand/>
      </Logo>

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