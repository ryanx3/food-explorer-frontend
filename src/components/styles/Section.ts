import styled from "styled-components";

export const SectionContainer = styled.section`
  > h2 {
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    margin: 4.5rem 0;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin: 2.5rem 0;
    }
  }
`;
