import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto 7.7rem;
  grid-template-areas: 
  'header'
  'main'
  'footer';

  overflow-x: hidden;
  `
export const TopBox = styled.section`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 16.4rem;

      position: relative;

      height: 26rem;
      
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

      @media (max-width: 768px) {
  height: 18rem;
  margin-top: 6.6rem; /* 4.4rem * (18/12) = 6.6rem */

  img {
    width: 28.5rem; /* 19rem * (18/12) = 28.5rem */
    height: auto;
    bottom: 0rem;
    left: -3.6rem; /* -2.4rem * (18/12) = -3.6rem */
  } 

  .text-box {
    h1 {
      font-family: inherit;
      font-size: 27px; /* 18px * (18/12) = 27px */
      font-weight: 600;
      line-height: 140%;
    }

    span {
      font-family: inherit;
      font-size: 18px; /* 12px * (18/12) = 18px */
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }
    }
`

export const Content = styled.div`

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
        #000A0F 0%, rgba(0, 10, 15, 0.27) 95%, transparent 100%)
      ;
    }

    swiper-container::after {
      right: 0px;
      background: linear-gradient(
        90deg, 
        transparent 0%, rgba(0, 10, 15, 0.27) 10%, #000A0F 100%);
    } 

    /* @media (max-width: 1368px) {
      swiper-container::before,
      swiper-container::after {
        width: 6.7rem;
      }
    } */
`
