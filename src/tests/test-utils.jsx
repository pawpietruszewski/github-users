/* eslint-disable no-restricted-imports */
// test-utils.js
import { render } from '@testing-library/react';
import { SearchHistoryProvider } from 'src/contexts/searchHistoryContext';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return <SearchHistoryProvider>{children}</SearchHistoryProvider>;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
