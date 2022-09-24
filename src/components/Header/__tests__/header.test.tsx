import { render, screen } from 'src/tests/test-utils';
import Header from 'src/components/Header';

describe('Header', () => {
  test('renders', () => {
    render(<Header title="test"/>);
    screen.getByText('test');
  });
});
