import { render, screen } from 'src/tests/test-utils';
import SearchHistory from 'src/components/SearchHistory';
import { SearchHistoryContext } from 'src/contexts/searchHistoryContext';

describe('SearchHistory', () => {
  test('renders', () => {
    render(<SearchHistoryContext.Provider value={{
      addNewHistoryElement: () => {},
      history: ['test', 'test2'],
      setHistory: () => {},
    }}>
      <SearchHistory />
      </SearchHistoryContext.Provider>);
    screen.getByText('test');
    screen.getByText('test2');
  });
});
