import styled, { css } from "styled-components";

const commonTransition = css`
  transition: 300ms linear;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40.5rem;

  @media (max-width: 1380px) {
    gap: 30.5rem;
    ${commonTransition}
  }

  @media (max-width: 1280px) {
    gap: 20.5rem;
    ${commonTransition}
  }

  @media (max-width: 1200px) {
    gap: 10.5rem;
    ${commonTransition}
  }

  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    gap: 7.5rem;
    ${commonTransition}
  }
`;

export const Form = styled.form`
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
    width: 31.6rem;
    padding: 0;
    background-color: transparent;
    ${commonTransition}

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
    width: 324px;
    height: 48px;
  }

  @media (max-width: 368px) {
    width: 24.6rem;
    ${commonTransition}
  }
`;