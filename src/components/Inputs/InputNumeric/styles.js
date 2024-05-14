import styled from "styled-components";

export const NumericContainer = styled.div`
  width: 100% !important;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  line-height: 100%;

  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 8px;

  > input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    padding-left: 1.2rem;
    border-radius: 0.5rem;
    border: none;

    font-size: 1.6rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: Roboto;
      font-size: 1.6rem;
      font-weight: 400;
    }
    &:focus-within {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
