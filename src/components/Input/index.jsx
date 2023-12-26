
import { Container, InputContainer } from './styles'

export function Input({ icon: Icon, value, title, children, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}
      

      <InputContainer {...rest}>
        {Icon && <Icon size={24} />}
        <input {...rest}/>
          {children}
      </InputContainer>

    </Container>
  )
}
