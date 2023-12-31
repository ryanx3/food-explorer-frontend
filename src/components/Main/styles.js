import styled from "styled-components";

export const Container = styled.main`
    margin: 0 auto;
    max-width: 100vw;
    width: 80%;

    grid-area: main;

    @media (max-width: 1024px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 95%;
    }
`