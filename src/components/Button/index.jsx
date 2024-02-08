import { Container } from './styles'

export function Button({ icon: Icon, title, type, ...rest }) {
  return(
    <Container {...rest} type={type}>
      {Icon && <Icon size={32}/>}
      {title}
    </Container>
  )
}