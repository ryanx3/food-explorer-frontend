import styled from "styled-components";

export const Container = styled.footer` 
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  grid-area: footer;
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
  export const Brand = styled.div` 
    display: flex;
  `

export const Profile = styled.div` 
  display: flex;
  gap: .8rem;
  cursor: pointer;
  
  img {
    width: 4.8rem;
    height: auto;
    border-radius: 999px;
  }

  .user {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > h1 {
      font-size: 1.6rem;
      font-weight: 500;
    }
    span {
      font-size: 1.2rem;
      font-weight: 400;
      cursor: pointer;
    }
  }

`