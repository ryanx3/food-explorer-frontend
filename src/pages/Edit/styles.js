import styled from "styled-components";

export const EditContainer = styled.div``;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > a {
    display: flex;
    align-items: center;
    width: fit-content;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: inherit;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 140%;

    @media (max-width: 1024px) {
      font-weight: 500;
      margin-top: 2.4rem;
    }
  }

  > h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .first-section {
    display: grid;
    gap: 2.4rem;
    grid-template-columns: 1fr 2fr 1fr;
  }

  .second-section {
    display: grid;
    grid-template-columns: 3.1fr 1fr;
    gap: 2.4rem;
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

export const LabelTitle = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: Roboto;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .background {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 5px;
    gap: 1.6rem;
    padding: 8px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-bottom: 2rem;

  button:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    transition: 300ms ease-out;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
