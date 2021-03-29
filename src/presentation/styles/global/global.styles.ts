import { createGlobalStyle } from 'styled-components';

import { varColors } from '@styles/colors';
import { varFontsizes } from '@styles/fonts';

const GlobalStyles = createGlobalStyle`
  :root {
    ${varColors}
    ${varFontsizes}
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: var(--fontsize-md);
    transition: all 0.1s linear;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--theme-background-primary);
  }

  body, input, button {
    color: #50525f;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export { GlobalStyles };
