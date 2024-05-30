import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const MainContent = styled.main`
grid-area: content;

`

