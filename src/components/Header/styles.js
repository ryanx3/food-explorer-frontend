import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 12.3rem;
  gap: 3.2rem;
  grid-area: header;
  
  > svg {
    font-size: 3.2rem;
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:hover {
      cursor: pointer;
    }
  }
`

export const Brand = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    gap: 10px;

    font-family: 'Roboto';
    font-size: 2.4rem;
    font-weight: bold;

    
    > svg {
      font-size: 3.2rem;
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
    
`