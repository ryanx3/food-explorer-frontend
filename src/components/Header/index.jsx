import { BsFillHexagonFill } from "react-icons/bs";
import { PiSignOut, PiMagnifyingGlassLight, PiReceipt } from "react-icons/pi";

import { Input } from "../Input";
import { Button } from "../Button";

import { NavBar, Brand } from './styles'

export function Header({ ...rest }) {
  return (
    <NavBar {...rest}>
      <Brand>
        <BsFillHexagonFill/>
        food explorer
      </Brand>

      <Input 
      placeholder="Busque por pratos ou ingredientes"
      icon={PiMagnifyingGlassLight}
      />

      <Button
      title={'Pedidos (0)'}
      icon={PiReceipt}
      /> 

      <PiSignOut/>
    </NavBar>
  )
}