import { fireEvent, render, screen } from 'src/tests/test-utils';
import Search from 'src/components/Search';

const mockOnSubmit = jest.fn()

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {
      q: 'test'
    }
  }),
}))

describe('Search', () => {
  test('renders', () => {
    render(<Search submit={mockOnSubmit}/>);
    screen.getByText('Search');
  });

  it('submits query', () => {
    render(<Search submit={mockOnSubmit}/>);

    fireEvent.change(screen.getByLabelText('Search Query'), {
      target: { value: 'user' },
    })
    fireEvent.click(screen.getByText('Search'))
    expect(mockOnSubmit).toHaveBeenCalledWith({query: 'user'})
  })
});
