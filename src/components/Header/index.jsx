import { BsFillHexagonFill } from "react-icons/bs";
import { PiSignOut, PiMagnifyingGlassLight, PiReceipt } from "react-icons/pi";

import { Search } from "../Search";
import { Button } from "../Button";

import { Container, Brand } from './styles'

export function Header({ ...rest }) {
  return (
    <Container {...rest}>

      <Brand>
        <BsFillHexagonFill/>
        food explorer
      </Brand>

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