import React, { forwardRef } from "react";
import { Container, SelectContainer } from './styles';

export const Select = forwardRef(({ value, title, ...rest }, ref) => {
  return (
    <Container {...rest}>
      {title && <p>{title}</p>}
      <SelectContainer {...rest}>
        <label htmlFor="category">
          <select ref={ref} {...rest}>
            <option value="">Selecionar</option>
            <option value="meal">Refeição</option>
            <option value="dessert">Sobremesa</option>
            <option value="beverage">Bebida</option>
          </select>
        </label>
      </SelectContainer>
    </Container>
  );
});

