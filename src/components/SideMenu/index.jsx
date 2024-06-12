import AvatarPlaceholder from "../../assets/avatarPlaceholder.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const AvatarURL = user.avatar
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
        <div>
          <PiXBold onClick={() => setIsMenuOpen(false)} />
        </div>
      </Header>

      <Main>
        <nav>
          <Search onChange={onChangeSearch} />

          {user.role === USER_ROLES.ADMIN ? (
            <a href="/new">Novo prato</a>
          ) : (
            <>
              <a href="">Meus Favoritos</a>
              <a href="">Meus pedidos</a>
            </>
          )}
        </nav>
      </Main>

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
    </SideMenuContainer>
  );
}
