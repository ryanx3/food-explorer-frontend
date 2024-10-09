import React, { useEffect, useRef, forwardRef } from "react";
import { Container, Content } from "./Select";

export const Select = forwardRef(({ defaultValue, title, ...rest }, ref) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (defaultValue) {
      selectRef.current.value = defaultValue;
    }
  }, [defaultValue]);

  return (
    <Container {...rest}>
      {title && <label>{title}</label>}
      <Content {...rest}>
        <label htmlFor="category">
          <select
            name="Selecionar"
            ref={(element) => {
              selectRef.current = element;
              if (ref) {
                if (typeof ref === "function") {
                  ref(element);
                } else {
                  ref.current = element;
                }
              }
            }}
            {...rest}
          >
            <option value="">Selecionar</option>
            <option value="meals">Refeições</option>
            <option value="beverages">Bebidas</option>
            <option value="desserts">Sobremesas</option>
          </select>
        </label>
      </Content>
    </Container>
  );
});
