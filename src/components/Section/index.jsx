import { Container } from './styles'

export function Section({ children, title, ...rest }) {
  return( 
    <Container {...rest}>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  )
}