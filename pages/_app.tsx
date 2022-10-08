import type { AppProps } from 'next/app';
import { GlobalStyle } from 'src/constants/style';
import { SearchHistoryProvider } from 'src/contexts/searchHistoryContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <SearchHistoryProvider>
        <Component {...pageProps} />
      </SearchHistoryProvider>
    </>
  );
}

export default App;
