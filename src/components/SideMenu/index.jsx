import { useNavigate } from 'react-router-dom';

//SVG
import { PiXBold, PiSignOut } from 'react-icons/pi';

import { BrandMobileAdmin } from '../../assets/brand-mobile-admin'

//Components
import { Search } from "../Search";

import { Container, Main, Header, Footer } from "./styles";

export function SideMenu({ isMenuOpen, isMenuClose, isAdmin = false, ...rest }) {
  const navigate = useNavigate()

  function handleLogout() {
    isMenuClose()
    navigate("/") //Aqui é pra ir pra logout
  }

  function handleProfile() {
    isMenuClose()
    navigate("/profile")
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

          {isAdmin ?
            <a href="/new">Adicionar novo prato</a>
            : <a href="">Meus Favoritos</a>
          }
        </nav>
      </Main>

      <Footer>

       
          {!isAdmin && 
          <div className="user" onClick={handleProfile}>
            <img src="https://github.com/ryanx3.png" alt="Imagem do usuário" />

            <div className="name-user">
              <h1>Ryan Gabriel</h1>
              <span>Editar Perfil</span>
            </div>
          </div>}

        <PiSignOut onClick={handleLogout} />
      </Footer>
    </Container>
  );
}