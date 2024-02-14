import styled from "styled-components";

export const TagDefault = styled.div`
  width: fit-content;
  height: fit-content;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1100};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  padding: .4rem .8rem;
  border-radius: .5rem;

  svg {
    font-size: 3.2rem;
    fill: ${({ theme }) => theme.COLORS.CAKE_100};
  }
`;

export const TagRemover = styled.div`
  display: flex;
  align-items: center;

  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  white-space: nowrap;

  gap: .8rem;
  padding: 1rem 1.6rem;
  border-radius: .8rem;

  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};

  > button {
    background: none;
    border: none;
    display: flex;
    justify-self: center;

    svg {
      font-size: 1.2rem;
      fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const TagCreator = styled.div`
  display: flex;
  align-items: center;
  height: 3.2rem;

  background-color: transparent;
  border: 2px dashed ${({ theme }) => theme.COLORS.LIGHT_500};

  padding: 1rem 1.6rem;
  border-radius: .8rem;
  gap: .8rem;

  input {
    width: 6.8rem;
   
    max-height: 1.6rem;
    background: none;
    border: none;
    outline: none;

    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    background: none;
    border: none;
    display: flex;
    justify-self: center;

    svg {
      font-size: 1.2rem;
      fill: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
