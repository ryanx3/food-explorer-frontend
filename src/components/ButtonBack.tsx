import { PiCaretLeft } from "react-icons/pi";
import { ButtonBackContainer } from "./ButtonBack";

export function ButtonBack({ ...rest }) {
  return (
    <ButtonBackContainer {...rest}>
      <PiCaretLeft size={32}/>
      Voltar
    </ButtonBackContainer>
  );
}
