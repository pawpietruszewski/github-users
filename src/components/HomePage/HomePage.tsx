import { Title } from './elements';

interface HomePageProps {
  title?: string;
}

export const HomePage = ({
  title,
}: HomePageProps): JSX.Element => (
  <Title>
    Home page {title}
  </Title>
);

export default HomePage;
