import styled from "styled-components";

export const TagDefault = styled.div`
    width: fit-content;
    height: fit-content;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_TAG};

    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem; 

    padding: .4rem .8rem;
    border-radius: .5rem;

    margin-right: 2rem;
    
     svg {
      font-size: 3.2rem;
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
`

export const TagCreated = styled.div`
    display: flex;
    align-items: center;
    
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem; 
    white-space: nowrap;
    
    gap: .8rem;
    padding: 1rem 1.6rem;
    border-radius: .8rem;
    
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
    
    > button {
      background: none;
      border: none;
      display: flex;
      justify-self: center;

      svg { 
      font-size: 12px;
      fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  } 

`
export const TagNew = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: transparent;
    border: 2px dashed ${({ theme }) => theme.COLORS.LIGHT_500};

    padding: 1rem 1.6rem;
    border-radius: .8rem;

    input {
      width: 68px;
      max-height: 16px;
      background: none;
      border: none;
      outline: none;

      font-family: Roboto;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
    
    > button {
      background: none;
      border: none;
      display: flex;
      justify-self: center;
      

      svg { 
      font-size: 12px;
      fill: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  } 
` 