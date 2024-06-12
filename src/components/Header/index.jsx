import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useAuth } from "../../hooks/Auth";

import { PiReceipt, PiList } from "react-icons/pi";

import { USER_ROLES } from "../../utils/roles";

import { HeaderLayout } from "../Layouts/PagesLayout";
import { Search } from "../Search";
import { Button } from "../Button";

import avatarPlaceholder from "../../assets/avatarPlaceholder.png";
import { BrandMobileAdmin } from "../../assets/brand-mobile-admin";
import { BrandMobile } from "../../assets/brand-mobile";
import { BrandAdmin } from "../../assets/brand-admin";
import { Brand } from "../../assets/brand";
import { api } from "../../services/api";

import { HeaderContainer, Menu, Logo, Profile } from "./styles";
import { useSideMenu } from "../../hooks/SideMenu";
import { useCart } from "../../hooks/Cart";

export function Header({ onChangeSearch, onClick, ...rest }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { setIsMenuOpen } = useSideMenu();
  const { signOut, user } = useAuth();

  const { orderItemsCount } = useCart();

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

  function handleSignOut() {
    const userConfirm = window.confirm("Deseja realmente sair?");
    if (userConfirm) {
      navigate("/");
      signOut();
    }
  }

  const LogoDesktop =
    user.role !== USER_ROLES.ADMIN ? <Brand /> : <BrandAdmin />;
  const LogoMobile =
    user.role !== USER_ROLES.ADMIN ? <BrandMobile /> : <BrandMobileAdmin />;

  const profileContent = isMobile ? (
    user.role === USER_ROLES.ADMIN ? (
      <div />
    ) : (
      <PiReceipt />
    )
  ) : (
    <img src={avatar} />
  );
  return (
    <HeaderContainer {...rest}>
      <HeaderLayout>
        {isMobile && (
          <Menu onClick={() => setIsMenuOpen(true)}>
            <PiList />
          </Menu>
        )}

        <Logo onClick={handleRedirectHome}>
          {isMobile ? LogoMobile : LogoDesktop}
        </Logo>

        {!isMobile && <Search onChange={onChangeSearch} />}

        {!isMobile && (
          <Button
            onClick={handleRedirectToDetails}
            title={
              user.role === USER_ROLES.ADMIN
                ? "Novo Prato"
                : `Pedidos (${orderItemsCount})`
            }
            icon={user.role === USER_ROLES.ADMIN ? null : PiReceipt}
          />
        )}

        <Profile>
          {profileContent}

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
        </Profile>
      </HeaderLayout>
    </HeaderContainer>
  );
}
