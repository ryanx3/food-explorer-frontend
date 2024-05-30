import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 114px;

  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px 3px;
`;

export const Menu = styled.div`
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    cursor: pointer;

    @media (max-width: 428px) {
      font-size: 2.4rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 19.7rem;

  @media (max-width: 1024px) {
    min-width: 16.6rem;
  }
  @media (max-width: 768px) {
    min-width: 13.6rem;
  }
`;

export const Profile = styled.div`
  position: relative;

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 100%;
    cursor: pointer;
    object-fit: cover;
  }

  img:hover + nav,
  nav:hover {
    visibility: visible;
    opacity: 1;
  }

  nav {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    transition:
      opacity 200ms linear,
      transform 200ms linear;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 1rem 2rem;
    list-style: none;
    border-radius: 5px;
  }

  nav ul {
    list-style: none;
  }

  nav ul li {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    margin-bottom: 1rem;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
  }

  nav ul li a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  nav::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.COLORS.DARK_1000};
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
