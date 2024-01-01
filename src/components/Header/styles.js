import styled from "styled-components";

export const Container = styled.header`
  margin: 0 auto;
  max-width: 100vw;
  width: 100%;
  padding: 0 10%; 
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;

  grid-area: header;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  
  .order-button {
    width: 21.6rem;
  }
  
  > svg {
    font-size: 3.2rem;
    min-width: 3.2rem;
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
  }

  @media (max-width: 1024px) {
      padding: 6rem 5% 2.8rem;
    }

    @media (max-width: 768px) {
      padding: 6rem 2% 2.8rem;
    > svg { 
      font-size: 2.4rem;
    }
  }

`

export const Menu = styled.div`
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }

  @media (max-width: 768px) {
    svg { 
      font-size: 2.4rem;
    }
  }
`

export const Logo = styled.div`
    display: flex;
    min-width: fit-content;
  @media (max-width: 768px) {
    min-width: 13.6rem;
  }
`