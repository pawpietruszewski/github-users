import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const colors = {
  black: '#000',
  blue: '#2d9cdb',
  darkGray: '#e0e0e0',
  gray: '#f2f2f2',
  lightBlue: '#c0e1f4',
  white: '#fff',
};

const easings = {
  easeOutQuad: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
};

const mixins = {
  visuallyHidden: `
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `,
};

const fonts = {
  sans: '"ABCFavoritVariable", Helvetica, sans-serif',
};

const settings = {
  headerDesktop: 103,
  headerHd: 108,
  headerMobile: 85,
  headerSmallMobile: 44,
  headerTablet: 85,
  headerUhd: 114,
};

export const mediaQueries = {
  desktop: 1440,
  hd: 1920,
  mobile: 700,
  smallMobile: 375,
  tablet: 1024,
  tabletPortrait: 768,
  uhd: 2560,
};

export const styles = {
  colors,
  easings,
  fonts,
  mediaQueries,
  mixins,
  settings,
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  button {
    appearance: none;
    background: transparent;
    border: 0;
    font-family: ${styles.fonts.sans};
  }

  input {
    -webkit-appearance: none;
    border: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${styles.colors.white};
    color: ${styles.colors.black};
    font-family: ${styles.fonts.sans};
  }
`;
