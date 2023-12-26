import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto 7.7rem;
  grid-template-areas: 
    'header'
    'content'
    'footer';

  overflow-x: hidden;
  
  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 12.3rem 4rem 12.3rem;
    
    > a {
      display: flex;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: inherit;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;

      svg {
        font-size: 3.2rem;
      }
    }

    h1 {
      font-family: inherit;
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin: 2.4rem 0 3.2rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: fit-content;


  display: flex;
  flex-direction: column;
  gap: 3.2rem;


  p {
    width: fit-content;
    height: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
  }

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

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: .8rem;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 1.2rem 1.4rem;
    border-radius: .8rem;
    cursor: pointer;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.4rem;
        align-items: flex-end;
      }

    span {
      white-space: nowrap;

      font-family: inherit;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      
      cursor: pointer;
    }
  }
  
  input {
    display: none;
    z-index: -1;
  }
`;

export const Category = styled.div`
  > label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    select {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      border-radius: .5rem;
      border: none;
      padding: 1.2rem 1.4rem;
      font-size: 1.4rem;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  .tags {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.4rem 0.8rem;
    gap: .8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    height: 4.8rem;
    border-radius: 0.8rem;
  }
`;
