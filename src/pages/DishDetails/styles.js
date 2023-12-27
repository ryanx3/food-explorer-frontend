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
  `

export const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-template-rows: 100px auto;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: inherit;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 140%;

    margin: 2.4rem 0 4.2rem;

    > svg {
      font-size: 3.2rem;
    }
  }
  `

export const Dish = styled.div`

    display: flex;
    align-items: center;
    gap: 5rem;

    > img {
      width: 39rem;
      height: auto;
    }

    .details-of-dish {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      width: 68.7rem;

      .description-of-dish {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      font-family: inherit;
      font-size: 4rem;
      font-weight: 500;
      line-height: 140%;
      }

      > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: inherit;
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 140%;
      }
      }

      .tags-section {
      display: flex;
      }

      .counter-section {
        display: flex;
        gap: 33px;
        margin-top: 2.4rem;

        button {
          width: fit-content;
        }
      }
    }

  `