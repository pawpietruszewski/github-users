import {
  FormEvent,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Input,
  Submit,
} from './elements';

import { useSearchHistory } from 'src/contexts/searchHistoryContext';

export interface SearchProps {
  submit: ({ query }: { query: string }) => void;
}

const Search = ({
  submit,
}: SearchProps) => {
  const { query: routerQuery } = useRouter();
  const { q } = routerQuery;
  const [query, setQuery] = useState(q || '');
  const { addNewHistoryElement } = useSearchHistory();

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!query) {
      return;
    }

    submit({ query: query as string });
    addNewHistoryElement(query as string);
  };

  const onChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const newQuery = ev?.currentTarget?.value || '';
    setQuery(newQuery);
  };

  return (
    <Container>
      <form
        aria-label="Search form"
        onSubmit={onSubmit}
      >
        <Input
          aria-label="Search Query"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          name="q"
          onChange={onChange}
          placeholder="Enter username"
          required
          spellCheck="false"
          type="text"
          value={query}
        />
        <Submit type="submit">
          Search
        </Submit>
      </form>
    </Container>
  );
};

export default Search;
