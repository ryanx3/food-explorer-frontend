import { forwardRef } from "react";
import { InputContainer } from "./styles";

export const Input = forwardRef(({ title, icon, ...rest }, ref) => {
  return (
    <InputContainer>
      {title && <label>{title}</label>}
      <div>
        {icon}
        <input ref={ref} {...rest} />
      </div>
    </InputContainer>
  );
});
