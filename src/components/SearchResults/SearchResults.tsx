import { useRouter } from 'next/router';

import {
  Container,
  Title,
  Results,
  Loading,
} from './elements';

import Accordion from 'src/components/Accordion';
import RepoTile from 'src/components/RepoTile';
import { useUsers } from 'src/hooks/useUsers';

const Search = () => {
  const { query: routerQuery } = useRouter();
  const { q } = routerQuery;
  const { data, isLoading } = useUsers(q as string);

  return (
    <Container>
      <Title>Showing users for &rdquo;{ q }&rdquo;</Title>
      {isLoading ? (
        <Loading>loading...</Loading>
      ) : (
      <Results>
      {data?.items.map((item) => (
        <Accordion title={item.login} key={item.node_id}>
          <RepoTile
            title="Repo title"
            description="Repo description"
            stars={21}
          />  
        </Accordion>
      ))}
      </Results>
      )}
      
    </Container>
  );
};

export default Search;
