import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  div svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
