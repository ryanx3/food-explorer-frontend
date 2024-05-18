import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100% !important;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  line-height: 100%;

  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4.8rem;
    padding: 1.2rem;

    border-radius: 5px;
    gap: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

    &:focus-within {
      border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    input {
      width: 100%;
      background: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      
      border: none;
      font-size: 1.6rem;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;
