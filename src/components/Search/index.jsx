import { PiMagnifyingGlassLight } from "react-icons/pi";

import * as Input from "../Input";

import { Container } from './styles'

export function Search({ ...rest}) {
  return(
    <Container {...rest}>
      <Input.Root 
      icon={PiMagnifyingGlassLight}
      placeholder='Busque por pratos ou ingredientes'
      />
    </Container>
  )
}