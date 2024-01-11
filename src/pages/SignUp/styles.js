import styled, { css } from "styled-components";

const commonTransition = css`
  transition: 300ms linear;
`;

export const Container = styled.main`
  margin: 0 auto;
  max-width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;

  @media (max-width: 1024px) {
    ${commonTransition}
    display: flex;
    justify-content: center;
    gap: 7.3rem;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  justify-self: center;
  padding: 6.4rem;
  border-radius: 1.6rem;
  width: 47.6rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    white-space: nowrap;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    ${commonTransition}
    width: 31.6rem;
    padding: 0;
    background-color: transparent;

    h1 {
      display: none;
    }
  }

  @media (max-width: 368px) {
    width: 24.6rem;
    ${commonTransition}
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-self: center;

  svg {
    width: 32.4rem;
    height: 4.8rem;
  }

  @media (max-width: 368px) {
    width: 24.6rem;
    ${commonTransition}
  }
`