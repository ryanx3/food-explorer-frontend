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
export const TopBox = styled.section`
      display: flex;
      align-items: center;
      justify-content: flex-end;

      box-shadow: 0 0px 10px ${({ theme }) => theme.COLORS.CAKE_200};

      position: relative;

      height: 26rem;
      padding-right: 10rem;
      
      background: linear-gradient(90deg, #00131C, #091E26, #00131C);
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

export const Content = styled.div`
    grid-area: content;
    width: 100vw;
    padding: 16.4rem 12.3rem 4.5rem;

    swiper-container::before,
    swiper-container::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 27.7rem;
      z-index: 2;
      pointer-events: none;
      flex-shrink: 0;
    }

    swiper-container::before {
      left: 0px;
      background: linear-gradient(
        90deg, 
        #000A0F 0%, rgba(0, 10, 15, 0.27) 90%, transparent 100%)
      ;
    }

    swiper-container::after {
      right: 0px;
      background: linear-gradient(
        90deg, 
        transparent 0%, rgba(0, 10, 15, 0.27) 10%, #000A0F 90%);
    } 

    @media (max-width: 1368px) {
      swiper-container::before,
      swiper-container::after {
        width: 6.7rem;
      }
    }
`
