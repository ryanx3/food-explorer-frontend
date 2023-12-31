import styled from "styled-components";

export const Container = styled.footer` 
  margin: 0 auto;
  max-width: 100vw;
  width: 100%;
  padding: 0 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  

  grid-area: footer;
  background: ${({ theme }) => theme.COLORS.DARK_700};
`


export const Brand = styled.div` 

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
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
`