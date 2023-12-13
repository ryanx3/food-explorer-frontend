import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin-bottom: 4.5rem;

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    margin-bottom: 2.3rem;
  }

`