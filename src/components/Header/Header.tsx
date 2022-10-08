import Link from 'next/link';

import {
  Container,
  Nav,
  SearchHistoryLink,
  Title,
} from './elements';

export interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <>
    <Container>
      <Title>{ title }</Title>
    </Container>
    <Nav>
      <Link href="/" passHref>
        <SearchHistoryLink>
            Search
        </SearchHistoryLink>
      </Link>
      <Link href="/history" passHref>
        <SearchHistoryLink>
            Show Search History
        </SearchHistoryLink>
      </Link>
    </Nav>
  </>
);

export default Header;
