import { css } from 'styled-components';

import { fontsizes } from '../fontsizes/fontsizes.styles';

const varFontsizes = css`
  ${() => {
    const final: string[] = [];

    const pre = '--fontsize';

    const transform = (start: string, obj: string | any) => {
      if (typeof obj === 'string') {
        final.push(`${start}: ${obj};`);

        return;
      }

      Object.keys(obj).forEach(key => {
        transform(`${start}-${key}`, obj[key]);
      });
    };

    transform(pre, fontsizes);

    return final;
  }}
`;

export { varFontsizes };
