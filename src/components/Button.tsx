import { IconType } from "react-icons/lib";
import { ButtonContainer } from "./styles/Button";

interface ButtonProps {
  icon: IconType
  title: string
}

export function Button({icon: Icon, title, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {Icon && <Icon size={32} />}
      {title}
    </ButtonContainer>
  );
}
