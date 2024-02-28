import React, { forwardRef } from "react";
import { PiUploadSimpleBold } from "react-icons/pi";

import { Container, InputDefault, InputBackground, InputFile } from "./styles";

export const Default = forwardRef(
  ({ icon: Icon, title, className, ...rest }, ref) => {
    return (
      <Container>
        {title && <label>{title}</label>}
        <InputDefault className={className} {...rest} ref={ref}>
          {Icon && <Icon size={24} />}
          <input id="input-default"{...rest} />
        </InputDefault>
      </Container>
    );
  }
);

export const Background = forwardRef(
  ({ children, title, ...rest }, ref) => {
    return (
      <Container>
        {title && <p>{title}</p>}
        <InputBackground {...rest} ref={ref}>
          {children}
        </InputBackground>
      </Container>
    );
  }
);

export function File({ title, value, onChange, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}

      <InputFile className="image" >

        <label htmlFor="image">

          <PiUploadSimpleBold />
          <span> {value || "Selecionar imagem"}</span>
          <input
            id="image"
            type="file"
            onChange={onChange}
            {...rest}
          />
        </label>

      </InputFile>
    </Container>
  );
}; 