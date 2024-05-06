import { forwardRef } from "react";
import { Container } from "./styles";

export const Input = forwardRef(({ icon: Icon, title, ...rest }, ref) => {
  return (
    <Container>
      {title && <label>{title}</label>}
      <input ref={ref} {...rest} />
    </Container>
  );
})
