
import { Container, InputContainer, InputFile } from "./styles";

export function Input({ icon: Icon, title, className, ...rest }) {
  return (
    <Container>
      {title && <label>{title}</label>}
        <InputContainer {...rest} />
    </Container>
  );
}
