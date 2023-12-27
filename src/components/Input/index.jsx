import { PiUploadSimpleBold } from "react-icons/pi";

import { InputContainer, Content, Container, Image } from './styles'

export function Root({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}

      <InputContainer {...rest}>
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </InputContainer>

    </Container>
  )
}

export function Background({ children, title, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}
      
      <Content>
        {children}
      </Content>

    </Container>
  )
}

export function Picture({ children, title, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}

      <Image>
        <label htmlFor="image">
          <input id="image" type="file" />
          <PiUploadSimpleBold />
          <span> Selecionar imagem</span>
        </label>
      </Image>

    </Container>
  )
}
