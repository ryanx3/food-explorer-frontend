import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
    align-items: center;
    align-self: flex-start;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: inherit;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 140%;
    
    margin: 2.4rem 0 4.2rem;

    @media (max-width: 1024px) { 
      margin: 1.6rem 0 3.6rem;
      font-weight: 500;
    }
  }
}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  > img {
    min-width: 39rem;
    height: auto;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1.6rem;

    img {
      min-width: 26.4rem;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: inherit;
    font-size: 4rem;
    font-weight: 500;
    line-height: 140%;
    white-space: nowrap;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: inherit;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 140%;
  } 

  .tags-section {
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

  } 

  @media (max-width: 1024px) {
  .tags-section {
    justify-content: center;
    gap: 1.6rem;
  }
  

  h1 {
    font-size: 2.7rem;
  }
  p {
    font-size: 1.6rem;
  }
}`

export const CounterSection = styled.section`
  display: flex;
  gap: 3.3rem;
  
  button {
    width: fit-content;
  }
  
  @media (max-width: 1024px) {
    justify-content: center;
    text-align: center;
    gap: 1.6rem;
    margin-bottom: 54px;
  }
`;
