import styled from "styled-components";

export const FooterContainer = styled.footer` 
  height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  grid-area: footer;
`

export const Brand = styled.div` 
  display: flex;
`

export const Copyright = styled.div` 
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: Roboto;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  white-space: none;
  
  @media (max-width: 768px) {
    text-align: right;
    font-family: DM Sans;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  `