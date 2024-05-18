import { forwardRef } from "react";
import { InputContainer } from "./styles";

export const Input = forwardRef(({ title, icon: Icon, ...rest }, ref) => {
  return (
    <InputContainer>
      {title && title}
      <div>
        {Icon && <Icon size={24} />}
        <input ref={ref} {...rest} />
      </div>
    </InputContainer>
  );
});
