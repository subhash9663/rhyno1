// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
  }

  a {
    text-decoration: none;
    color: ${theme.colors.black};
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
