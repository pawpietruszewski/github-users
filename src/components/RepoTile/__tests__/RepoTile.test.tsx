import { render, screen } from 'src/tests/test-utils';
import RepoTile from 'src/components/RepoTile';

describe('RepoTile', () => {
  test('renders', () => {
    render(<RepoTile
      title="Repo title"
      description="Repo description"
      stars={21}
    />);
    screen.getByText('Repo title');
    screen.getByText('Repo description');
    screen.getByText('21');
  });
});
