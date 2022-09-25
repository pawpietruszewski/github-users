import { useRouter } from 'next/router';

import {
  Container,
  Loader,
  Loading,
  Results,
  Title,
} from './elements';

import Accordion from 'src/components/Accordion';
import { useUsers } from 'src/hooks/useUsers';

const Search = () => {
  const { query: routerQuery } = useRouter();
  const { q } = routerQuery;
  const { data, isLoading } = useUsers(q as string);

  return (
    <Container>
      {data && (
        <Title>Showing users for &rdquo;{ q }&rdquo;</Title>
      )}
      {q && isLoading ? (
        <Loading>loading<Loader/></Loading>
      ) : (
      <Results>
        {data?.items.map((item) => (
          <Accordion title={item.login} key={item.node_id} reposUrl={item.repos_url} />
        ))}
      </Results>
      )}
    </Container>
  );
};

export default Search;
