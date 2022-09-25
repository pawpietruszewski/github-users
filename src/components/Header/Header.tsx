import {
  Container,
  Title,
} from './elements';

export interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  
  return (
    <Container>
      <Title>{ title }</Title>
    </Container>
  );
};

export default Header;
