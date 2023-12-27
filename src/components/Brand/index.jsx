import { BsFillHexagonFill } from "react-icons/bs";

import { Container } from "./styles";

export function Brand() {
  return (
    <Container>
      <BsFillHexagonFill />
      <div>
        <h1>food explorer</h1>
        <span> admin</span>
      </div>
    </Container>
  )
}

export function BrandAdmin() {
    <Container>
      <BsFillHexagonFill />
      food explorer
      admin
    </Container>
}