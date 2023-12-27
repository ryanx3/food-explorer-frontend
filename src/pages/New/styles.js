import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  display: grid;
  grid-template-rows: 10.5rem auto 7.7rem;
  grid-template-areas: 
    'header'
    'content'
    'footer';
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: content;
    margin: 4rem 12.3rem 4rem 12.3rem;
    
    > a {
      display: flex;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      width: fit-content;

      font-family: inherit;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;

      svg {
        font-size: 3.2rem;
      }
    }

    > h1 {
      font-family: inherit;
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin: 2.4rem 0 3.2rem;
    }
`

export const FormField = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  
  .first-column {
    display: grid;
    gap: 32px;
    grid-template-columns: 23rem 1fr 36.5rem;

    input {
      height: 24px;
    }
  }

  .second-column {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-column-gap: 3.2rem;

    input {
      height: 2.4rem;
    }
  }

  .save-button {
    width: fit-content;
    display: flex;
    align-self: flex-end;

    transition: 500ms ease-out;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

    margin-bottom: 4rem;

    &:hover {
      transition: 500ms ease-out;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }
`;



