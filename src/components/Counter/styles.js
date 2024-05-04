import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  span {
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 700;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  button {
    display: flex;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 1.6rem;
    }
  }
`;
