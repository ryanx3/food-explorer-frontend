import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useAuth } from "../../hooks/Auth";

import { PiMagnifyingGlassLight, PiReceipt, PiList } from "react-icons/pi";

//Components
import * as Layout from "../Layouts";
import { Search } from "../Search";
import { Button } from "../Button";

//Images
import avatarPlaceholder from "../../assets/avatarPlaceholder.png";
import { BrandMobileAdmin } from "../../assets/brand-mobile-admin";
import { BrandMobile } from "../../assets/brand-mobile";
import { BrandAdmin } from "../../assets/brand-admin";
import { Brand } from "../../assets/brand";
import { api } from "../../services/api";

import { HeaderContainer, Menu, Logo, Profile } from "./styles";

export function Header({
  isAdmin = false,
  onOpenMenu,
  onChangeSearch,
  onClick,
  ...rest
}) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpenList, setIsOpenList] = useState(false);

  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const AvatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(AvatarURL);

  function handleRedirectHome() {
    navigate("/");
  }

  function handleRedirectToDetails() {
    navigate("/new");
  }

  function handleOpenListOfOptions() {
    setIsOpenList((prev) => !prev);
    if (isMobile && isOpenList === true) {
      setIsOpenList((prev) => !prev);
    }
  }

  function handleSignOut() {
    const userConfirm = window.confirm("Deseja realmente sair?");
    if (userConfirm) {
      navigate("/");
      signOut();
    }
  }

  const LogoDesktop = !isAdmin ? <Brand /> : <BrandAdmin />;
  const LogoMobile = !isAdmin ? <BrandMobile /> : <BrandMobileAdmin />;

  const profileContent = isMobile ? (
    isAdmin ? <div /> : (<PiReceipt />)) : (<img src={avatar} onClick={handleOpenListOfOptions} />);

  return (
    <HeaderContainer {...rest}>
      <Layout.Header>
        {isMobile && (
          <Menu onClick={onOpenMenu}>
            <PiList />
          </Menu>
        )}

        <Logo onClick={handleRedirectHome}>
          {isMobile ? LogoMobile : LogoDesktop}
        </Logo>

        {!isMobile && (
          <Search
            onChange={onChangeSearch}
            onClickButton={onClick}
            placeholder="Busque por pratos ou ingredientes"
            icon={PiMagnifyingGlassLight}
          />
        )}

        {!isMobile && (
          <Button
            onClick={handleRedirectToDetails}
            title="Novo Prato"
            icon={isAdmin ? "" : PiReceipt}
          />
        )}

        <Profile>
          {profileContent}

          {isOpenList && (
            <nav>
              <ul>
                <li>
                  <Link to={"/profile"}>Perfil</Link>
                </li>
                <li>
                  <Link>Favoritos</Link>
                </li>
                <li onClick={handleSignOut}>Sair</li>
              </ul>
            </nav>
          )}
        </Profile>
      </Layout.Header>
    </HeaderContainer>
  );
}
