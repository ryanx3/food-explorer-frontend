import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  padding: 0 2rem;

  height: 114px;

  a {
      display: flex;
      align-items: center;
      
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: inherit;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;

      @media (max-width: 1024px) {
        font-weight: 500;
      }
    }
`;

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin-top: -93px;

  > label {
    width: 56px;
    height: 56px;

    border: 5px solid ${({ theme }) => theme.COLORS.DARK_500};
    background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;

    cursor: pointer;
  }

  svg {
    font-size: 2.4rem;
  }

  input {
    display: none;
  }

  img {
    position: relative;
    width: 186px;
    height: 186px;
    border-radius: 999px;
  }
`;

export const Form = styled.form`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.2rem;
    margin: -20px 0;
    align-self: start;
  }

  button {
    margin-bottom: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    color: black;
    font-weight: 700;
  }
`;
