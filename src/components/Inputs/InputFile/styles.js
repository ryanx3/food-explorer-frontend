import styled from "styled-components";

export const InputFileContainer = styled.div`
  width: 100% !important;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  line-height: 100%;

  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 8px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 48px;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    gap: 1.6rem;
  }
`;

export const Files = styled.div`
  max-height: 48px;
  > label {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.8rem;
    justify-content: center;

    border-radius: 0.8rem;
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
