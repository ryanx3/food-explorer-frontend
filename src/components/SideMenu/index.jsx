import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import AvatarPlaceholder from "../../assets/avatarPlaceholder.png";
import { api } from "../../services/api";
import { PiXBold, PiSignOut } from "react-icons/pi";
import { Container, Main, Header, Footer } from "./styles";
import { Search } from "../Search";

export function SideMenu({
  isMenuOpen = false,
  isMenuClose,
  isAdmin = false,
  active,
  onChangeSearch,
  ...rest
}) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const AvatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : AvatarPlaceholder;
  const [avatar, setAvatar] = useState(AvatarURL);
  const menuRef = useRef();

  function handleLogout() {
    const userConfirm = window.confirm("Deseja realmente encerrar a sessão?");
    if (userConfirm) {
      signOut();
    }
    isMenuClose();
  }

  function handleProfile() {
    isMenuClose();
    navigate("/profile");
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        isMenuClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuClose]);

  return (
    <Container data-is-menu-open={isMenuOpen} {...rest}>
      <Header>
        <h1>
          <PiXBold onClick={isMenuClose} />
        </h1>
      </Header>

      <Main>
        <nav>
          <Search onChange={onChangeSearch} />
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
