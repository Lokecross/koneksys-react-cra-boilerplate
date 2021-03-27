import { HTMLProps } from 'react';

import { Container } from './Button.styles';

const Button = ({ children, onClick, style }: HTMLProps<HTMLButtonElement>) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
};

export { Button };
