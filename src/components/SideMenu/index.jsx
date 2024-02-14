import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/Auth";
import AvatarPlaceholder from "../../assets/avatarPlaceholder.png";
import { api } from "../../services/api";

//SVG
import { PiXBold, PiSignOut } from "react-icons/pi";

//Components
import { Search } from "../Search";

import { Container, Main, Header, Footer } from "./styles";

export function SideMenu({
  isMenuOpen,
  isMenuClose,
  isAdmin = false,
  ...rest
}) {
  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  const AvatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : AvatarPlaceholder;

  const [avatar, setAvatar] = useState(AvatarURL);

  function handleLogout() {
    const userConfirm = confirm("Deseja realmente encerrar a sessão?")
    if(userConfirm){
      signOut()
    }
    isMenuClose();
  }

  

  function handleProfile() {
    isMenuClose();
    navigate("/profile");
  }

  return (
    <Container data-is-menu-open={isMenuOpen} {...rest}>
      <Header>
        <h1>
          <PiXBold onClick={isMenuClose} />
          Menu
        </h1>
      </Header>

      <Main>
        <nav>
          <Search />

          {isAdmin ? (
            <a href="/new">Adicionar novo prato</a>
          ) : (
            <a href="">Meus Favoritos</a>
          )}
        </nav>
      </Main>

      <Footer>
        {!isAdmin && (
          <div className="user" onClick={handleProfile}>
            <img src={avatar} alt={`Imagem de ${user.name}`} />

            <div className="name-user">
              <h1>{user.name}</h1>
              <span>Editar Perfil</span>
            </div>
          </div>
        )}

        <PiSignOut onClick={handleLogout} />
      </Footer>
    </Container>
  );
}
