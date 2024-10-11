import { SectionContainer } from './styles/Section'

export function Section({ children, title, ...rest }) {
  return( 
    <SectionContainer {...rest}>
      {title && <h2>{title}</h2>}
      {children}
    </SectionContainer>
  )
}