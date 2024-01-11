import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  max-width:428px;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  flex-direction: column;
  visibility: hidden;
  border-radius: 0 10px 10px 0px;
  border: 2px solid ${({ theme }) => theme.COLORS.CAKE_200};
  border-left: none;
  display: grid;
  grid-template-rows: 90px auto 90px;
  
  @media (max-width: 768px) {
    &[data-is-menu-open="true"] {
      visibility: visible;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 2.8rem;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 0px 10px 0px 0px;

  h1 {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-family: Roboto;
    font-size: 2.1rem;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > svg {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
    }
  }
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  padding: 3.6rem 2.8rem 1.2rem;
  height: 100%;

  > nav {
    display: flex;
    flex-direction: column;

    > a {
      width: 100%;
      background: none;
      border: none;
      padding: 1rem 0;
      margin: 0;
      font-family: inherit;
      font-weight: 300;
      font-size: 2.4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1100};
      display: flex;
      align-items: center;

      &:not(:first-child) {
        margin-top: 3.2rem;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px 0px 10px 0px;

  padding: 0 2.8rem;
  gap: 1.6rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  img {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 999px;
    cursor: pointer;
  }

  > svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
  }

  
  .user {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    .name-user {
      > h1 {
        font-size: 1.6rem;
        font-weight: 500;
      }
      span {
        font-size: 1.2rem;
        font-weight: 400;
        cursor: pointer;
      }
    }

  }
`;
