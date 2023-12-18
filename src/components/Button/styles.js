import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  white-space: nowrap;
  padding: 1.2rem 3.2rem;
  gap: .8rem;
  border-radius: .5rem;
  border: none;

  cursor: pointer;
    
  > svg {
    font-size: 3.2rem;
  }
`