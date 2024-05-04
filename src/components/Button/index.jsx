import { ButtonContainer } from './styles'

export function Button({ icon: Icon, title, type, ...rest }) {
  return(
    <ButtonContainer {...rest} type={type}>
      {Icon && <Icon size={32}/>}
      {title}
    </ButtonContainer>
  )
}