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
            <option value="meals">Refeição</option>
            <option value="desserts">Sobremesa</option>
            <option value="beverages">Bebida</option>
          </select>
        </label>
      </SelectContainer>
    </Container>
  );
});

