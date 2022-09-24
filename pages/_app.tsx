import type { AppProps } from 'next/app';
import { GlobalStyle } from 'src/constants/style';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
