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
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   background-color: ${({ theme }) => theme.COLORS.DARK_1000};
   padding: 1.2rem 1.4rem;
   border-radius: .5rem;

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


    > svg {
     fill: ${({ theme }) => theme.COLORS.LIGHT_100};
     text-align: center;
   }
`