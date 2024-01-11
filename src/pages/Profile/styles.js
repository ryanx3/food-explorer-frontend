import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  > main {
    width: clamp(260px, 428px, 100%);
    display: flex;
    flex-direction: column;
    align-items: center;

     a {
      display: flex;
      align-items: center;
      align-self: flex-start;
  
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: inherit;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
  
      margin: 2.4rem 0;

      @media (max-width: 1024px) { 
        font-weight: 500;
      }
    } 
  }
    `
    
export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;

  > label {
    width: 48px;
    height: 48px;

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
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  button {
    margin-bottom: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    color: black;
    font-weight: 700;
  }
`