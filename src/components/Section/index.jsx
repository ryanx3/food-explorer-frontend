import { Container } from './styles'

export function Section({ children, title }) {
  return( 
    <Container>
      {title && <h1>{title}</h1>}

      {children}
    </Container>
  )
}