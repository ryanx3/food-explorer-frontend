import { Container, TextareaContainer } from './styles'

export function Textarea({ value, title, ...rest }) {
  return (
    <Container {...rest}>
      {title && <p>{title}</p>}
      <TextareaContainer {...rest}/>
    </Container>
  )
}
