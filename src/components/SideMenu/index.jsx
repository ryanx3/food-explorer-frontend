import AvatarPlaceholder from "../../assets/avatarPlaceholder.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { api } from "../../services/api";
import { PiXBold, PiSignOut } from "react-icons/pi";
import { SideMenuContainer, Main, Header, Footer } from "./styles";
import { Search } from "../Search";
import { useSideMenu } from "../../hooks/SideMenu";
import { USER_ROLES } from "../../utils/roles";

export function SideMenu({ active, onChangeSearch, ...rest }) {
  const RedirectTo = useNavigate();
  const { user, signOut } = useAuth();
  const { isMenuOpen, setIsMenuOpen } = useSideMenu();

  const AvatarURL =
    user && user.avatar
      ? `${api.defaults.baseURL}/files/${user.avatar}`
      : AvatarPlaceholder;
  const [avatar, setAvatar] = useState(AvatarURL);

  function handleLogout() {
    const userConfirm = window.confirm("Deseja realmente encerrar a sessão?");
    if (userConfirm) {
      signOut();
    }
    setIsMenuOpen(false);
  }

  function handleProfile() {
    setIsMenuOpen(false);
    RedirectTo("/profile");
  }

  return (
    <SideMenuContainer data-is-menu-open={isMenuOpen} {...rest}>
      <Header>
        <h1>
          <PiXBold onClick={() => setIsMenuOpen(false)} />
          Menu
        </h1>
      </Header>

      <Main>
        <nav>
          <Search onChange={onChangeSearch} />

          {user && user.role === USER_ROLES.ADMIN ? (
            <NavLink to={"/new"}>Novo prato</NavLink>
          ) : user ? (
            <>
              <NavLink>Meus Favoritos</NavLink>
              <NavLink>Meus Pedidos</NavLink>
            </>
          ) : (
            <NavLink to={"/login"}>Fazer login</NavLink>
          )}
        </nav>
      </Main>

      {user && (
        <Footer>
          <div className="user" onClick={handleProfile}>
            <img src={avatar} alt={`Imagem de ${user.name}`} />
            <div className="name-user">
              <h1>{user.name}</h1>
              <span>Editar Perfil</span>
            </div>
          </div>

          <PiSignOut onClick={handleLogout} />
        </Footer>
      )}
    </SideMenuContainer>
  );
}
