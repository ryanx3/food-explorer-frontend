import { PiMagnifyingGlassLight } from "react-icons/pi";

import { Input } from "../Input";

import { Container } from './styles'

export function Search({ ...rest}) {
  return(
    <Container {...rest}>
      <Input 
      icon={PiMagnifyingGlassLight}
      placeholder='Busque por pratos ou ingredientes'
      />
    </Container>
  )
}