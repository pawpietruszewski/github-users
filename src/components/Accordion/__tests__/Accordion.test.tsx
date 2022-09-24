import { render, screen } from 'src/tests/test-utils';
import Accordion from 'src/components/Accordion';

describe('Header', () => {
  test('renders', () => {
    render(<Accordion title="test">
        content
      </Accordion>);
    screen.getByText('test');
    screen.getByText('content');
  });
});