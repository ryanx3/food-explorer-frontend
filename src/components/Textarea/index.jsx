import React, { forwardRef } from "react";
import { Container, TextareaContainer } from './styles';

export const Textarea = forwardRef(({ defaultValue, title, ...rest }, ref) => {
  return (
    <Container {...rest}>
      {title && <p>{title}</p>}
      <TextareaContainer defaultValue={defaultValue} ref={ref} {...rest}/>
    </Container>
  );
});