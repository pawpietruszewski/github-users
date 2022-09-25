import { render, screen } from 'src/tests/test-utils';
import Accordion from 'src/components/Accordion';
import { useRepos } from 'src/hooks/useRepos';

jest.mock('src/hooks/useRepos');

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      q: 'test',
    },
  }),
}));

describe('Accordion', () => {
  beforeEach(() => {
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
    render(<Accordion title="test" reposUrl="https://test" />);
    screen.getByText('test');
    screen.getByText('repo1');
    screen.getByText('desc1');
    screen.getByText('33');
  });
});
