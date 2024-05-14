import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

export const TextareaContainer = styled.textarea`
  width: 100%;
  height: 17.2rem;

  font-size: 1.6rem;
  font-family: Roboto;

  align-items: flex-start;
  align-self: stretch;
  padding: 1.4rem;
  gap: 1.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  border: none;
  border-radius: .8rem;

  resize: none;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;