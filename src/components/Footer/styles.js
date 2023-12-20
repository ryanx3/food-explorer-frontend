import styled from "styled-components";

export const Container = styled.footer` 
  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-area: footer;

  background: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2.4rem 12.3rem;
`


export const Logo = styled.div` 
  * {
    color: ${({ theme }) => theme.COLORS.DARK_100};
    fill: ${({ theme }) => theme.COLORS.DARK_100};
  }
`

export const Copyright = styled.div` 
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%
`