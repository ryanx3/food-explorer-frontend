import {
  PageLayoutContainer,
  FooterLayoutContainer,
  HeaderLayoutContainer,
} from "./styles";

export function PageLayout({ children }) {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
}

export function HeaderLayout({ children }) {
  return <HeaderLayoutContainer>{children}</HeaderLayoutContainer>;
}

export function FooterLayout({ children }) {
  return <FooterLayoutContainer>{children}</FooterLayoutContainer>;
}
