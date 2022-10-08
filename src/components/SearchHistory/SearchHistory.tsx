import Link from 'next/link';
import {
  Empty,
  Container,
} from './elements';

import { useSearchHistory } from 'src/contexts/searchHistoryContext';

const SearchHistory = () => {
  const { history } = useSearchHistory();
  
  return history.length ? (
    <Container>
      {history?.map((item: string, index: number) => <li key={`${item}${index}`}>
      <Link href={{
        pathname: '/',
        query: { q: item },
      }}
      >
        {item}
      </Link>
      </li>)}
    </Container>
  ) : (
    <Empty>
      No history
    </Empty>
  );
};

export default SearchHistory;
