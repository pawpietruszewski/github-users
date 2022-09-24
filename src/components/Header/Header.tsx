import Link from 'next/link';

import {
  Container,
  Logo,
  Title,
} from './elements';

export interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  
  return (
    <Container>
      <Link href="/" passHref>
        <Logo>
          logo
        </Logo>
      </Link>
      <Title>{ title }</Title>
    </Container>
  );
};

export default Header;
