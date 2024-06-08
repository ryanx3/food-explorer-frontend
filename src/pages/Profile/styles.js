import styled from "styled-components";

export const ProfileContainer = styled.div`
  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 4rem;
  margin: 4rem auto;
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .input-section {
      display: flex;
      gap: 2rem;
      width: 100%;

      .input-register {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      .input-address {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.2rem;
    margin: -20px 0;
    align-self: start;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 999px;
    object-fit: cover;
    align-self: center;
  }

  > label {
    width: 100%;
    padding: 1.2rem 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    white-space: nowrap;
    gap: 1rem;
    
    font-family: inherit;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(1.2);
    }
  }

  svg {
    font-size: 2.4rem;
    fill: white;
  }

  input {
    display: none;
  }
`;
