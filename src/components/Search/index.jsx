//SVG
import { PiMagnifyingGlassLight } from "react-icons/pi";

//Components
import * as Input from "../Input";

import { Container } from './styles'

export function Search({icon, ...rest}) {
  return(
    <Container {...rest}>
      <Input.Default 
      icon={PiMagnifyingGlassLight}
      placeholder='Busque por pratos ou ingredientes'
      />
    </Container>
  )
}