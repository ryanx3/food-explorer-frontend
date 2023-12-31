import styled from "styled-components";

export const Container = styled.div`  
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
 
   p {
      display: flex;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: Roboto;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
`

export const InputContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 4.8rem;

   background-color: ${({ theme }) => theme.COLORS.DARK_1000};
   padding: 1.2rem 1.4rem;
   border-radius: .5rem;

   > div {
    display: flex;
    align-self: flex-start;
   }

  >  input {
       width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-size: 1.6rem;
       
      gap: 1.4rem;
      outline: none;
      margin-left: 1rem;
      
      border: none;
      background: transparent;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: Roboto;
        font-size: 1.6rem;
        font-weight: 400;
      }
    }

    
    &:focus-within {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > svg {
     fill: ${({ theme }) => theme.COLORS.LIGHT_100};
     text-align: center;
   }
`

export const Content = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   flex-wrap: wrap;

   background-color: ${({ theme }) => theme.COLORS.DARK_1000};
   padding: .4rem .8rem;
   border-radius: .5rem;
   gap: 3.2rem;
`
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  > label {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: .8rem;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 1.2rem 1.4rem;
    border-radius: .8rem;
    cursor: pointer;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.4rem;
      }

    span {
      white-space: nowrap;
      font-family: inherit;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
    }
  }
  
  input {
    display: none;
  }

`
