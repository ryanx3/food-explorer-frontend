import { BsFillHexagonFill } from "react-icons/bs";

import { Container, Brand, Copyright } from './styles'

export function Footer() {
  return( 
    <Container>
      
      <Brand>
      <BsFillHexagonFill/>
      <h1>food explorer</h1>
      </Brand>

      <Copyright>
      © 2023 - Todos os direitos reservados.
      </Copyright>

    </Container>
  )
}