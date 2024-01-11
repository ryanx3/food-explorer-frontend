import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PiCaretLeft, PiCameraBold} from "react-icons/pi";

//Components
import * as Layouts from '../../components/Layouts'
import * as Input from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'

import { Container, Avatar, Form } from "./styles";

export function Profile() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const navigate = useNavigate()
  
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  function handleBack() {
    navigate("/")
  }

  useEffect(() => {
    if (!isMobile && isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <Container>
      <SideMenu 
      isMenuOpen={isMenuOpen}
      isMenuClose={() => setIsMenuOpen(false)}/>

      <Header 
      onOpenMenu={() => setIsMenuOpen(true)}
      />

      <Layouts.Page>
        <main>

          <a onClick={handleBack}> <PiCaretLeft /> voltar</a>

          <Form>
            <Avatar>
              <img src="https://github.com/ryanx3.png" alt=""/>
              <label htmlFor="avatar">
                <PiCameraBold/>
                <input 
                id="avatar"
                type="file"/>
              </label>
            </Avatar>

            <Input.Default
              title="Seu nome"
              value="Ryan Martins" />
            <Input.Default title="Seu email"
              type="email"
              value="ryan@gmail.com" />
            <Input.Default
              type="password"
              title="Senha atual"
              placeholder="Digite a sua senha atual" />
            <Input.Default
              type="password"
              title="Nova senha"
              placeholder="No mínimo 6 caracteres" />

            <Button title="Salvar alterações" />

          </Form>
        </main>
      </Layouts.Page>

    </Container>
  )
}