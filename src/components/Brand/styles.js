import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    gap: 10px;

    font-family: 'Roboto';
    font-size: 2.4rem;
    font-weight: bold;

    
     svg {
      font-size: 3.2rem;
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
    
`