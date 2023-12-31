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
      justify-content: center;
      
      height: 26rem;
      margin-top: 16.4rem;
      
      position: relative;
      background: linear-gradient(90deg, #00131C, #091E26, #00131C);
      border-radius: .8rem;
      
      > img {
        width: 65.6rem;        
        position: absolute;
        height: auto;
        
        left: -7.1rem;
        bottom: -1.4rem;
      }
      
      > div {
        padding-left: 50%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        h1 {
          font-size: 4rem;
          font-weight: 500;
          font-family: inherit;
        }
  
        span {
          font-family: Roboto;
          font-size: 1.6rem;
          font-weight: 400;
        }
      }

      @media (max-width: 1280px) {
      height: 20rem;
      margin-top: 14rem;

      img {
      width: 51.2rem;
      bottom: -1.1rem;
      left: -5.5rem; 
      } 

      > div {
      h1 {
        font-size: 3.5rem;
        
      }

      span {
        font-size: 1.4rem;
      }
      }
    }

    @media (max-width: 1024px) {
      height: 18rem;
      margin-top: 12.6rem; 
      margin-left: 1.8rem;
      img {
        width: 28.5rem; 
        bottom: 0; 
        left: -4rem;
      }

      > div {
        padding-left:40%;
        h1 {
          font-size: 3.4rem;
          font-weight: 600;
          line-height: 140%; 
        }

        span {
          font-size: 1.2rem; 
          font-family: inherit;
          font-weight: 400;
          line-height: 140%;
        }
      }
    }

  @media (max-width: 768px) {
    height: 12rem;
    margin-top: 4.4rem;
    img {
      width: 19rem;
      left: -2.4rem;
    } 
    
    > div {
        padding-right: 2rem;
        padding-left:50%;
        display: flex;
        flex-direction: column;
        
      h1 {
        font-size: 1.8rem;
        white-space: nowrap;
      }
    }
  }
    
  @media (max-width: 428px) {
  height: 9rem;
  margin-top: 3.6rem; 
  img {
    width: 15rem; 
    left: -2rem; 
  } 

  div {
    h1 {
      font-size: 1.4rem; 
      white-space: nowrap;
    }

    span {
      font-size: .8rem; 
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
