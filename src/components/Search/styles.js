import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
  
  svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input {
    max-width: 28.2rem;

    &:focus {
      border: none;
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`