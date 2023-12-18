import styled from "styled-components";

export const Container = styled.section`

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    margin: 4.5rem 0;
  }
`