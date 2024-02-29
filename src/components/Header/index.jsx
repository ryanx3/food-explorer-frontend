import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
//SVG
import { useAuth } from "../../hooks/Auth";

import {
  PiMagnifyingGlassLight,
  PiReceipt,
  PiList
} from "react-icons/pi";

//Components
import { Search } from "../Search";
import { Button } from "../Button";
import * as Layout from "../Layouts";

//Images
import { Brand } from '../../assets/brand'
import { BrandAdmin } from '../../assets/brand-admin'
import { BrandMobile } from '../../assets/brand-mobile'
import { BrandMobileAdmin } from '../../assets/brand-mobile-admin'
import avatarPlaceholder from '../../assets/avatarPlaceholder.png'
import { Container, Menu, Logo, Profile } from './styles'
import { api } from "../../services/api";
import { useState } from "react";

export function Header({ isAdmin = false, onOpenMenu, onChangeSearch, onClick, ...rest }) {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const AvatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(AvatarURL)
  const [isOpenList, setIsOpenList] = useState(false)

  function handleHome() {
    navigate("/");
  }

  function handleOpenDetails() {
  navigate("/new");
  }

  function handleOpenList() {
    setIsOpenList(prev => !prev);
    if (isMobile && isOpenList === true) {
      setIsOpenList(prev => !prev);
    }
  }

  function handleSignOut() {
    const userConfirm = window.confirm("Deseja realmente encerrar a sessão?");
    if (userConfirm) {
      navigate("/");
      signOut();
    }
  }

  const LogoDesktop = !isAdmin ? <Brand /> : <BrandAdmin />;
  const LogoMobile = !isAdmin ? <BrandMobile /> : <BrandMobileAdmin />;

  return (
    <Container {...rest}>
      <Layout.Header>

        {isMobile &&
          <Menu onClick={onOpenMenu}>
            <PiList />
          </Menu>
        }

        <Logo onClick={handleHome}>
          {isMobile ? LogoMobile : LogoDesktop}
        </Logo>

        {!isMobile &&
          <Search
            onChange={onChangeSearch}
            onClickButton={onClick}
            placeholder="Busque por pratos ou ingredientes"
            icon={PiMagnifyingGlassLight}
          />}

        {!isMobile && <Button
          onClick={handleOpenDetails}
          title="Novo Prato"
          icon={isAdmin ? "" : PiReceipt}
        />}

        <Profile>
          {isMobile ?
            (isAdmin ? <div /> : <PiReceipt />) :
            <img src={avatar} onClick={handleOpenList} />
          }
          {isOpenList &&
            <nav>
              <ul>
                <li><Link to={"/profile"}>Perfil</Link></li>
                <li><Link>Favoritos</Link></li>
                <li onClick={handleSignOut}>Sair</li>
              </ul>
            </nav>
          }

        </Profile>
      </Layout.Header>
    </Container>
  )
}