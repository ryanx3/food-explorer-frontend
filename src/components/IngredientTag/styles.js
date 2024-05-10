import styled from "styled-components";

export const IngredientContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3.2rem;

  background-color: transparent;
  border: 2px dashed ${({ theme }) => theme.COLORS.LIGHT_500};

  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  gap: 0.8rem;

  input {
    width: 6.8rem;

    max-height: 1.6rem;
    background: none;
    border: none;
    outline: none;

    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

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
    }
  }
`;

export const TagRemover = styled.div`
  display: flex;
  align-items: center;

  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  white-space: nowrap;

  gap: 0.8rem;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;

  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};

  > button {
    background: none;
    border: none;
    display: flex;
    justify-self: center;

    svg {
      font-size: 1.2rem;
      fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
