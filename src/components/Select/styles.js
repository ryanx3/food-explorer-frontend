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

export const SelectContainer = styled.div`

> label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    select {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      border-radius: .5rem;
      border: none;
      padding: 1.2rem 1.4rem;
      font-size: 1.4rem;
    }
  }
`
