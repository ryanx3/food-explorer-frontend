import React, { useEffect, useRef, forwardRef } from "react";
import { Container, Content } from './styles';

export const Select = forwardRef(({ defaultValue, title, ...rest }, ref) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (defaultValue) {
      selectRef.current.value = defaultValue;
    }
  }, [defaultValue]);

  return (
    <Container {...rest}>
      <p>{title}</p>
      <Content {...rest}>
        <label htmlFor="category">
          <select name="Selecionar" ref={(element) => {
            selectRef.current = element;
            if (ref) {
              if (typeof ref === "function") {
                ref(element);
              } else {
                ref.current = element;
              }
            }
          }} {...rest}>
            <option value="">Selecionar</option>
            <option value="meals">Refeição</option>
            <option value="desserts">Sobremesa</option>
            <option value="beverages">Bebida</option>
          </select>
        </label>
      </Content>
    </Container>
  );
});

