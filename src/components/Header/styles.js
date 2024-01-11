import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 114px;
`;

export const Menu = styled.div`
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    cursor: pointer;
    
    @media (max-width: 428px) {
        font-size: 2.4rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 19.7rem;

  @media (max-width: 768px) {
    min-width: 13.6rem;
  }
`;
