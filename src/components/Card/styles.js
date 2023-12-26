import styled from "styled-components";

export const Container = styled.div`
  width: 30.4rem;
  height: 46.2rem;

  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  overflow: hidden;

  padding: 2.4rem;
  gap: 1.5rem;

  background: ${({ theme }) => theme.COLORS.DARK_300};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_400};
  border-radius: 0.8rem;

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-size: 2.4rem;
    cursor: pointer;
    
  }

  img {
    width: 17.6rem;
    height: 17.6rem;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    line-height: 160%;
    text-overflow: ellipsis;

    min-height: 4.1rem;
    word-break: break-word;
    overflow: hidden;
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 3.2rem;
    line-height: 160%;
    font-weight: 400;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    max-width: calc(12 * 1ch);
  }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;

  h2 {
    max-width: calc(16 * 1ch);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 2.4rem;
    font-style: inherit;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  
  svg {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Order = styled.div`
  display: flex;
  gap: 1.6rem;
`;