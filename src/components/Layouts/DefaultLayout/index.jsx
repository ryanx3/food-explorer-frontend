import { SideMenu } from "../../SideMenu";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Outlet } from "react-router-dom";

import { LayoutContainer, MainContent } from "./styles";
import { useSearch } from "../../../hooks/Search";

export function DefaultLayout({}) {
  const { setSearch } = useSearch();

  return (
    <LayoutContainer>
      <Header onChangeSearch={(e) => setSearch(e.target.value)} />
      <SideMenu />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}
