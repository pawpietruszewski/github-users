import { useRouter } from 'next/router';
import Search from 'src/components/Search';
import SearchResults from 'src/components/SearchResults';

export const HomePage = (): JSX.Element => {
  const router = useRouter();

  const onSubmit = ({ query: searchQuery }: { query: string }): void => {
    router.push({ query: { q: searchQuery } });
  };

  return (
    <>
      <Search submit={onSubmit} />
      <SearchResults />
    </>
  );
};

export default HomePage;
