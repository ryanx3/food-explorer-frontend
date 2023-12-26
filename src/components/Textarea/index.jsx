import { Container, InputContainer } from './styles'

export function Textarea({ value, title, ...rest }) {
  return (
    <Container {...rest}>
      {title && <p>{title}</p>}

      <InputContainer {...rest}/>

    </Container>
  )
}
