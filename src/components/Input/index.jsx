import { PiUploadSimpleBold } from "react-icons/pi";

import { Container, InputDefault, InputBackground, InputFile } from './styles'

export function Default({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}

      <InputDefault {...rest}>
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </InputDefault>

    </Container>
  )
}

export function Background({ children, title, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}
      
      <InputBackground>
        {children}
      </InputBackground>

    </Container>
  )
}

export function File({ children, title, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}

      <InputFile>
        <label htmlFor="image">
          <input id="image" type="file" />
          <PiUploadSimpleBold />
          <span> Selecionar imagem</span>
        </label>
      </InputFile>

    </Container>
  )
}
