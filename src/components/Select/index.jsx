import { Container, SelectContainer } from './styles'

export function Select({ value, title, ...rest }) {
  return (
    <Container {...rest}>
      {title && <p>{title}</p>}

      <SelectContainer {...rest}>
        <label htmlFor="category">
          <select name="" id="">
            <option value="">Selecionar</option>
            <option value="meal">Refeição</option>
            <option value="dessert">Sobremesa</option>
            <option value="beverage">Bebida</option>
          </select>
        </label>
      </SelectContainer>

    </Container>
  )
}
