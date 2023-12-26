import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  
  svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  
  input {
      width: 24.3rem;
      &:focus-within {
        transition: 400ms ease-out;
        width: 100%;
      }
  }
`