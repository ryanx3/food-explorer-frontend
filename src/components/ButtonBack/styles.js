import styled from "styled-components";

export const ButtonBackContainer = styled.a`
  width: fit-content;
  display: flex;
  align-items: center;
  align-self: flex-start;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: inherit;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 1024px) {
    margin-top: 2rem;
    font-weight: 500;
  }
`;
