import styled from "styled-components";

export const CardContainer = styled.div`
  width: 30.4rem;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  padding: 2.4rem;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_400};
  border-radius: 0.8rem;

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-size: 2.4rem;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  .favorite-red {
    animation: zoomIn 1.5s infinite alternate;

    @keyframes zoomIn {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.15);
      }

      100% {
        transform: scale(1);
      }
    }
  }

  @media (max-width: 768px) {
    width: 21rem;
    height: auto;
    gap: 1.2rem;
  }
`;

export const Picture = styled.div`
  img {
    width: 17.6rem;
    height: 17.6rem;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 50%;
    object-fit: cover;

    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 768px) {
      width: 8.8rem;
      height: 8.8rem;
    }
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
    cursor: pointer;
  }

  svg {
    font-size: 2.4rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    h2 {
      font-family: Poppins;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: Roboto;
    font-size: 1.4rem;
    line-height: 160%;
    text-overflow: ellipsis;
    min-height: 4.1rem;
    word-break: break-word;
    overflow: hidden;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-size: 3.2rem;
    line-height: 160%;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(12 * 1ch);
  }

  @media (max-width: 768px) {
    p {
      display: none;
    }
    h3 {
      font-size: 1.6rem;
    }
  }
`;

export const Order = styled.div`
  display: flex;
  width: 100%;
  gap: 1.6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button:nth-child(2) {
      max-height: 3.2rem;
    }
  }
`;
