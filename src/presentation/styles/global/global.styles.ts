import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --theme-background-primary: ${({ theme }) => theme.background.primary};
    --theme-color-primary: ${({ theme }) => theme.color.primary};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-weight: 300;
    font-style: normal;
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
