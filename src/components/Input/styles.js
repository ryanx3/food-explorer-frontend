import styled from "styled-components";

export const Container = styled.div`  
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   background-color: ${({ theme }) => theme.COLORS.DARK.DARK_900};
   padding: 1.2rem 1.4rem;
   border-radius: 5px;
   
   > svg {
     fill: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
     text-align: center;
   }

   input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
     
    gap: 1.4rem;
    outline: none;
    margin-left: 1rem;
    
    border: none;
    background: transparent;

    
    
    &::placeholder {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_500};
      font-family: Roboto;
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

`