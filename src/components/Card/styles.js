import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    overflow-wrap: hidden;

    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 304px;
    height: 462px;

    background: ${({ theme }) => theme.COLORS.DARK_300};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_400};

    border-radius: 8px;
    gap: 15px;
    padding: 2.4rem;

    > svg {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;

      font-size: 2.4rem;
      cursor: pointer;
    }
      
      img {
        width: 17.6rem;
        height: 17.6rem;
      }

      h1 {
          display: flex;
          align-items: center;

          white-space: nowrap;

          font-size: 2.4rem;
          font-style: inherit;
          font-weight: 700;
      }

      p {
          color: ${({ theme }) => theme.COLORS.LIGHT_100} ;
          font-family: Roboto;
          font-size: 1.4rem;
          overflow-wrap: break-word;
          
      }
`

export const Title = styled.div`
    h2 {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      text-align: center;

      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-size: 3.2rem;
      line-height: 160%; 
      font-weight: 400;
    }
`

export const Order = styled.div`
      display: flex;
      align-items: center;
      gap: 12px;

      span {
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 700;
        line-height: 160%
      }

      button:nth-child(1), button:nth-child(3) {
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
`