import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto 7.7rem;
  grid-template-areas: 
  'header'
  'content'
  'footer';

  overflow-x: hidden;

  ::-webkit-scrollbar {
      height: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.CAKE_100};
      border-radius: 5px;
      bottom: 0;
    }
  `

export const Content = styled.div`
    grid-area: content;
    width: 100vw;
    padding: 16.4rem 12.3rem 4.5rem;

    .wrapper-cards {
      gap: 2.7rem;
      display: flex;
      overflow-x: auto;
    }
`

export const TopBox = styled.section`
      display: flex;
      align-items: center;
      justify-content: flex-end;

      position: relative;

      height: 26rem;
      padding-right: 10rem;
      
      background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
      border-radius: 8px;

      > img {
        position: absolute;
        left: -7rem;
        bottom: -1.4rem;
        
        width: 65.6rem;        
      }

      > div {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        h1 {
          font-size: 4rem;
          font-weight: 500;
          margin-bottom: 0.8rem;
        }
  
        span {
          font-family: 'Roboto', sans-serif;
          font-size: 1.6rem;
          font-weight: 400 ;
        }
      }
`