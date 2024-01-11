import { PageLayout, LayoutHeader, LayoutFooter } from "./styles";

export function Page({ children }) {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  )
}

export function Header({ children }) {
  return (
    <LayoutHeader>
      {children}
    </LayoutHeader>
  )
}

export function Footer({ children }) {
  return (
    <LayoutFooter>
      {children}
    </LayoutFooter>
  )
}
