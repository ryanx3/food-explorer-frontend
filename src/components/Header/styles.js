import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  
  display: grid;
  grid-template-columns: 197px 1fr 216px 32px;
  align-items: center;
  gap: 3.2rem;
  
  padding: 2.4rem 12.3rem;
  grid-area: header;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  
  > svg {
    font-size: 3.2rem;
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:hover {
      cursor: pointer;
    }
  }
`

export const Logo = styled.div`

`