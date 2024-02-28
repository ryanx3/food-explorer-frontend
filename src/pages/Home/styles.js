import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
    'header'
    'content'
    'footer';
`

export const Presentation = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 26rem;
  margin-top: 16.5rem;

  position: relative;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: .8rem;

  > img {
    width: 65.6rem;        
    position: absolute;
    
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

  @media (max-width: 1024px) {
    height: 18rem;
    margin-top: 13.1rem;
    
    img {
      width: 48rem;
      bottom: -1.1rem;
      left: -5.15rem; 
    } 

    > div {
      h1 {
        font-size: 3rem;
      }

      span {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    height: 12rem;
    margin-top: 4rem;
  
    img {
      width: 19.1rem;
      left: -3rem;
      bottom: 0;
    } 

    > div {
      padding-left: 45%;
      padding-right: 1rem;
      display: flex;
      flex-direction: column;
      
      h1 {
        font-size: 1.8rem;
        white-space: nowrap;
        width: fit-content;
      }
    }
  }

  @media (max-width: 424px) {
    height: 8rem;
    margin-top: 3rem; 
    img {
      width: 13rem; 
      left: -2rem; 
    } 
    
    div {
      padding-right: 2rem;
      
      h1 {
        text-align: center;
        font-size: 1.2rem; 
        white-space: nowrap;
      }
      
      span {
        font-size: 1rem; 
        text-align: left;
      }
    }
  }

`;

export const Content = styled.div`
  margin-bottom: 4.5rem;

  ${({ isEmpty }) => !isEmpty && css`
    swiper-container::before,
    swiper-container::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 2;
      pointer-events: none;
      flex-shrink: 0;
    }

    swiper-container::before {
      left: 0px;
      width: 27.7rem;
      background: linear-gradient(
        90deg, 
        #000A0F 0%, rgba(0, 10, 15, 0.27) 95%, transparent 100%
      );
    }

    swiper-container::after {
      right: 0px;
      width: 22.4rem;
      background: linear-gradient(
        90deg, 
        transparent 0%, rgba(0, 10, 15, 0.27) 10%, #000A0F 100%
      );
    } 
  `}

  swiper-slide  {
    width: fit-content !important;
  }

  @media (max-width:768px) {
    swiper-container::before {
      display: none;
    } 
    swiper-container::after {
      display: none;
    }

    swiper-container {
      margin-right: -24px;
    }

    margin-bottom: 2.5rem;
    padding-right: 0rem !important;

    section > div:nth-child(3) {
      margin-right: -28px;
    }
  }
`;
