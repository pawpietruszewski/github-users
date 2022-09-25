import { render, screen } from 'src/tests/test-utils';
import SearchResults from 'src/components/SearchResults';
import { useUsers } from 'src/hooks/useUsers';
import { useRepos } from 'src/hooks/useRepos';


jest.mock('src/hooks/useUsers');
jest.mock('src/hooks/useRepos');

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      q: 'test',
    },
  }),
}));

describe('SearchResults', () => {
  beforeEach(() => {
    useUsers.mockReturnValue({
      data: {
        items: [
          {
            node_id: '1',
            login: 'login1',
            repos_url: 'url',
          },
        ],
      },
      isLoading: false,
    });

    useRepos.mockReturnValue({
      data: [
        {
          id: '1',
          name: 'repo1',
          description: 'desc1',
          stargazers_count: 33,
        },
      ],
      isLoading: false,
    });
  });

  test('renders', () => {
    render(<SearchResults />);
    screen.getByText('login1');
  });
});
