import styled from "styled-components";

export const IngredientContainer = styled.div`

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, readOnly }) =>
    readOnly ? "none" : `2px dashed ${theme.COLORS.LIGHT_400}`};

  background: ${({ theme, readOnly }) =>
    readOnly ? theme.COLORS.LIGHT_600 : "transparent"};

  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  gap: 0.8rem;
  white-space: nowrap;

  > input {
    width: 10rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    background: none;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    background: none;
    border: none;
    display: flex;
    justify-self: center;

    svg {
      font-size: 1.2rem;
      fill: ${({ theme }) => theme.COLORS.LIGHT_500};
      fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
