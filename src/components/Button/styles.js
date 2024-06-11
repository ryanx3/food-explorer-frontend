import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  padding: 1.2rem 3.2rem;
  border-radius: 0.5rem;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  white-space: nowrap;
  border: none;

  > svg {
    font-size: 3.2rem;
  }
`;