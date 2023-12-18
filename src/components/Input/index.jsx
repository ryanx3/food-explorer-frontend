import { Container } from './styles'

export function Input({icon: Icon, value, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={24}/>}
      <input 
      value={value}
      {...rest}
       />
    </Container>
  )
}