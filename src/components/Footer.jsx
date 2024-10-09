import { useMediaQuery } from "react-responsive";

import { BrandFooter } from "../assets/brand-footer";
import { BrandMobileFooter } from "../assets/brand-mobile-footer";

import { FooterLayout } from "./Layouts/PagesLayout";

import { FooterContainer, Brand, Copyright } from "./Footer";

export function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const Logo = isMobile ? <BrandMobileFooter /> : <BrandFooter />;

  return (
    <FooterContainer>
      <FooterLayout>
        <Brand>{Logo}</Brand>

        <Copyright>© 2023 - Todos os direitos reservados.</Copyright>
      </FooterLayout>
    </FooterContainer>
  );
}
