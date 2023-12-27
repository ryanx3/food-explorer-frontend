import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 1rem;

  div {
    display: flex;
    justify-self: center;
    align-self: center;


    h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
    font-family: 'Roboto';
    font-size: 2.4rem;
    font-weight: bold;
  }

  span {
    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    align-self: flex-end;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  }
    
  
  > svg {
    font-size: 3.2rem;
    fill: ${({ theme }) => theme.COLORS.CAKE_100};
  }
    
`