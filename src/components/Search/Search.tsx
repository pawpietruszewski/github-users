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

export interface SearchProps {
  submit: ({ query }: { query: string }) => void;
}

const Search = ({
  submit,
}: SearchProps) => {
  const { query: routerQuery } = useRouter();
  const { q } = routerQuery;
  const [query, setQuery] = useState(q || '');

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!query) {
      return;
    }

    submit({ query: query as string });
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
          aria-autocomplete="list"
          aria-controls="search-users-results"
          aria-label="Search Query"
          aria-owns="search-users-results"
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
