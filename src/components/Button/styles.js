import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  display: flex;
  align-items: center; 
  justify-content: center;  

  gap: .8rem;
  padding: 1.2rem 3.2rem;
  border-radius: .5rem;

  font-family: inherit;
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