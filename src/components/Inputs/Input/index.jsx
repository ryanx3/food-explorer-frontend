import { forwardRef } from "react";
import { InputContainer } from "./styles";

export const Input = forwardRef(({ title, icon: Icon, ...rest }, ref) => {
  return (
    <InputContainer>
      {title && <label>{title}</label>}
      <div>
        {Icon && <Icon size={24} />}
        <input ref={ref} {...rest} />
      </div>
    </InputContainer>
  );
});
