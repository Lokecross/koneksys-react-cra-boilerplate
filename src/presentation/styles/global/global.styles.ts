import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 300;
    font-style: normal;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #f8f8f8;
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
