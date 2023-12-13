import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 'header' 'content';
  
  main {
    
    section:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: end;

      position: relative;

      margin: 16.4rem 0 4.5rem 0;
      padding: 8.8rem 9.2rem;
      
      background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
      border-radius: 8px;

      > img {
        position: absolute;
        left: -55px;
        bottom: 0px;
      }

      > .rectangle-text {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};

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
  }
}
`

export const Content = styled.div`
    grid-area: content;
    padding: 0rem 12.4rem;
`