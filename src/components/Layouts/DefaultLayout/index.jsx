import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Outlet } from "react-router-dom";

import { LayoutContainer } from "./styles";

export function DefaultLayout({ onOpenMenu }) {
  return (
    <LayoutContainer>
      <Header onOpenMenu={onOpenMenu} />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}
