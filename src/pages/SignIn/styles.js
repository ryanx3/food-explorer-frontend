import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;

gap: 305px;
`

export const Form = styled.form`
  padding: 6.4rem;
  border-radius: 1.6rem;
  width: 476px;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  gap: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};


  h1{
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;

    white-space: nowrap;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    text-decoration: none;
  }

`

export const Logo = styled.div`
* {
  font-size: 4.2rem;
  font-weight: 700;

  svg {
    font-size: 4.8rem;
  }
}
`