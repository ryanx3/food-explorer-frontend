import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  &:focus-within svg {
    display: none;
  }  
`;
