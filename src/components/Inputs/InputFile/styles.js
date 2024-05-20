import styled from "styled-components";

export const InputFileContainer = styled.div`
  width: 100% !important;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  line-height: 100%;

  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 8px;
`;

export const Files = styled.div`
  width: 100%;
  height: 48px;
  
  flex-wrap: wrap;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;
 
  > label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 5px;
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
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  input {
    display: none;
  }
`;
