import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center; 
  justify-content: center;  

  gap: .8rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 1.2rem 3.2rem;
  white-space: nowrap;
  border-radius: .5rem;
  border: none;
    
  > svg {
    font-size: 3.2rem;
  }
`;