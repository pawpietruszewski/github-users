import { ReactNode } from 'react';
import Header from 'src/components/Header/Header';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({
  children,
}: LayoutProps) => (
  <>
    <Header title="Github users" />
    {children}
  </>
);

export default Layout;
