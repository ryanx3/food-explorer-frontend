import styled from "styled-components";

export const NewContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
    'header'
    'content'
    'footer';

    main {

  > a {
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  width: fit-content;

  font-family: inherit;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 140%;
  margin-top: 4rem;
  > svg {
    font-size: 3.2rem;
    }

  @media (max-width: 1024px) { 
    font-weight: 500;
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
    }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .first-section {
    display: grid;
    gap: 3.2rem;
    grid-template-columns: 1.5fr 2.5fr 1.5fr;
  }

  .second-section {
    display: grid;
    grid-template-columns: 3.5fr 1fr;
    gap: 3.2rem;
  }


  @media (max-width: 1024px) {
    .first-section {
    display: flex;
    flex-direction: column;
  }

  .second-section {
    display: flex;
    flex-direction: column;
  }
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: fit-content;
  align-self: flex-end;
  gap: 3.2rem;
  margin-bottom: 4rem;

  button {
    transition: 500ms ease-out;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

    &:hover {
      transition: 500ms ease-out;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }


    @media (max-width: 768px) { 
      display: flex;
      flex-direction: column;
      width: 100%;
    }
`