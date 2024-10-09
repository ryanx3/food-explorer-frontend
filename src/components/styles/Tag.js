import styled from "styled-components";

export const TagContainer = styled.div`
  width: fit-content;
  height: fit-content;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1100};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

  svg {
    font-size: 3.2rem;
    fill: ${({ theme }) => theme.COLORS.CAKE_100};
  }
`

