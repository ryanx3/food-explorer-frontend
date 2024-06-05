import styled from "styled-components";

export const DetailsContainer = styled.div`
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  gap: 2.4rem;

  div a {
    width: fit-content;
    display: flex;
    align-items: center;
    align-self: flex-start;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: inherit;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 140%;

    @media (max-width: 1024px) {
      margin-top: 2rem;
      font-weight: 500;
    }
  }

  .DishInformations {
    display: flex;
    place-items: center;
    place-self: center;
    gap: 4.8rem;

    > img {
      width: 39rem;
      height: 39rem;
      border-radius: 999px;
      object-fit: cover;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 1.6rem;

      img {
        width: 26.4rem;
        height: 26.4rem;
      }
    }
  }
`;

export const DetailsContent = styled.div`
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

    span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: inherit;
    font-size: 2rem;
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
  }
`;

export const CounterSection = styled.section`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  button {
    width: fit-content;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    text-align: center;
    gap: 1.6rem;

    button {
      width: fit-content;
      margin-bottom: 2.4rem;
    }

    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: inherit;
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;
