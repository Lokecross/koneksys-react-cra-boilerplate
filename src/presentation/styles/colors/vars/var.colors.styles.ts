import { css, DefaultTheme } from 'styled-components';

const varColors = css`
  ${({ theme }) => {
    const final: string[] = [];

    const pre = '--theme';

    const transform = (start: string, obj: string | DefaultTheme | any) => {
      if (typeof obj === 'string') {
        final.push(`${start}: ${obj};`);

        return;
      }

      Object.keys(obj).forEach(key => {
        transform(`${start}-${key}`, obj[key]);
      });
    };

    transform(pre, theme);

    return final;
  }}
`;

export { varColors };
