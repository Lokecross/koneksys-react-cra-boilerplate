import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    background: {
      primary: string;
      secondary: string;
    };

    color: {
      primary: string;
    };

    shimmer: {
      primary: string;
      secondary: string;
    };

    border: {
      secondary: string;
    };
  }
}
