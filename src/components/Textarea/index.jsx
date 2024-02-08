import React, { forwardRef } from "react";
import { Container, TextareaContainer } from './styles';

export const Textarea = forwardRef(({ value, title, ...rest }, ref) => {
  return (
    <Container {...rest}>
      {title && <p>{title}</p>}
      <TextareaContainer ref={ref} {...rest}/>
    </Container>
  );
});